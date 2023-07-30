import React from "react";
import "./PokemonCard.scss";
import pokeball from "../images/pokeballFull.png";
import pokeballEmpty from "../images/pokeballEmpty.png";
import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";

export default function PokemonCard({ name, url }) {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function CloseModalHandler() {
    setModalIsOpen(false);
  }
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log("=>", data);

      setPokemon(data);
    })();
  }, [url]);

  if (!pokemon) return null;

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="image-title"
            />
            <p style={{ width: "180px", color: "black" }}>
              No {pokemon.id.toString().padStart(3, "0")}
            </p>
            <p>{pokemon.name}</p>
            <img
              src={pokeballEmpty}
              alt="pokeball"
              className="pokeball-title"
            />
          </div>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{ background: "#dbdbd9", textAlign: "center" }}
              className="stats-left"
            >
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className="stats-right" style={{ background: "#ffffff" }}>
              <p>{pokemon.types[0].type.name}</p>
              <p>{(pokemon.height * 0.1).toFixed(2)} M</p>
              <p>{(pokemon.weight * 0.1).toFixed(2)} kg</p>
            </div>
          </div>

          <div className="base-stats">
            <div>
              {pokemon.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)
                .map((stats) => {
                  <p className="stats">{pokemon.stats}</p>;
                })}
            </div>
            <div>
              {/* {pokemon.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)
                .map((stats) => {
                  <p className="stats">{  //   .map((stat) => stat.base_stat)}</p>;
                })} */}
            </div>{" "}
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>
          No. {pokemon.id.toString().padStart(3, "0")}
        </p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
      <>
        {modalIsOpen && (
          <Modal
            id={pokemon.id.toString().padStart(3, "0")}
            name={name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            type={pokemon.types[0].type.name}
            weight={pokemon.weight}
            stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
            statsName={pokemon.stats.map((stat) => stat.stat.name).slice(0, 3)}
            onClick={CloseModalHandler}
          />
        )}
      </>
    </div>
  );
}
