import React from 'react';

import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const PlayerCard = props => {

	return (
		<Card className='player' key={props.player.id}>
			<CardTitle>{props.player.name}</CardTitle>
			<CardBody>
				<ListGroup>
					<ListGroupItem>id: {props.player.id}</ListGroupItem>
					<ListGroupItem>Country: {props.player.country}</ListGroupItem>
					<ListGroupItem>Searches: {props.player.searches}</ListGroupItem>
				</ListGroup>
			</CardBody>

		</Card>
	)
};

export default PlayerCard;