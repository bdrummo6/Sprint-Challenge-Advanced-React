import React from 'react';

const PlayerCard = props => {

	return (
		<div className='player' key={props.player.id}>
			<h3>{props.player.name}</h3>
			<ul>
				<li>id: {props.player.id}</li>
				<li>Country: {props.player.country}</li>
				<li>Searches: {props.player.searches}</li>
			</ul>
		</div>
	)
};

export default PlayerCard;