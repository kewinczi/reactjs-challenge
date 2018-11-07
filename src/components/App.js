import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PageLink from './PageLink';
import { connect } from 'react-redux';
import { fetchPokedex } from '../actions/pokedex-actions'

class App extends Component {

  componentDidMount() {
    const url = "http://localhost:3000/pokemon?_page=1"
    this.props.fetchData(url)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row text-center d-flex justify-content-center m-5">
            {
              Object
                .keys(this.props.pokemons)
                .map(key => <Pokemon key={key} pokemon={this.props.pokemons[key]} />)
            }
          </div>
        </div>
        <PageLink fetchData={this.props.fetchData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(fetchPokedex(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
