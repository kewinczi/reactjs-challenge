import { combineReducers } from 'redux';
import { pokemons, link } from './pokedex-reducers'

export default combineReducers({
    pokemons,
    link
});