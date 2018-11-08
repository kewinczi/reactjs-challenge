import { combineReducers } from 'redux';
import { pokemons, header } from './pokedex-reducers'

export default combineReducers({
    pokemons,
    header
});