import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Card/Card';
import Cart from './components/cart/Cart'
import './components/shopp/shopp.css';


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonPrice, setPokemonPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])


  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))
    setPokemonData(_pokemonData)
  }

  const addToCart = (pokemon) => {
    const pokemonLista = [pokemon, ...selectedPokemons]
    setSelectedPokemons(pokemonLista)

    const pricesoma = pokemon.base_experience + pokemonPrice
    setPokemonPrice(pricesoma)
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="index.html">PokeLoja</a>
        </div>
      </header>
      <main className="main">
        <div className="conteudo">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} addToCart={addToCart} />
          })}
        </div>
      </main>
      <shopp className="shopp">
        <div className="cart">
          <h2>
            Carrinho
          </h2>
          <Cart selectedPokemons={selectedPokemons}/>
          <div className="Total">
            <h3>Total:{pokemonPrice}</h3>
          </div>
        </div>
      </shopp>
      <footer className="footer">
        All right reserved
      </footer>
    </div>
  );
}

export default App;
