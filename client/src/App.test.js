import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
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
