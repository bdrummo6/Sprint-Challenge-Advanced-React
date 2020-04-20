import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

test('h1 is rendering', () => {
	const container = render(<Header />)
	container.getByText(/Soccer Players from Around the World/i);
});

test('test dark mode button functionality', () => {
	const header = render(<Header />);
	const darkModeBtn = header.getByTestId(/darkModeBtn/i);
	const darkModeOn = header.getByTestId(/darkModeOn/i);

	fireEvent.click(darkModeBtn);

	header.expect(darkModeOn.textContent).toBe('Dark Mode Off');
});