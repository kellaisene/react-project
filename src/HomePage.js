import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './homePage.css';

import List from './List';
// import Planets from './Planets';
// import Login from './Login';

class HomePage extends Component {
  state = {
    starPeople: [],
    // planets: []
  }

  getStarPeople() {
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log('Response', response.data.results)
      this.setState({ starPeople: response.data.results })
    })
  }

  // getPlanets() {
  //   return axios.get("https://swapi.co/api/planets")
  //   .then((response) => {
  //     console.log('PLANET RESP', response.data.results)
  //     this.setState({ planets: response.data.results })
  //   })
  // }

  componentDidMount() {
    this.getStarPeople();
    // this.getPlanets();
  }
  render() {
    const {starPeople, planets} = this.state;
    return (
      <div className="list-columns">
          <List starPeople={starPeople}/>
          {/* <Planets planets={planets}/> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Friend!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default HomePage;
