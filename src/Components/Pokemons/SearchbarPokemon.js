import { useState } from "react";
import axios from "axios";

function SearchbarPokemon() {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const toArray = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
    const results = await axios.get(url);
    toArray.push(results.data);
    setPokemonData(toArray);
  };

  const handleSubmit = (e) => {
    if (search === "") {
      return <></>;
    } else {
      getPokemon();
      e.preventDefault();
    }
  };
  return (
    <>
      <br />
      <div className="Container">
        <form onSubmit={handleSubmit} className="search">
          <label>
            <input
              className="searchbar"
              type="text"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Enter pokemon name"
            />
          </label>
          <button onClick={handleSubmit}>Search</button>
        </form>
        {pokemonData ? (
          pokemonData.map((pokemon) => (
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
          ))
        ) : (
          <p> Not found </p>
        )}
      </div>
    </>
  );
}

export default SearchbarPokemon;
