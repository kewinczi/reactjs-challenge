import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PageLink from './PageLink';
import { connect } from 'react-redux';
import { fetchPokedex } from '../actions/pokedex-actions'

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
                .map(key => <Pokemon key={key} pokemon={this.props.pokemons[key]} />)
            }
            {this.props.isLoading ? (<p>Loading…</p>) : (<div></div>)}
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
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (page) => dispatch(fetchPokedex(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
