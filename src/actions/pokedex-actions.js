export function fetchPokedexSucces(pokemons) {
    return {
        type: 'FETCH_POKEDEX_SUCCESS',
        pokemons
    }
}

export function fetchPokedex(url) {
    return dispatch => {
        console.log('Loading')
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log('Fetched');
                dispatch(fetchPokedexSucces(result));
            });
    }
}