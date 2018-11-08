export function pokemons(state = [], action) {
    switch (action.type) {
        case 'FETCH_POKEDEX_SUCCESS':
            return action.pokemons;
        default:
            return state;
    }
}

export function header(state = '', action) {
    switch (action.type) {
        case 'GET_LINK_HEADER':
            return action.header;
        default:
            return state;
    }
}