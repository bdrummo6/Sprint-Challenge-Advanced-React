import React from 'react';

import useDarkMode from '../hooks/useDarkMode';
import useGraphMode from '../hooks/useGraphMode';

const Header = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const [ graphMode, setGraphMode ] = useGraphMode(false);

	const toggle = event => {
		event.preventDefault();
		setDarkMode(!darkMode);
	}

	const toggleGraph = event => {
		event.preventDefault();
		setGraphMode(!graphMode);
	}

	return (
		<header className='header'>
			<h1>Soccer Players from Around the World</h1>
			<div className='mode-buttons'>
				<button className='modeBtn' onClick={toggle} data-testid='darkmode'>
					{darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
				</button>
				<button className='modeBtn' style={{ marginLeft: '10px'}} onClick={toggleGraph} data-testid='graphmode'>
					{graphMode ? <span>Hide Graph</span> : <span>Show Graph</span>}
				</button>
			</div>
		</header>
	)
};

export default Header;