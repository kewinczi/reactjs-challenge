export function fetchPokedexSucces(pokemons) {
    return {
        type: 'FETCH_POKEDEX_SUCCESS',
        pokemons
    }
}

export function getHeader(link, totalCount) {
    return {
        type: 'GET_LINK_HEADER',
        header: {
            link,
            totalCount
        }
    }
}

export function fetchPokedex(url) {
    return dispatch => {
        fetch(url)
            .then(response => {
                const link = response.headers.get('Link');
                const totalCount = response.headers.get('X-Total-Count');
                dispatch(getHeader(link, totalCount));
                return response.json()
            })
            .then(result => {
                dispatch(fetchPokedexSucces(result));
            });
    }
}