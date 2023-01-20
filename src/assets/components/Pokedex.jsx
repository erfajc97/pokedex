import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  // const [searchId, setSearchId] = useState("");
  // const [localsuggest, setLocalsuggest] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  // console.log(pokemon);

  // useEffect(() => {
  //   if (searchId) {
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${searchId}`)
  //       .then((res) => setLocalsuggest(res.data.results));
  //   } else {
  //     setLocalsuggest([]);
  //     // setBackg(true);
  //   }
  // }, [searchId]);

  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  // const searchType = () => {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${searchId}/`;

  //   axios.get(url).then((res) => setGeneralInfo(res.data));
  // };

  return (
    <div className="container_Pokedex">
      <div className="container_info_pokedex">
        <h2 className="title_Pokedex">
          Welcome <b>{userName}</b>, here you can find your favorite POKEMON
        </h2>
        <div className="container_search">
          <input
            className="inputSearch"
            type="text"
            // placeholder="Write a number ( 1 - 126 )"
            // value={searchId}
            // onChange={(e) => setSearchId(e.target.value)}
          />

          <button
            className="button__Search"
            // onClick={searchType}
          >
            Search
          </button>
        </div>
        <div className="containerSuggest">
          <h3>All Pokemons</h3>{" "}
          <i className="bx bx-chevron-down bx-md bx-fade-down"></i>
        </div>

        <ul className="container__pokemonCard">
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
