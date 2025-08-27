import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders app with navigation', () => {
  render(<App />);
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
