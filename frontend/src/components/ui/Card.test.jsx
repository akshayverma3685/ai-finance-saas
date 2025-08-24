import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders Card with children", () => {
    render(<Card>Test Card Content</Card>);
    expect(screen.getByText("Test Card Content")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const { container } = render(<Card className="custom-class">Hello</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
