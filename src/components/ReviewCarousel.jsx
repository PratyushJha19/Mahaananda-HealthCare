import React, { useState, useEffect } from "react";
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

const itemsPerView = 3;

const ReviewCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const goNext = () => {
    setIsSliding(true); // trigger animation
    setTimeout(() => {
      setStartIndex((prev) =>
        prev + itemsPerView >= reviewImages.length ? 0 : prev + 1
      );
      setIsSliding(false); // reset animation
    }, 400); // should match animation duration
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (startIndex + i) % reviewImages.length;
    visibleReviews.push(reviewImages[index]);
  }

  return (
    <div className="carousel-wrapper">
      <div className={`carousel-multi ${isSliding ? "slide-left" : ""}`}>
        {visibleReviews.map((img, index) => (
          <img
            key={index}
            src={`/assets/reviews/${img}`}
            alt={`Review ${startIndex + index + 1}`}
            className="carousel-card"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
