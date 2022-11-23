import { useState, useEffect } from "react";
import React from "react";
import PrevNext from "./PrevNext";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const data = await response.json();
      const pokemonList = data.results
        .slice(0, data.results.length)
        .map((items) => items)
        .flat();
      setPokemon(pokemonList);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <PrevNext data={pokemon} />
    </>
  );
}

export default PokemonList;
