import React, { Component } from 'react';
import starWarsLogo from './svg-star-wars-4.png';
import planetLogo from './planet.png';
import lukeImg from './luke-skywalker.jpeg';
import homeImg from './the-binary-sunset.jpeg';
import {Link} from 'react-router-dom';

import './header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <img src={starWarsLogo} className="App-logo" alt="StarWars Logo"/>
        <div className="header-links">
          <Link to='/' className="links">
            Home
            <img className="image-dimensions" src={homeImg}/>
          </Link>
          <Link to='/people' className="links">
            People
            <img className="image-dimensions" src={lukeImg}/>
          </Link>
          <Link to='/planets' className="links">
            Planets
            <img className="image-dimensions" src={planetLogo}/>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header;