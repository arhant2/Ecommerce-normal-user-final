const writeReviewBtn = document.getElementById('write-review-btn');
const reviewsFormWrapper = document.getElementById('reviews-form-wrapper');
const reviewsFormRatingStarBtns = document.getElementsByClassName(
  'reviews-form-rating-star-btn'
);
const reviewsFormRatingStarBtnIcons = document.querySelectorAll(
  '.reviews-form-rating-star-btn i'
);
const reviewsFormRatings = document.getElementById('reviews-form-ratings');

/* ------------ display/hide form -------------- */

writeReviewBtn.addEventListener('click', function () {
  reviewsFormWrapper.classList.toggle('display-none');
});

/* ------------ reviews form stars -------------- */

/* helper functions */

const markStars = (count) => {
  for (let i = 0; i < 5; ++i) {
    reviewsFormRatingStarBtnIcons[i].classList.remove('fas');
    if (i < count) {
      reviewsFormRatingStarBtnIcons[i].classList.add('fas');
    }
  }
};

const reviewStarButtonNumber = (btn) => {
  return Number(btn.id[btn.id.length - 1]);
};

/* actual listeners */

Array.from(reviewsFormRatingStarBtns).forEach((btn) => {
  btn.addEventListener('mouseenter', function () {
    markStars(reviewStarButtonNumber(this));
  });
  btn.addEventListener('mouseleave', function () {
    markStars(reviewsFormRatings.value);
  });
  btn.addEventListener('click', function () {
    reviewsFormRatings.value = reviewStarButtonNumber(this);
  });
});
