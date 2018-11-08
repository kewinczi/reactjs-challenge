export function fetchPokedexSucces(pokemons) {
    return {
        type: 'FETCH_POKEDEX_SUCCESS',
        pokemons
    }
}

export function fetchPokedexLoading(bool) {
    return {
        type: 'FETCH_POKEDEX_LOADING',
        isLoading: bool
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

export function setCurrentPage(page) {
    return {
        type: 'GET_CURRENT_PAGE',
        page
    }
}

export function fetchPokedex(page) {
    const limit = 12;
    const url = `http://localhost:3000/pokemon?_page=${page}&_limit=${limit}`
    return dispatch => {
        dispatch(setCurrentPage(page));
        dispatch(fetchPokedexLoading(true))
        fetch(url)
            .then(response => {
                const link = response.headers.get('Link');
                const totalCount = response.headers.get('X-Total-Count');
                dispatch(getHeader(link, totalCount));
                dispatch(fetchPokedexLoading(false))
                return response.json()
            })
            .then(result => {
                dispatch(fetchPokedexSucces(result));
            });
    }
}