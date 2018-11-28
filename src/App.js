import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts } from './api';
require('dotenv').config();

class App extends Component {
  componentDidMount() {
    getPosts().then(response => console.log(response));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Estou refazendo este site. Um dia eu acabo :)
          </p>
        </header>
      </div>
    );
  }
}

export default App;
