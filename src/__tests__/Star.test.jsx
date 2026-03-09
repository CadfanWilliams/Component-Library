import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Star from "../components/StarRating/Star/Star";

describe("Star rendering", () => {
  it("renders a full star without crashing", () => {
    const { container } = render(<Star fill="full" index={0} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a half star without crashing", () => {
    const { container } = render(<Star fill="half" index={1} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders an empty star without crashing", () => {
    const { container } = render(<Star fill="empty" index={2} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a linearGradient for a half star", () => {
    const { container } = render(<Star fill="half" index={0} />);
    expect(
      container.querySelector("linearGradient, lineargradient"),
    ).toBeInTheDocument();
  });

  it("does not render a linearGradient for a full star", () => {
    const { container } = render(<Star fill="full" index={0} />);
    const gradient = container.querySelector("linearGradient, lineargradient");
    // gradient element should be absent or empty for full stars
    if (gradient) {
      expect(gradient.children).toHaveLength(0);
    } else {
      expect(gradient).toBeNull();
    }
  });
});

describe("Star – a11y", () => {
  it("SVG is aria-hidden so the parent StarRating label is the sole AT entry", () => {
    const { container } = render(<Star fill="full" index={0} />);
    expect(container.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("SVG has focusable=false to prevent focus in IE/Edge", () => {
    const { container } = render(<Star fill="full" index={0} />);
    expect(container.querySelector("svg")).toHaveAttribute(
      "focusable",
      "false",
    );
  });
});
