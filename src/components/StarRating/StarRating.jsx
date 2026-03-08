import { StarsContainer } from "./StarRating.styles";
import Star from "./Star/Star";
import PropTypes from "prop-types";

export default function StarRating({ rating, label, size }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    if (rating >= value) return "full";
    if (rating >= value - 0.5) return "half";
    return "empty";
  });

  const ariaLabel = label || `Rated ${rating} out of 5 stars`;

  return (
    <StarsContainer role="img" aria-label={ariaLabel}>
      {stars.map((fill, i) => (
        <Star key={i} fill={fill} size={size} index={i} />
      ))}
    </StarsContainer>
  );
}

StarRating.propTypes = {
  /** Numeric rating between 0 and 5 (supports decimals) */
  rating: PropTypes.number.isRequired,
  /** Size of each star in pixels */
  size: PropTypes.number,
  /** Override the aria-label for the star group */
  label: PropTypes.string,
};

StarRating.defaultProps = {
  size: 30,
  label: null,
};
