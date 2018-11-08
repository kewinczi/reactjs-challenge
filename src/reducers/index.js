import { combineReducers } from 'redux';
import { pokemons, header, isLoading } from './pokedex-reducers'

export default combineReducers({
    pokemons,
    header,
    isLoading
});