export function pokemons(state = [], action) {
    switch (action.type) {
        case 'FETCH_POKEDEX_SUCCESS':
            return action.pokemons;
        default:
            return state;
    }
}