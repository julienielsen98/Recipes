import Header from "../../Components/Header";
import { useState, useEffect } from "react";
import {
  getALlPokemon,
  getPokemon,
} from "../../Components/Pokemons/PokemonAPI";
import SearchbarPokemon from "../../Components/Pokemons/SearchbarPokemon";
import "../../styles/PokemonStyle.css";

function FrontpagePokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState(``);
  const [prevUrl, setPrevUrl] = useState(``);
  const [loading, setLoading] = useState(true);

  const initialUrl = `https://pokeapi.co/api/v2/pokemon`;

  useEffect(() => {
    async function fetchData() {
      let response = await getALlPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getALlPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getALlPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemonData);
  };

  return (
    <div>
      <Header />

      <SearchbarPokemon />
      {loading ? (
        <h1> </h1>
      ) : (
        <div className="Container">
          <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <div className="Pokemon-Container">
            {pokemonData.map((pokemon) => {
              return (
                <div key={pokemon.name} className="pokemonCard">
                  <img
                    src={pokemon.sprites.front_default}
                    alt="#"
                    className="pokemon-img"
                  />
                  <div className="Pokemon-details">
                    <h3 className="title">{pokemon.name}</h3>
                    Type:
                    {pokemon.types.map((type) => {
                      return <p key={type.type.name}> {type.type.name}</p>;
                    })}
                    <p>Weight {pokemon.weight}00 gram</p>
                    <p>Height: {pokemon.height}0 cm</p>
                    <p>Ability: {pokemon.abilities[0].ability.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FrontpagePokemon;
