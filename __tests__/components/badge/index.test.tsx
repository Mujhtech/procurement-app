/**
 * @jest-environment jsdom
 */

import Badge from "@/components/ui/badge";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Badge", () => {
  // renders children correctly
  it("should render children correctly", () => {
    const { getByText } = render(<Badge>Delivered</Badge>);
    expect(getByText("Delivered")).toBeInTheDocument();
  });

  // renders correctly with no children
  it("should render correctly with no children", () => {
    const { container } = render(<Badge></Badge>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
