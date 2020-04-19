import React from 'react';

import PlayerCard from './PlayerCard';

const Players = props => {

	return (
		<div className='players'>
			{props.players.map(player => (
				<PlayerCard player={player} />
			))}
		</div>
	)
};

export default Players;