import { combineReducers } from 'redux';
import { pokemons, header, isLoading, isError, currentPage, chosenPokemon } from './pokedex-reducers'

export default combineReducers({
    pokemons,
    header,
    isLoading,
    isError, 
    currentPage,
    chosenPokemon
});