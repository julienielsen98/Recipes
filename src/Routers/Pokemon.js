import Header from "../Components/Header";
import { useState } from "react";
import axios from "axios";
import PokemonList from "../Components/PokemonList";

function Pokemon() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);

  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const results = await axios.get(url);
      toArray.push(results.data);
      setPokemonType(results.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  return (
    <div className="Pokemon">
      <Header />
      <div className="PokemonFrom">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter pokemon name"
            />
          </label>
        </form>
        {pokemonData.map((data) => {
          return (
            <div className="PokemonContainer">
              <img src={data.sprites["front_default"]} alt="pokemon_picture" />
              <div className="table">
                <div className="tableBody"></div>
                <div className="tableRow">
                  <div className="tableCell">Type: {pokemonType}</div>
                </div>
                <div className="tableRow">
                  <div className="tableCell">Height: {data.height} meters</div>
                </div>
                <div className="tableRow">
                  <div className="tableCell">Weight: {data.weight} kg</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <PokemonList />
    </div>
  );
}

export default Pokemon;
