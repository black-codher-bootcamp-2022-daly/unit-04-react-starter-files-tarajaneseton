import { render, screen } from '@testing-library/react';
import { App, Header } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/taz/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/taz/i);
  expect(linkElement).toBeInTheDocument();
});
