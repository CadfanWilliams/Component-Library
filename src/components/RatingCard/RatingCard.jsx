import React from "react";
import {
  CardContainer,
  Header,
  RatingLabel,
  ScoreText,
  FeefoLogo,
  BarsContainer,
  Divider,
  FeefoText,
} from "./RatingCard.styles";
import StarRating from "../StarRating/StarRating";
import RatingBreakdown from "../RatingBreakdown/RatingBreakdown";

export default function Card({ rating, totalReviews, breakdown }) {
  const scoreText = `${rating.toFixed(1)} OUT OF 5`;

  return (
    <CardContainer
      aria-label={`Product rating: ${rating} out of 5 stars from ${totalReviews} reviews`}
    >
      <Header>
        <RatingLabel>Excellent</RatingLabel>

        <StarRating rating={rating} label={`${rating} out of 5 stars`} />

        <ScoreText>{scoreText}</ScoreText>

        <FeefoLogo>
          <span>Product Rating</span>
          <a
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
