import React from 'react';
import './pokecard.styles.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class PokeCard extends React.Component {
     render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className='pokecard'>
                <h1 className='pokecard-title'>{this.props.name}</h1>
                <div className='pokecard-image'>
                    <img className='pokecard-img' src={imgSrc} alt={this.props.name}/>
                </div>
                <div className='pokecard-data'>Type: {this.props.type}</div>
                <div className='pokecard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard;


