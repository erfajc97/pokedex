import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";

const Pokedex = () => {
  const[pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setPokemon(res.data.results));

  },[])

    // console.log(pokemon);
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="container_Pokedex">
      <div className="container_info_pokedex">
        <h2 className="title_Pokedex">
          Welcome <b>{userName}</b>, here you can find your favorite POKEMON
        </h2>

        <ul className="container__pokemonCard" >
          {pokemon.map((pokemon, index) => (
            <PokemonCards key={index} url={pokemon.url} />
          ))}
        </ul>

        <div className="container_button_back">
          <button onClick={back} className="back">
            <i className="bx bx-arrow-back bx-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
