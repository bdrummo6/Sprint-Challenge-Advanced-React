import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('if dark mode button toggles Dark Mode ', () => {
  // Arrange
  const { getByTestId} = render(<App />);

  // Act
  const darkModeBtn = getByTestId(/darkmode/i);
  fireEvent.click(darkModeBtn);

  // Assert
  expect(darkModeBtn.textContent).toBe('Light Mode');

  // Act
  fireEvent.click(darkModeBtn);

  // Assert
  expect(darkModeBtn.textContent).toBe('Dark Mode');
});

test('if graph mode button toggles the graph ', () => {
  // Arrange
  const { getByTestId} = render(<App />);

  // Act
  const graphModeBtn = getByTestId(/graphmode/i);
  fireEvent.click(graphModeBtn);

  // Assert
  expect(graphModeBtn.textContent).toBe('Hide Graph');

  // Act
  fireEvent.click(graphModeBtn);

  // Assert
  expect(graphModeBtn.textContent).toBe('Show Graph');
});