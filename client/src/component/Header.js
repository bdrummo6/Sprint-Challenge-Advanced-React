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
				<button className='darkModeBtn' onClick={toggle} data-testid='darkmode'>Dark Mode</button>
				<div style={{ display: 'none' }} data-testid='darkModeOn'>
					{darkMode ? <p>Dark Mode On</p> : <p>Dark Mode Off</p>}
				</div>
			</div>
		</header>
	)
};

export default Header;