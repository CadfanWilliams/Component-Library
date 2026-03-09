import React from "react";
import PropTypes from "prop-types";
import {
  BarRow,
  StarLabel,
  StarIcon,
  BarTrack,
  BarFill,
  Count,
} from "./RatingBar.styles";

/**
 * A single row in the rating breakdown showing star label, bar, and count.
 */
export default function RatingBar({ starValue, count, maxCount }) {
  const percentage =
    (maxCount ?? 0) > 0 ? Math.round((count / maxCount) * 100) : 0;

  return (
    <BarRow>
      <StarLabel aria-hidden="true">{starValue}</StarLabel>
      <StarIcon aria-hidden="true">★</StarIcon>
      <BarTrack
        role="progressbar"
        aria-valuenow={count}
        aria-valuemin={0}
        aria-valuemax={maxCount}
        aria-label={`${starValue} star reviews: ${count}`}
      >
        <BarFill percentage={percentage} starValue={starValue} />
      </BarTrack>
      <Count>{count}</Count>
    </BarRow>
  );
}

RatingBar.propTypes = {
  /** Star value for this row (1–5) */
  starValue: PropTypes.number.isRequired,
  /** Number of reviews with this star rating */
  count: PropTypes.number.isRequired,
  /** The maximum count across all bars (used to compute fill percentage) */
  maxCount: PropTypes.number.isRequired,
};
