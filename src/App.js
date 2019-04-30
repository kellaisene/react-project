import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './Header';
import HomePage from './HomePage';
import PlanetPage from './PlanetPage';

// import Login from './Login';

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/planets' component={PlanetPage}/>
      </div>
      </Router>
    );
  }
}

export default App;
