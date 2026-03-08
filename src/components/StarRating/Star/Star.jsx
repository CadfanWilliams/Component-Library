import React from "react";
import PropTypes from "prop-types";
import { StarSvg } from "./Star.styles";

export default function Star({ fill, size, index }) {
  const id = `star-gradient-${index}`;
  const bgColor = fill === "empty" ? "#d8d8d8" : "#f5a623";

  return (
    <StarSvg
      size={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {fill === "half" && (
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#f5a623" />
            <stop offset="50%" stopColor="#d8d8d8" />
          </linearGradient>
        )}
      </defs>
      <rect
        x="0"
        y="0"
        width="40"
        height="40"
        rx="6"
        ry="6"
        fill={fill === "half" ? `url(#${id})` : bgColor}
      />
      <path
        d="M20 8 l3.09 6.26 6.91 1-5 4.87 1.18 6.87L20 23.77l-6.18 3.23L15 20.13 10 15.26l6.91-1z"
        fill="white"
      />
    </StarSvg>
  );
}

Star.propTypes = {
  fill: PropTypes.oneOf(["full", "half", "empty"]).isRequired,
  size: PropTypes.number,
  index: PropTypes.number.isRequired,
};

Star.defaultProps = {
  size: 30,
};
