import React, { useState } from "react";
import "../styles/ReviewCarousel.css";

const reviewImages = [
  "review1.jpg",
  "review2.jpg",
  "review.jpg",
  "review4.jpg",
  "review5.jpg",
  "review6.jpg",
  "review7.jpg",
  "review8.jpg",
];

const ReviewCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;

  const goPrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? reviewImages.length - itemsPerView : prev - 1
    );
  };

  const goNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerView >= reviewImages.length ? 0 : prev + 1
    );
  };

  const visibleReviews = reviewImages.slice(
    startIndex,
    startIndex + itemsPerView
  );

  // Handle wrapping if at the end
  while (visibleReviews.length < itemsPerView) {
    visibleReviews.push(reviewImages[visibleReviews.length - itemsPerView]);
  }

  return (
    <div className="carousel-wrapper">
      <button className="nav left" onClick={goPrev}>
        &#10094;
      </button>

      <div className="carousel-multi">
        {visibleReviews.map((img, index) => (
          <img
            key={index}
            src={`/assets/reviews/${img}`}
            alt={`Review ${startIndex + index + 1}`}
            className="carousel-card"
          />
        ))}
      </div>

      <button className="nav right" onClick={goNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ReviewCarousel;
