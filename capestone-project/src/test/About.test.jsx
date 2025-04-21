import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

jest.mock("../utils/images", () => ({
  rest1_mid: "rest1_mid_mock.jpg",
  rest2_mid: "rest2_mid_mock.jpg",
}));

describe("About Component", () => {
  test("renders the About component with correct headings", () => {
    render(<About />);
    const headerH1 = screen.getByText("Little Lemon");
    const headerH2 = screen.getByText("Chicago");

    expect(headerH1).toBeInTheDocument();
    expect(headerH2).toBeInTheDocument();
  });

  test("renders the paragraph with correct text", () => {
    render(<About />);
    const paragraph = screen.getByText(
      /Located in Chicago, Little Lemon is renowned for its delectable dishes/i
    );

    expect(paragraph).toBeInTheDocument();
  });

  test("renders the images with correct src and alt attributes", () => {
    render(<About />);
    const image1 = screen.getByAltText("rest1");
    const image2 = screen.getByAltText("rest2");

    expect(image1).toBeInTheDocument();
    expect(image1).toHaveAttribute("src", "rest1_mid_mock.jpg");
    expect(image2).toBeInTheDocument();
    expect(image2).toHaveAttribute("src", "rest2_mid_mock.jpg");
  });
});
