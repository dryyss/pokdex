import React from "react";
import pokeball from "../images/pokeballEmpty.png";
import pokeballcolor from "../images/pokeballFull.png";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="title">
      <div className="title_left">
        <p>Pokédex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="cautgh"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="seen"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white " }}> A -&gt; Z</p>
    </div>
  );
}
