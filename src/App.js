import React, { Component } from 'react';
import './App.css';
import Headers from './components/containers/Headers';
import Movies from './components/containers/Movies';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <h1 className="center">A SWAPI + REACT + REDUX PROJECT</h1>
        </div>
        <Headers />
        <Movies />
      </div>
    );
  }
}

export default App;