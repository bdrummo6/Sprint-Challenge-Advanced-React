import React from 'react';

import PlayerCard from './PlayerCard';

import { Container } from 'reactstrap';

const Players = props => {
	const playersStyles = {
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap',
		marginTop: '25px'
	};

	return (
		<Container className='players' style={playersStyles}>
			{props.players.map(player => (
				<PlayerCard player={player} />
			))}
		</Container>
	)
};

export default Players;