import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';

class App extends Component {
  state = { pokemons: [] }

  componentDidMount() {
    const url = "http://localhost:3000/pokemon";
    fetch(url)
        .then(response => response.json())
        .then(result => {
          this.setState({pokemons: result})
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center d-flex justify-content-center m-5">
          {
            Object
              .keys(this.state.pokemons)
              .map(key => <Pokemon key={key} pokemon={this.state.pokemons[key]} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
