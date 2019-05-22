import React, { Component } from 'react';
import starWarsLogo from './images/svg-star-wars-4.png';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<img src={starWarsLogo} className="app-logo" alt="StarWars Logo" />
				<div className="header-links">
					<Link to="/" className="links">
						Home
					</Link>
					{/* {'|'} */}
					<Link to="/people" className="links">
						People
					</Link>
					{/* {'|'} */}
					<Link to="/planets" className="links">
						Planets
					</Link>
					<Link to="/planets" className="links">
						Movies
					</Link>
					<Link to="/planets" className="links">
						Ships
					</Link>
				</div>
			</header>
		);
	}
}

export default Header;
