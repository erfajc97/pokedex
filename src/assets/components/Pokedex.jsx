import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [typePokemon, setTypePokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setPokemon(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypePokemon(res.data.results));
  }, []);

  // console.log(typePokemon);

  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const searchType = () => {
    navigate(`/pokedex/${searchId.toLowerCase()}`);
  };

  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemon(res.data.pokemon));
  };

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
            placeholder=" Search a Pokemon"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />

          <button className="button__Search" onClick={searchType}>
            Search
          </button>
        </div>
        <select onChange={filterType} className="containerSuggest">
          {typePokemon?.map((p, index) => (
            <option className="option" value={p.url} key={index}>
              {p?.name}
            </option>
          ))}
        </select>

        <ul className="container__pokemonCard">
          {pokemon.map((pokemon, index) => (
            <PokemonCards
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
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
