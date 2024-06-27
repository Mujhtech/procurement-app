/**
 * @jest-environment jsdom
 */

import Navbar from "@/components/navbar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Navbar", () => {
  // Renders the navbar container with correct class
  it("should render the navbar container with correct class", () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toHaveClass("navbar");
  });

  // Renders correctly with no additional props
  it("should render correctly with no additional props", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("Procurement App")).toBeInTheDocument();
    expect(getByText("Create New Order")).toBeInTheDocument();
  });
});
