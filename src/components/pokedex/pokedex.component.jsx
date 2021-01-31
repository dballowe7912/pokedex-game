import React from 'react';
import PokeCard from '../pokecard/pokecard.component';

import './pokedex.styles.css';

class Pokedex extends React.Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className='pokedex-winner'>Winning Hand</h1>
        } else {
            title = <h1 className='pokedex-loser'>Losing Hand</h1>
        }
        return (
            <div className='pokedex'>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='pokedex-cards'>
                {
                    this.props.pokemon.map((p) => {
                        return <PokeCard 
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default Pokedex;