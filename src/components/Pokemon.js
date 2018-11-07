import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 m-0 p-1" style={{width: '18rem'}} key={pokemon.id}>
                    <div className="card">
                        <div className="card-body">
                        <img className="card-img-top" src={pokemon.img} alt={pokemon.name}/>
                            <h6>{`#${pokemon.num} ${pokemon.name}`}</h6>
                            <p>{pokemon.type.map((element, index) => <span key={`${pokemon.id}${element}`} className="badge badge-primary m-1">{element}</span>)}</p>
                        </div>  
                    </div>
            </div>
        );
    }
}

export default Pokemon;