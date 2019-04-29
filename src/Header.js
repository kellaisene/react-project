import React, { Component } from 'react';
import starWarsLogo from './svg-star-wars-4.png';

class Header extends Component {
  render() {
    return(
      <header>
        <img src={starWarsLogo} className="App-logo" alt="StarWars Logo"/>
      </header>
    )
  }
}

export default Header;