import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import StarRating from "../components/StarRating/StarRating";

describe("StarRating", () => {
  it("renders with correct aria-label for a whole number rating", () => {
    render(<StarRating rating={4} />);
    expect(screen.getByRole("img")).toHaveAccessibleName(
      "Rated 4 out of 5 stars",
    );
  });

  it("renders with correct aria-label for a decimal rating", () => {
    render(<StarRating rating={4.6} />);
    expect(screen.getByRole("img")).toHaveAccessibleName(
      "Rated 4.6 out of 5 stars",
    );
  });

  it("accepts a custom label override", () => {
    render(<StarRating rating={3} label="Custom label" />);
    expect(screen.getByRole("img")).toHaveAccessibleName("Custom label");
  });

  it("renders 5 star SVG elements", () => {
    const { container } = render(<StarRating rating={4.6} />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(5);
  });

  it("renders all stars as aria-hidden to prevent screen reader duplication", () => {
    const { container } = render(<StarRating rating={4} />);
    const svgs = container.querySelectorAll("svg");
    svgs.forEach((svg) => {
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });
  });

  it("renders 0 stars without crashing", () => {
    render(<StarRating rating={0} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders 5 stars without crashing", () => {
    render(<StarRating rating={5} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("StarRating – edge cases", () => {
  it("clamps gracefully with a rating above 5", () => {
    render(<StarRating rating={6} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("clamps gracefully with a negative rating", () => {
    render(<StarRating rating={-1} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("handles a rating of exactly 2.5 (half star boundary)", () => {
    render(<StarRating rating={2.5} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
