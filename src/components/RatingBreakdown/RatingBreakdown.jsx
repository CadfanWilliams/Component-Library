import React from "react";
import PropTypes from "prop-types";
import RatingBar from "./RatingBar/RatingBar";

/**
 * Feefo-style product rating widget.
 * Displays an overall rating with stars, score, and a breakdown by star level.
 */
export default function RatingBreakdown({ breakdown }) {
  const maxCount = Math.max(...(breakdown?.map((b) => b.count) || []), 1);

  return (
    <>
      {breakdown && [...breakdown].reverse().map(({ starValue, count }) => (
        <RatingBar
          key={starValue}
          starValue={starValue}
          count={count}
          maxCount={maxCount}
        />
      ))}
    </>
  );
}

RatingBreakdown.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  /** Breakdown of reviews per star level, from 1 to 5 */
  breakdown: PropTypes.arrayOf(
    PropTypes.shape({
      starValue: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
