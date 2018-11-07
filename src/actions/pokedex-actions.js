export function fetchPokedexSucces(pokemons) {
    return {
        type: 'FETCH_POKEDEX_SUCCESS',
        pokemons
    }
}

export function getLinkHeader(link) {
    return {
        type: 'GET_LINK_HEADER',
        link
    }
}

export function fetchPokedex(url) {
    return dispatch => {
        fetch(url)
            .then(response => {
                dispatch(getLinkHeader(response.headers.get('Link')));
                return response.json()
            })
            .then(result => {
                dispatch(fetchPokedexSucces(result));
            });
    }
}