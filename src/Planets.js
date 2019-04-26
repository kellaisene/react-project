import React, { Component } from 'react';

import PlanetInfo from './PlanetInfo.js';


class Planets extends Component {
  render() {
    const planets = this.props.planets;
    console.log('PLAN', planets)
    return (
      <div className="">
        {
          planets.map((planet) => {
            console.log('PLANETS', planet)
            return (
              <div key={planet.url}>
                <h1 className="char-name">{planet.name}</h1>
                <PlanetInfo planetInfo={planet}/>
              </div>
            )
          } )
        }
      </div>
    )
  }
}

export default Planets;