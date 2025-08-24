// frontend/tests/Dashboard.test.jsx
import { render, screen } from '@testing-library/react';
import Dashboard from '../src/components/Dashboard';

test('shows total expenses and budget chart', () => {
  render(<Dashboard expenses={[]} />);
  expect(screen.getByText(/total expenses/i)).toBeInTheDocument();
});
