import { render, screen, fireEvent } from "@testing-library/react";
import ReportDownload from "./ReportDownload";

describe("ReportDownload", () => {
  test("renders download button", () => {
    render(<ReportDownload />);
    expect(screen.getByRole("button", { name: /Download Report/i })).toBeInTheDocument();
  });

  test("triggers download on click", () => {
    const handleDownload = jest.fn();
    render(<ReportDownload onDownload={handleDownload} />);

    fireEvent.click(screen.getByRole("button", { name: /Download Report/i }));

    expect(handleDownload).toHaveBeenCalled();
  });
});
