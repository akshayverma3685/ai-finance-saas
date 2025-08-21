import { render } from "@testing-library/react";
import Chart from "./Chart";

describe("Chart Component", () => {
  test("renders without crashing", () => {
    render(<Chart data={[{ name: "Jan", value: 100 }]} />);
  });

  test("renders with empty data", () => {
    render(<Chart data={[]} />);
  });
}); 
