import { render, screen } from "@testing-library/react";
import { Navbar, Sidebar, Footer } from "./index";
import { describe, it, expect } from "vitest";

// Dummy wrapper for rendering
function Wrapper({ children }) {
  return <div>{children}</div>;
}

describe("Layout Components Export Check", () => {
  it("renders Navbar component", () => {
    render(
      <Wrapper>
        <Navbar />
      </Wrapper>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders Sidebar component", () => {
    render(
      <Wrapper>
        <Sidebar />
      </Wrapper>
    );
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(
      <Wrapper>
        <Footer />
      </Wrapper>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
