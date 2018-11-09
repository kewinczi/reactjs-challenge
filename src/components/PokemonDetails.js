import React from 'react';

class PokemonDetails extends React.Component {
    render() {
        const { chosenPokemon } = this.props;
        let pokemonDetails = [];
        Object.keys(chosenPokemon).forEach(function(key) {
            let value = chosenPokemon[key];
            let detail;
            switch (key) {
                case 'img':
                    detail = <li key={key}><img src={`${value}`} alt="Image"></img></li>;
                    pokemonDetails = [...pokemonDetails, detail]; 
                    break;        
                default:
                    detail = <li key={key}>{`${key.charAt(0).toUpperCase()+key.slice(1)}: ${value}`}</li>
                    pokemonDetails = [...pokemonDetails, detail];         
            }
        });
        return(
            <div className="container">
            <div className="modal" id="pokemonDetailsModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{chosenPokemon.name}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body text-left">
                    <ul className="list-unstyled">{pokemonDetails}</ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default PokemonDetails;