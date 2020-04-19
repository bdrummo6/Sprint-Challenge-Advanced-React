import React from 'react';

import PlayerCard from './PlayerCard';

import { Container } from 'reactstrap';

const Players = props => {

	return (
		<Container className='players'>
			{props.players.map(player => (
				<PlayerCard player={player} />
			))}
		</Container>
	)
};

export default Players;