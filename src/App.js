import React, { Component } from 'react';
// import logo from './logo.svg';
import starWarsLogo from './svg-star-wars-4.png';
import axios from 'axios';
import './App.css';

import List from './List';

// import Login from './Login';

class App extends Component {
  state = {
    starPeople: []
  }

  getStarPeople() {
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log('Response', response.data.results)
      this.setState({ starPeople: response.data.results })
    })
  }

  componentDidMount() {
    this.getStarPeople()
  }
  render() {
    const {starPeople} = this.state;
    return (
      <div className="App">
      <header>
        <img src={starWarsLogo} className="App-logo" alt="StarWars Logo"/>
      </header>
        <List starPeople={starPeople}/>
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

export default App;
