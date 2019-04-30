import React, { Component } from 'react';
import axios from 'axios';

import Planets from './Planets';

class PlanetPage extends Component {
    state = {
        planets: []
    }

    getPlanets() {
        return axios.get("https://swapi.co/api/planets")
        .then((response) => {
          console.log('PLANET RESP', response.data.results)
          this.setState({ planets: response.data.results })
        })
      }

    componentDidMount() {
        this.getPlanets();
    }

    render() {
        const {planets} = this.state;
        return (
            <div className="list-columns">
                <Planets planets={planets}/>
            </div>
        )
    }
}

export default PlanetPage;