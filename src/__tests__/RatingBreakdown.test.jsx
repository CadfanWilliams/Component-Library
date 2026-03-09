import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import RatingBreakdown from "../components/RatingBreakdown/RatingBreakdown";

const defaultBreakdown = [
  { starValue: 1, count: 40 },
  { starValue: 2, count: 4 },
  { starValue: 3, count: 55 },
  { starValue: 4, count: 111 },
  { starValue: 5, count: 952 },
];

// ─── Rendering ────────────────────────────────────────────────────────────────

describe("RatingBreakdown – rendering", () => {
  it("renders without crashing", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
  });

  it("renders a row for every entry in the breakdown", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    expect(screen.getAllByRole("progressbar")).toHaveLength(5);
  });

  it("displays the correct count for each row", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    expect(screen.getByText("952")).toBeInTheDocument();
    expect(screen.getByText("111")).toBeInTheDocument();
    expect(screen.getByText("55")).toBeInTheDocument();
    expect(screen.getByText("40")).toBeInTheDocument();
    // "4" appears twice: as the star label for the 4-star row AND as the
    // count for the 2-star row — use getAllByText and assert at least 2 matches
    expect(screen.getAllByText("4").length).toBeGreaterThanOrEqual(2);
  });

  it("displays the star value label for each row", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    // "4" is both a star label and a count — confirm it appears at least twice
    expect(screen.getAllByText("4").length).toBeGreaterThanOrEqual(2);
  });

  it("renders with a single breakdown entry without crashing", () => {
    render(<RatingBreakdown breakdown={[{ starValue: 5, count: 10 }]} />);
    expect(screen.getAllByRole("progressbar")).toHaveLength(1);
  });
});

// ─── Accessibility ────────────────────────────────────────────────────────────

describe("RatingBreakdown – a11y", () => {
  it('each bar has role="progressbar"', () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    screen.getAllByRole("progressbar").forEach((bar) => {
      expect(bar).toHaveAttribute("role", "progressbar");
    });
  });

  it("each progressbar has aria-valuenow matching its count", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    expect(
      screen.getByRole("progressbar", { name: "5 star reviews: 952" }),
    ).toHaveAttribute("aria-valuenow", "952");
  });

  it("each progressbar has aria-valuemin of 0", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    screen.getAllByRole("progressbar").forEach((bar) => {
      expect(bar).toHaveAttribute("aria-valuemin", "0");
    });
  });

  it("each progressbar has aria-valuemax equal to the highest count", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    screen.getAllByRole("progressbar").forEach((bar) => {
      expect(bar).toHaveAttribute("aria-valuemax", "952");
    });
  });

  it("each progressbar has a descriptive aria-label", () => {
    render(<RatingBreakdown breakdown={defaultBreakdown} />);
    expect(
      screen.getByRole("progressbar", { name: "5 star reviews: 952" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", { name: "1 star reviews: 40" }),
    ).toBeInTheDocument();
  });
});
