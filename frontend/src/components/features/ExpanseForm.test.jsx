import { render, screen, fireEvent } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

describe("ExpenseForm", () => {
  test("renders input fields", () => {
    render(<ExpenseForm />);
    expect(screen.getByPlaceholderText(/Enter amount/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter description/i)).toBeInTheDocument();
  });

  test("submits form with values", () => {
    const handleSubmit = jest.fn();
    render(<ExpenseForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/Enter amount/i), { target: { value: "500" } });
    fireEvent.change(screen.getByPlaceholderText(/Enter description/i), { target: { value: "Snacks" } });

    fireEvent.click(screen.getByRole("button", { name: /Add Expense/i }));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
