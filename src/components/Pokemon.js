import React from 'react';
import { colorDictionary as colors } from '../constants';

class Pokemon extends React.Component {
    render() {
        const { pokemon, setChosenPokemon } = this.props
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-1" style={{width: '18rem'}} key={pokemon.id}>
                <div className="card h-100 d-inline-block w-100 p-3">
                    <div className="card-body">
                        <img className="card-img-top" src={pokemon.img} alt={pokemon.name} 
                            data-toggle="modal" 
                            data-target="#pokemonDetailsModal" 
                            onClick={() => setChosenPokemon(pokemon)}    
                        />
                        <h6>{`#${pokemon.num} ${pokemon.name}`}</h6>
                        <p>{pokemon.type.map((element) => {
                            return (
                                <span 
                                    style={{'backgroundColor':`${colors[element]}`}}
                                    key={`${pokemon.id}${element}`} 
                                    className="badge badge-primary m-1">{element}
                                </span>
                            );
                        })}
                        </p>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Pokemon;