import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders Footer text", () => {
    render(<Footer />);
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});
