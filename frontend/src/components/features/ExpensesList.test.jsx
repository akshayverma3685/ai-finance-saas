import { render, screen } from "@testing-library/react";
import ExpenseList from "./ExpenseList";

const mockExpenses = [
  { id: 1, description: "Coffee", amount: 50 },
  { id: 2, description: "Groceries", amount: 200 }
];

describe("ExpenseList", () => {
  test("renders list of expenses", () => {
    render(<ExpenseList expenses={mockExpenses} />);
    expect(screen.getByText(/Coffee/i)).toBeInTheDocument();
    expect(screen.getByText(/Groceries/i)).toBeInTheDocument();
  });

  test("shows empty state when no expenses", () => {
    render(<ExpenseList expenses={[]} />);
    expect(screen.getByText(/No expenses found/i)).toBeInTheDocument();
  });
});
