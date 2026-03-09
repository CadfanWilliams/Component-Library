import React from "react";
import {
  CardContainer,
  Header,
  RatingLabel,
  ScoreText,
  FeefoLogo,
  Divider,
  FeefoText,
} from "./RatingCard.styles";
import StarRating from "../StarRating/StarRating";
import RatingBreakdown from "../RatingBreakdown/RatingBreakdown";
import PropTypes from "prop-types";

export default function RatingCard({ breakdown }) {
  // null safety: ensure breakdown is an array before processing
  const safeBreakdown = Array.isArray(breakdown) ? breakdown : [];

  const totalReviews = safeBreakdown.reduce(
    (sum, rating) => sum + rating.count,
    0,
  );

  const totalStars = safeBreakdown.reduce((sum, rating) => {
    return sum + rating.starValue * rating.count;
  }, 0);
  const rating = totalReviews > 0 ? totalStars / totalReviews : 0;
  const scoreText = `${rating.toFixed(1)} OUT OF 5`;

  return (
    <CardContainer
      aria-label={`Product rating: ${rating} out of 5 stars from ${totalReviews} reviews`}
    >
      <Header>
        <RatingLabel>Excellent</RatingLabel>

        <StarRating
          rating={rating}
          label={`${rating} out of 5 stars`}
          size={30}
        />

        <ScoreText>{scoreText}</ScoreText>

        <FeefoLogo>
          <span>Product Rating</span>
          <a
            href="https://www.feefo.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View reviews on Feefo (opens in new tab)"
          >
            <FeefoText>feefo</FeefoText>
            <sup aria-hidden="true" style={{ fontSize: "0.6rem" }}>
              ®
            </sup>
          </a>
        </FeefoLogo>
      </Header>

      <Divider />

      <RatingBreakdown breakdown={breakdown} />
    </CardContainer>
  );
}

RatingCard.propTypes = {
  breakdown: PropTypes.arrayOf(
    PropTypes.shape({
      starValue: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

RatingCard.defaultProps = {
  breakdown: [],
};
