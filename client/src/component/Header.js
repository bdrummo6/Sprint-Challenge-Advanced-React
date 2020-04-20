import React from 'react';

import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);

	const toggle = event => {
		event.preventDefault();
		setDarkMode(!darkMode);
	}

	return (
		<header className='header'>
			<h1>Soccer Players from Around the World</h1>
			<div>
				<button className='darkModeBtn' onClick={toggle}>Dark Mode</button>
			</div>
		</header>
	)
};

export default Header;