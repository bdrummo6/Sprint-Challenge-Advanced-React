import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

test('h1 is rendering', () => {
	const container = render(<Header />)
	container.getByText(/Soccer Players from Around the World/i);
});
