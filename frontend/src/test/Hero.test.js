import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test Site for Hero Component
describe("Hero Component", () => {
  test("renders Hero component with correct image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
