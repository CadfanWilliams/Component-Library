import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import RatingBar from "../components/RatingBreakdown/RatingBar/RatingBar";

describe("RatingBar – rendering", () => {
  it("renders without crashing", () => {
    render(<RatingBar starValue={5} count={952} maxCount={952} />);
  });

  it("renders the star value label", () => {
    render(<RatingBar starValue={5} count={952} maxCount={952} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders the count", () => {
    render(<RatingBar starValue={5} count={952} maxCount={952} />);
    expect(screen.getByText("952")).toBeInTheDocument();
  });

  it("renders a count of 0 without crashing", () => {
    render(<RatingBar starValue={2} count={0} maxCount={952} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders when count equals maxCount (100% fill) without crashing", () => {
    render(<RatingBar starValue={5} count={100} maxCount={100} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});

describe("RatingBar – a11y", () => {
  it('has role="progressbar" on the bar track', () => {
    render(<RatingBar starValue={4} count={111} maxCount={952} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("progressbar has correct aria-valuenow", () => {
    render(<RatingBar starValue={4} count={111} maxCount={952} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "111",
    );
  });

  it("progressbar has aria-valuemin of 0", () => {
    render(<RatingBar starValue={4} count={111} maxCount={952} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuemin",
      "0",
    );
  });

  it("progressbar has aria-valuemax matching maxCount", () => {
    render(<RatingBar starValue={4} count={111} maxCount={952} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuemax",
      "952",
    );
  });

  it("progressbar has a descriptive aria-label with star value and count", () => {
    render(<RatingBar starValue={3} count={55} maxCount={952} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      "3 star reviews: 55",
    );
  });

  it("star value label and star icon are aria-hidden to avoid noise", () => {
    const { container } = render(
      <RatingBar starValue={5} count={952} maxCount={952} />,
    );
    // The progressbar itself carries the accessible info — decorative
    // star/number spans should be hidden from the AT tree
    const hiddenEls = container.querySelectorAll("[aria-hidden='true']");
    expect(hiddenEls.length).toBeGreaterThanOrEqual(1);
  });
});

describe("RatingBar – edge cases", () => {
  it("handles maxCount of 0 without crashing", () => {
    render(<RatingBar starValue={5} count={0} maxCount={0} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("handles a count greater than maxCount without crashing", () => {
    render(<RatingBar starValue={5} count={200} maxCount={100} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
