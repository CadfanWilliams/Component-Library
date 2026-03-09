import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import StarRating from "src\components\StarRating\StarRating.jsx";

describe("StarRating", () => {
  it("renders with correct aria-label for a whole number rating", () => {
    render(<StarRating rating={4} />);
    expect(screen.getByRole("img")).toHaveAccessibleName(
      "Rated 4 out of 5 stars",
    );
  });
});
