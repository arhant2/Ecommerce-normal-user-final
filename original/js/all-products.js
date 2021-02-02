const allProductsWrapper = document.getElementById("all-products-wrapper");
const allProductsRowViewBtn = document.getElementById(
  "all-products-row-view-btn"
);

const allProductsColumnViewBtn = document.getElementById(
  "all-products-column-view-btn"
);

allProductsRowViewBtn.addEventListener("click", () => {
  allProductsWrapper.classList.remove("products-column-view");
  allProductsRowViewBtn.classList.add("all-products-toggle-btn-active");
  allProductsColumnViewBtn.classList.remove("all-products-toggle-btn-active");
});

allProductsColumnViewBtn.addEventListener("click", () => {
  allProductsWrapper.classList.add("products-column-view");
  allProductsRowViewBtn.classList.remove("all-products-toggle-btn-active");
  allProductsColumnViewBtn.classList.add("all-products-toggle-btn-active");
});
