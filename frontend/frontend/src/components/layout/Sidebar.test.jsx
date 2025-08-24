import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar Component", () => {
  it("renders Sidebar", () => {
    render(<Sidebar />);
    expect(screen.getByText(/sidebar/i)).toBeInTheDocument();
  });
});
