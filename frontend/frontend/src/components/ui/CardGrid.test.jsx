import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";

describe("CardGrid Component", () => {
  test("renders children inside grid", () => {
    render(
      <CardGrid>
        <div>Item 1</div>
        <div>Item 2</div>
      </CardGrid>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("renders with correct role", () => {
    render(<CardGrid><div>Child</div></CardGrid>);
    expect(screen.getByRole("grid")).toBeTruthy();
  });
});
