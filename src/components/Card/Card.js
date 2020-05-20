import React from 'react';
import './style.css';


function Card({pokemon, addToCart}){
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div className="Card__name">{pokemon.name}</div>
            <div className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <div className="Card__type">{type.type.name}</div>
                    )
                })}
            </div>
            <div className="Card__price">${pokemon.base_experience}</div>
            <button
            onClick={() => addToCart(pokemon)}
            className="button_add"
            >
                Add
            </button>
        </div>
    )
}
export default Card;