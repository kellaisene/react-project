import React, { Component } from 'react';
import axios from 'axios';
import planetLogo from './images/planet.png';

import Planets from './Planets';

class PlanetPage extends Component {
	state = {
		planets: []
	};

	getPlanets() {
		return axios.get('https://swapi.co/api/planets').then((response) => {
			console.log('PLANET RESP', response.data.results);
			this.setState({ planets: response.data.results });
		});
	}

	componentDidMount() {
		console.log('planets', this.getPlanets());
		this.getPlanets();
	}

	render() {
		const { planets } = this.state;
		return (
			<div className="list-columns">
				<div className="list-header">
					Worlds of Star Wars
					<img className="image-dimensions" src={planetLogo} />
				</div>
				<Planets planets={planets} />
			</div>
		);
	}
}

export default PlanetPage;
