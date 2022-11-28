import { render, screen } from '@testing-library/react';
import { App, Header } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/tobia/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the header', () => {
  render(<Header name="tobia" />);
  const linkElement = screen.getByText(/tobia/i);
  expect(linkElement).toBeInTheDocument();
});
