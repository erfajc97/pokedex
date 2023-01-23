import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pikachu from '../img/pikachu.png'

const PokemonCards = ({ url, darkmode }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data)
    } 
      ) 
  }, []);

 

  function firstLetterUpCase(text) {
    let name = text?.split(" ");
    return name?.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ");
  }

  const upperCaseName = firstLetterUpCase(pokemon.name);

  const typeOne = pokemon?.types?.[1]?.type.name;
  const typeTwo = pokemon?.types?.[0]?.type.name;

  const changeColorCardPokemon = () => {
    if (typeTwo === "normal" || typeOne === "") {
      return "#735159";
    } else if (typeTwo === "fighting" || typeOne === "") {
      return "#973F26";
    } else if (typeTwo === "poison" || typeOne === "") {
      return "#5B2D86";
    } else if (typeTwo === "ground" || typeOne === "") {
      return "#FFEB3B";
    } else if (typeTwo === "rock" || typeOne === "") {
      return "#46180B";
    } else if (typeTwo === "bug" || typeOne === "") {
      return "#8BC34A";
    } else if (typeTwo === "ghost" || typeOne === "") {
      return "#31336A";
    } else if (typeTwo === "fire" || typeOne === "") {
      return "#FB6C6C";
    } else if (typeTwo === "water" || typeOne === "") {
      return "#70B7FA";
    } else if (typeTwo === "grass" || typeOne === "") {
      return "#48D0B0";
    } else if (typeTwo === "electric" || typeOne === "") {
      return "#E2E02D";
    } else if (typeTwo === "ice" || typeOne === "") {
      return "#86D2F4";
    } else if (typeTwo === "dragon" || typeOne === "") {
      return "#448A94";
    } else if (typeTwo === "dark" || typeOne === "") {
      return "#030706";
    } else if (typeTwo === "fairy" || typeOne === "") {
      return "#981844";
    } else if (typeTwo === "psychic" || typeOne === "") {
      return "grey";
    } else if (typeTwo === "steel" || typeOne === "") {
      return "#0093B2";
    } else {
      return "grey";
    }
  };

  let myStyle = {
    border: `${changeColorCardPokemon()} solid 0.25rem`,
  };
  let letterColor = {
    color: `${changeColorCardPokemon()}`,
  };

  const imgPokemon = pokemon.sprites?.other.dream_world.front_default;

  const funcNavigate = () =>{
    navigate(`/pokedex/${pokemon.id}`);
    window.scroll(0,0);
    console.log(window.scroll);

  }

  return (
    <div style={myStyle} onClick={funcNavigate} className="container_pokemons">
      <div
        style={{
          background: changeColorCardPokemon(),
        }}
        className="container_background_card"></div>
      <div className="container_img_pokemon">
        <img
          className="img_idx animate__animated animate__heartBeat"
          src={imgPokemon ? imgPokemon : pikachu}
          alt=""
        />
      </div>
      <div className="container_name_pokemmon">
        <h3 style={letterColor}>{upperCaseName}</h3>
      </div>

      <div className="container_type_pokecard">
        {pokemon.types?.map((type, index) => (
          <p key={index}> {firstLetterUpCase(type.type.name)}</p>
        ))}
      </div>
      <p>Type</p>

      <div className="container_grid_info_card">
        <div className="info-abilities_card">
          <p>Hp</p>
          <b style={{ color: changeColorCardPokemon() }}>
            {" "}
            {pokemon.stats?.[0].base_stat}{" "}
          </b>
        </div>
        <div className="info-abilities_card">
          <p>Attack</p>
          <b style={{ color: changeColorCardPokemon() }}>
            {" "}
            {pokemon.stats?.[1].base_stat}{" "}
          </b>
        </div>
        <div className="info-abilities_card">
          <p>Defense</p>
          <b style={{ color: changeColorCardPokemon() }}>
            {" "}
            {pokemon.stats?.[2].base_stat}{" "}
          </b>
        </div>
        <div className="info-abilities_card">
          <p>Speed</p>
          <b style={{ color: changeColorCardPokemon() }}>
            {" "}
            {pokemon.stats?.[5].base_stat}{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default PokemonCards;
