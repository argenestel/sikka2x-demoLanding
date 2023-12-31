// StarRating.js

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars: React.ReactElement[] = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest half
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} color="#7ED56F" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStarHalfAlt key={i} color="#7ED56F" />);
      } else {
        stars.push(<FaStar key={i} color="#FFF" />);
      }
    }
    return stars;
  };

  return <div style={{ display: "flex" }}>{renderStars()}</div>;
};

export default StarRating;
