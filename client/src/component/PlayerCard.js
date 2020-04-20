import React from 'react';

import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const PlayerCard = props => {
	const playerStyles = {
		color: '#252727',
		width: '31%',
		margin: '5px 1% 10px 1%',
	};

	const valueStyles = {
		fontWeight: 'bold',
		marginLeft: '4px'
	};

	const nameStyles = {
		fontWeight: 'bold',
	};

	return (
		<Card className='player' key={props.player.id} style={playerStyles}>
			<CardBody>
				<CardTitle style={nameStyles}>{props.player.name}</CardTitle>
				<ListGroup>
					<ListGroupItem>id: <span style={valueStyles}>{props.player.id}</span></ListGroupItem>
					<ListGroupItem>Country: <span style={valueStyles}>{props.player.country}</span></ListGroupItem>
					<ListGroupItem>Searches: <span style={valueStyles}>{props.player.searches}</span></ListGroupItem>
				</ListGroup>
			</CardBody>
		</Card>
	)
};

export default PlayerCard;