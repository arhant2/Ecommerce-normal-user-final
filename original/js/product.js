/* =========================== product page ============================ */

const specProdImgAct = document.getElementById("spec-product-image-act");
const specProdImgs = document.querySelectorAll(
  "#spec-product-images-outer img"
);
const specProdZoomView = document.getElementById("spec-product-zoom-view");
const specProdZoomLens = document.getElementById("spec-product-zoom-lens");
const specProdImgDiv = document.getElementById("spec-product-image-div-inner");
const specProdRight = document.getElementById("spec-product-right");
let cx, cy;

/* ============== hover and change image ============ */

specProdImgs.forEach((el) => {
  el.addEventListener("mouseover", function () {
    specProdImgAct.src = this.src;

    //to keep intact zoom effect
    specProdZoomView.style.backgroundImage = `url("${specProdImgAct.src}")`;
  });
});

/* ================ set size for zoom effect ================== */
specProdZoomView.style.width = specProdRight.offsetWidth + 40 + "px";

/* ================ zoom effect ================== */

specProdZoomView.style.backgroundImage = `url("${specProdImgAct.src}")`;

/*execute a function when someone moves the cursor over the image, or the lens:*/
specProdZoomLens.addEventListener("mousemove", moveLens);
specProdImgAct.addEventListener("mousemove", moveLens);

/*and also for touch screens:*/
specProdZoomLens.addEventListener("touchmove", moveLens);
specProdImgAct.addEventListener("touchmove", moveLens);

// show hide zoom-view-box and lens
specProdImgDiv.addEventListener("mouseenter", showViewandLens);
specProdImgDiv.addEventListener("mouseleave", hideViewandLens);

/*                      ============= Functions ============ =============================================================================================================================================================================================================================================================================================== */

function moveLens(e) {
  /*prevent any other actions that may occur when moving over the image:*/
  e.preventDefault();
  /*get the cursor's x and y positions:*/
  const pos = getCursorPos(e);
  /*calculate the position of the lens:*/
  let x = pos.x - specProdZoomLens.offsetWidth / 2;
  let y = pos.y - specProdZoomLens.offsetHeight / 2;

  /*prevent the lens from being positioned outside the image:*/
  if (x > specProdImgAct.width - specProdZoomLens.offsetWidth) {
    x = specProdImgAct.width - specProdZoomLens.offsetWidth;
  } else if (x < 0) {
    x = 0;
  }

  if (y > specProdImgAct.height - specProdZoomLens.offsetHeight) {
    y = specProdImgAct.height - specProdZoomLens.offsetHeight;
  } else if (y < 0) {
    y = 0;
  }

  /*set the position of the lens:*/
  specProdZoomLens.style.left = `${x}px`;
  specProdZoomLens.style.top = `${y}px`;
  /*display what the lens "sees":*/
  specProdZoomView.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
}

function getCursorPos(e) {
  let a,
    x = 0,
    y = 0;
  e = e || window.event;
  /*get the x and y positions of the image:*/
  a = specProdImgAct.getBoundingClientRect();
  /*calculate the cursor's x and y coordinates, relative to the image:*/
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  /*consider any page scrolling:*/
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return { x: x, y: y };
}

function showViewandLens(event) {
  specProdZoomView.style.display = "block";
  specProdZoomLens.style.display = "block";
  cx = specProdZoomView.offsetWidth / specProdZoomLens.offsetWidth;
  cy = specProdZoomView.offsetHeight / specProdZoomLens.offsetHeight;
  specProdZoomView.style.backgroundSize = `${specProdImgAct.width * cx}px ${
    specProdImgAct.height * cy
  }px`;
}

function hideViewandLens(event) {
  specProdZoomView.style.display = "none";
  specProdZoomLens.style.display = "none";
}
