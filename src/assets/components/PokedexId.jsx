import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokedexId = ({ darkmode }) => {
  const [pokemonId, setPokemonId] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemonId(res.data))
      .catch(() => navigate("/pokedex"));
  }, []);
  console.log(pokemonId);

  function firstLetterUpCase(text) {
    let name = text?.split(" ");
    return name?.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ");
  }

  const upperCaseName = firstLetterUpCase(pokemonId.name);
  const typeOne = pokemonId?.types?.[1]?.type.name;
  const typeTwo = pokemonId?.types?.[0]?.type.name;

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
      return "#CEB8D7";
    } else if (typeTwo === "steel" || typeOne === "") {
      return "#0093B2";
    } else {
      return "#CEB8D7";
    }
  };

  let myStyle = {
    border: `${changeColorCardPokemon()} solid 0.25rem`,
  };
  let letterColor = {
    color: `${changeColorCardPokemon()}`,
  };

    const hp = (pokemonId.stats?.[0].base_stat)
    const attack = pokemonId.stats?.[1].base_stat; 
    const defense = pokemonId.stats?.[2].base_stat; 
    const speed = pokemonId.stats?.[5].base_stat; 

  return (
    <div className="container_pokedexId">
      <div style={myStyle} className="container_principal_info_pokedexId">
        <div
          style={{
            background: changeColorCardPokemon(),
          }}
          className="container_background_card divextra"></div>
        <div className="container_img_id ">
          <img
            className="img_idx bounce-in-top"
            src={pokemonId.sprites?.other.dream_world.front_default}
            alt=""
          />
        </div>
        <p className="containerId">#{id} </p>
        <div className=" animate__animated animate__heartBeat container_name_barritas">
          <h2 style={letterColor}> {upperCaseName} </h2>
        </div>
        <div className="container_width_heigth">
          <div className="container_info_w_h">
            <p>Weight </p> <b> {pokemonId.weight} </b>
          </div>
          <div className="container_info_w_h">
            <p>Height</p>
            <b> {pokemonId.height} </b>
          </div>
        </div>
        <div className="container_type_ability">
          <div className="container_type">
            <h3>Type</h3>
            <div className="info_type">
              {pokemonId.types?.map((type, i) => (
                <p
                  style={{
                    background: changeColorCardPokemon(),
                    color: "#fff",
                  }}
                  className="info_p_type"
                  key={i}>
                  {" "}
                  {firstLetterUpCase(type.type.name)}{" "}
                </p>
              ))}
            </div>
          </div>
          <div className="container_ability">
            <h3>Abilities</h3>
            <div className="info_type">
              {pokemonId.abilities?.map((a, i) => (
                <p className="info_p_type" key={i}>
                  {" "}
                  {firstLetterUpCase(a.ability.name)}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container_stats">
          <h3 className="titule_stats">Stats</h3>
          <div className="container_progreso">
            <p>HP</p>
            <b> {pokemonId.stats?.[0].base_stat} </b>
          </div>
          <div className="barra_progreso">
            150
            <div style={{ width: `${hp}%` }} className="barra_absolute"></div>
          </div>

          <div className="container_progreso">
            <p>Attack</p>
            <b> {pokemonId.stats?.[1].base_stat} </b>
          </div>
          <div className="barra_progreso">
            150
            <div
              style={{ width: `${attack}%` }}
              className="barra_absolute "></div>
          </div>
          <div className="container_progreso">
            <p>Defense</p>
            <b> {pokemonId.stats?.[2].base_stat} </b>
          </div>
          <div className="barra_progreso">
            150
            <div
              style={{ width: `${defense}%` }}
              className="barra_absolute"></div>
          </div>
          <div className="container_progreso">
            <p>Speed</p>
            <b> {pokemonId.stats?.[5].base_stat} </b>
          </div>
          <div className="barra_progreso">
            150
            <div
              style={{ width: `${speed}%` }}
              className="barra_absolute"></div>
          </div>
        </div>
      </div>
      <br />
      <div className="container_title_moviment">
        <h3 className="title_moviments">Movements</h3>
      </div>
      <div style={myStyle} className="container_moviments">
        {pokemonId.moves?.map((m, i) => (
          <div key={i} className="container_p_moviments">
            <p
              style={{ color: darkmode ? "black" : "#343d5b" }}
              className="animate__animated animate__flash">
              {m.move.name}
            </p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />

      <div className="container_button_back">
        <button
          style={{ backgroundColor: darkmode ? "#6791B9" : "#dd1a1a" }}
          onClick={back}
          className="back">
          <i className="bx bx-arrow-back bx-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default PokedexId;
