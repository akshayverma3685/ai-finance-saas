import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter } from "react-router-dom";

test("renders navbar brand name", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText(/AI Finance/i)).toBeInTheDocument();
});
