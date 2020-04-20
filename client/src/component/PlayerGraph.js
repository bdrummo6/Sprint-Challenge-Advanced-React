import React from 'react';

import { Container } from 'reactstrap';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PlayerGraph = props => {

	return (
		<Container id='graph-container'>
			<h4>Number of Searches by Player</h4>
			<LineChart
				width={900}
				height={450}
				data={props.players}
				margin={{ top: 10, right: 10, left: 5, bottom: 10 }}
			>
				<CartesianGrid strokeDasharray="50 50" />
				<XAxis dataKey="name" tick={false} reversed={true} />
				<YAxis
					domain={[0, 120]}
					tickCount={10}
					orientation='right'
					label={{ value: "# of Searches", offset: 0, angle: -90, position: 'right', fontWeight: 'bold' }} />
				<Tooltip />
				<Legend verticalAlign='top' />
				<Line type="monotone" dataKey="searches" stroke="#252727" strokeWidth='1.5px'/>
			</LineChart>
		</Container>
	)
};

export default PlayerGraph;