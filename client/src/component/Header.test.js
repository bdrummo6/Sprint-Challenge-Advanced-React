import React from 'react';

import { render } from '@testing-library/react';
import Header from './Header';

test('renders without crashing', () => {
	const container = render(<Header />)
	container.getByTestId(/heading/i);
});

