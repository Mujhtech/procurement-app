/**
 * @jest-environment jsdom
 */

import Layout from "@/components/layout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Layout", () => {
  // Renders children elements correctly
  it("should render children elements correctly", () => {
    const { getByText } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  // Renders correctly with no children
  it("should render correctly with no children", () => {
    const { container } = render(<Layout />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
