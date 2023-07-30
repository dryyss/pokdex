import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./PokeList.scss";
import PokemonCard from "./PokemonCard";

export default function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
      );
      const data = await res.json();

      setAllPokemons(data.results);
    })();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.length > 0 ? (
            allPokemons.map((pokemonStats, index) => (
              <PokemonCard
                key={pokemonStats.name + index}
                name={pokemonStats.name}
                url={pokemonStats.url}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
}
