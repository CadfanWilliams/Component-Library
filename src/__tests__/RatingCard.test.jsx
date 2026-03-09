import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import RatingCard from "../components/RatingCard/RatingCard";

const defaultBreakdown = [
  { starValue: 1, count: 40 },
  { starValue: 2, count: 4 },
  { starValue: 3, count: 55 },
  { starValue: 4, count: 111 },
  { starValue: 5, count: 952 },
];

const totalReviews = defaultBreakdown.reduce((sum, r) => sum + r.count, 0);
const rawRating =
  defaultBreakdown.reduce((sum, r) => sum + r.starValue * r.count, 0) /
  totalReviews;
// .toFixed(1) matches what RatingCard uses for scoreText display
const expectedRating = rawRating.toFixed(1);

describe("RatingCard tests", () => {
  it('renders the "Excellent" label', () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getByText("Excellent")).toBeInTheDocument();
  });

  it("computes and displays the correct score text from breakdown", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getByText(`${expectedRating} OUT OF 5`)).toBeInTheDocument();
  });

  it("has correct section aria-label with computed rating and total reviews", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    const section = screen.getByRole("region");
    expect(section).toHaveAccessibleName(
      `Product rating: ${rawRating} out of 5 stars from ${totalReviews} reviews`,
    );
  });

  it("renders a star rating image with the computed rating label", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(
      screen.getByRole("img", { name: `${rawRating} out of 5 stars` }),
    ).toBeInTheDocument();
  });

  it("renders the feefo link with correct rel and target attributes", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    const link = screen.getByLabelText(
      "View reviews on Feefo (opens in new tab)",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the feefo link with correct aria-label for accessibility", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(
      screen.getByLabelText("View reviews on Feefo (opens in new tab)"),
    ).toBeInTheDocument();
  });

  it('renders "Product Rating" text', () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getByText("Product Rating")).toBeInTheDocument();
  });

  it("renders a divider element", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(document.querySelector("hr")).toBeInTheDocument();
  });

  it("renders with a single star in breakdown without crashing", () => {
    const minimal = [{ starValue: 5, count: 1 }];
    render(<RatingCard breakdown={minimal} />);
    expect(screen.getByText("5.0 OUT OF 5")).toBeInTheDocument();
  });
  it("renders with an empty breakdown without crashing", () => {
    render(<RatingCard breakdown={[]} />);
    expect(screen.getByText("0.0 OUT OF 5")).toBeInTheDocument();
  });
  it("renders with no breakdown prop without crashing", () => {
    render(<RatingCard />);
    expect(screen.getByText("0.0 OUT OF 5")).toBeInTheDocument();
  });
});

describe("RatingCard accessibility tests", () => {
  it('renders a <section> with role="region"', () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("section has a descriptive aria-label including the rating and total reviews", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getByRole("region")).toHaveAccessibleName(
      `Product rating: ${rawRating} out of 5 stars from ${totalReviews} reviews`,
    );
  });

  it('renders a star rating with role="img" and a descriptive aria-label', () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(
      screen.getByRole("img", { name: `${rawRating} out of 5 stars` }),
    ).toBeInTheDocument();
  });

  it("feefo anchor has an aria-label communicating it opens in a new tab", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(
      screen.getByLabelText("View reviews on Feefo (opens in new tab)"),
    ).toBeInTheDocument();
  });

  it('feefo anchor has target="_blank" and rel="noopener noreferrer"', () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    const anchor = screen.getByLabelText(
      "View reviews on Feefo (opens in new tab)",
    );
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders 5 progressbar elements for the breakdown", () => {
    render(<RatingCard breakdown={defaultBreakdown} />);
    expect(screen.getAllByRole("progressbar")).toHaveLength(5);
  });
});
