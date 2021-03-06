export function pokemons(state = [], action) {
    switch (action.type) {
        case 'FETCH_POKEDEX_SUCCESS':
            return action.pokemons;
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'FETCH_POKEDEX_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function isError(state = false, action) {
    switch (action.type) {
        case 'FETCH_POKEDEX_ERROR':
            return action.isError;
        default:
            return state;
    }
}

export function currentPage(state = 1, action) {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return action.page;
        default:
            return state;
    }
}

export function chosenPokemon(state = {}, action) {
    switch (action.type) {
        case 'SET_CHOSEN_POKEMON':
            return action.pokemon;
        default:
            return state;
    }
}

export function header(state = { link: '', totalCount: 0 }, action) {
    switch (action.type) {
        case 'GET_LINK_HEADER':
            return action.header;
        default:
            return state;
    }
}