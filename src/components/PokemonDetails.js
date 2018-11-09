import React from 'react';
import { formatKeyString, formatEvolutionDetail } from '../helpers';

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
                    break;
                case 'next_evolution':
                case 'prev_evolution':
                    detail = (
                        <li key={key}>
                            {formatKeyString(key)}:
                            <ul>{[formatEvolutionDetail(value)]}</ul>
                        </li>
                    );
                    break; 
                default:
                    detail = <li key={key}>{`${formatKeyString(key)}: ${value}`}</li>        
            }
            pokemonDetails = [...pokemonDetails, detail];
        });
        return(
            <div className="container">
            <div className="modal" id="pokemonDetailsModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{chosenPokemon.name}</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
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