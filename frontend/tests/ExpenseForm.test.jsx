import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseForm from '../src/components/ExpenseForm';

test('submits expense with title and amount', () => {
  const mockSubmit = jest.fn();
  render(<ExpenseForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: 'Groceries' },
  });

  fireEvent.change(screen.getByPlaceholderText(/amount/i), {
    target: { value: '50' },
  });

  fireEvent.click(screen.getByText(/add expense/i));

  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'Groceries',
    amount: 50,
  });
});
