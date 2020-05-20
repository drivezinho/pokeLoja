import React from 'react';
import './style.css';

export default ({ selectedPokemons, removeOfCart }) => {
  const pokemonList = () => {
    return selectedPokemons.map(pokemon => (
      <li>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span>{pokemon.name}</span>
        <strong>R$ {pokemon.base_experience}</strong>
      </li>
    ))
  }

  return (
    <section id='cart'>
      <ul>{pokemonList()}</ul>
    </section>
  )
}
