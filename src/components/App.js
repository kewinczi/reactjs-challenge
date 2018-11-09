import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PageLink from './PageLink';
import { connect } from 'react-redux';
import { fetchPokedex, setChosenPokemon } from '../actions/pokedex-actions'
import PokemonDetails from './PokemonDetails';

class App extends Component {

  componentDidMount() {
    this.props.fetchData(1)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row text-center d-flex justify-content-center m-5">
            {
              Object
                .keys(this.props.pokemons)
                .map(key => { return (
                  <Pokemon 
                    key={key} 
                    pokemon={this.props.pokemons[key]} 
                    setChosenPokemon={this.props.setChosenPokemon}
                  />
                )})
            }
            {
              this.props.isLoading && !this.props.isError ? 
              <p>Loading…</p> : <PokemonDetails chosenPokemon={this.props.chosenPokemon}/>
            }
            {this.props.isError ? <p>Error!</p> :<div></div>}
          </div>
        </div>
        <PageLink fetchData={this.props.fetchData} header={this.props.header} currentPage={this.props.currentPage}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    header: {
      link: state.header.link,
      totalCount: state.header.totalCount
    },
    isLoading: state.isLoading,
    isError: state.isError,
    currentPage: state.currentPage,
    chosenPokemon: state.chosenPokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (page) => dispatch(fetchPokedex(page)),
    setChosenPokemon: (pokemon) => dispatch(setChosenPokemon(pokemon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
