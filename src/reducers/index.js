import { combineReducers } from 'redux';
import { pokemons, header, isLoading, currentPage } from './pokedex-reducers'

export default combineReducers({
    pokemons,
    header,
    isLoading, 
    currentPage
});