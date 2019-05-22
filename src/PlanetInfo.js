import React, { Component } from 'react';
import axios from 'axios';
import './charInfo.css';

class CharInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			residents: []
		};
		this.expandInfo = this.expandInfo.bind(this);
		this.closeInfo = this.closeInfo.bind(this);
	}

	getPlanetResidents(residents) {
		return axios.get(residents).then((response) => {
			console.log('PLANET RESIDENTS', response.data);
			// this.setState({ residents: response.data });
		});
	}

	expandInfo() {
		this.setState({ expanded: !this.state.expanded });
	}

	closeInfo() {
		this.setState({ expanded: !this.state.expanded });
	}
	render() {
		const info = this.props.planetInfo;
		if (!this.state.expanded) {
			return (
				<button className="btn button-info" onClick={this.expandInfo}>
					Show Info
				</button>
			);
		}

		return (
			<div className="info-card">
				<button onClick={this.closeInfo}>Hide Info</button>
				<ul className="data">
					<h2>Name: {info.name}</h2>
					<h2>Climate: {info.climate}</h2>
					<h2>Gravity: {info.gravity}</h2>
					<h2>Population: {info.population}</h2>
					<h2>Rotation Period: {info.rotation_period}</h2>
					<h2>Terrain: {info.terrain}</h2>
					{/* <h2>Residents: {info.residents}</h2> */}
				</ul>
			</div>
		);
	}
}

export default CharInfo;
