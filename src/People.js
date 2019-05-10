import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './homePage.css';
import lukeImg from './luke-skywalker.jpeg';

import List from './List';
// import Planets from './Planets';
// import Login from './Login';

class People extends Component {
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
    this.getStarPeople();
  }
  render() {
    const {starPeople, planets} = this.state;
    return (
      <div className="list-columns">
      <div className="list-header">
          Star Wars People
        <img className="image-dimensions" src={lukeImg}/>
      </div>
          <List starPeople={starPeople}/>
      </div>
    );
  }
}

export default People;
