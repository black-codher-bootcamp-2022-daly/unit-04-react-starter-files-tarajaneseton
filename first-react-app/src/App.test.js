import { render, screen } from '@testing-library/react';
import { App, Header } from './App';
import {NavBar} from "./NavBar";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tobia/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the header', () => {
  render(<Header name="Tobia" colour="blue" fruit="blueberry"/>);
  const name = screen.getByText(/Tobia/i);
  const color = screen.getByText(/blue/i);
  const fruit = screen.getByText(/blueberry/i);
  expect(name).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  expect(fruit).toBeInTheDocument();
});



//a test to render a navbar in the style of TDD, test driven development. This navbar renders an unordered list of children
//the html unordered list is considered a child. test.only runs only that test

test.only('renders the navbar', () => {
  render(<NavBar>
    <ul>
      <li className="navbar-1">SuperLink 1</li>
      <li>SuperLink 2</li>
  </ul>
  </NavBar>);
const result = screen.getByText(/SuperLink 1/)
expect(result).toBeInTheDocument()
})