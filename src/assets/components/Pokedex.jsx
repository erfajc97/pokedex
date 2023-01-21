import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";

const Pokedex = ({darkmode}) => {
  const [pokemon, setPokemon] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [typePokemon, setTypePokemon] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279`)
      .then((res) => setPokemon(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypePokemon(res.data.results));
  }, []);

  // console.log(typePokemon);


  // Pagination-----------
 
   const [page, setPage] = useState(1);
   const lastIndex = page * 20;
   const firstIndex = lastIndex - 20;
   const pagination = pokemon?.slice(firstIndex, lastIndex);
   const lastPage = Math.ceil(pokemon?.length / 20);

      const numbers = [];

      for (let i = page - 3; i <= page + 2; i++) {
        if (i+1 >= page && i <= lastPage) {
          numbers.push(i);
        }
      }
// --------------------------------


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
          Welcome <b style={{ color: darkmode ? "#6791B9" : "#dd1a1a" }}
          >{userName}</b>, here you can find your favorite POKEMON
        </h2>
        <div className="container_search">
          <input
            className="inputSearch"
            type="text"
            placeholder=" Search a Pokemon"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />

          <button
            style={{ backgroundColor: darkmode ? "#6791B9" : "#dd1a1a" }}
            className="button__Search"
            onClick={searchType}>
            Search
          </button>
        </div>
        <select onChange={filterType} className="containerSuggest">
          <option>All Pokemons</option>
          {typePokemon?.map((p, index) => (
            <option className="option" value={p.url} key={index}>
              {p?.name}
            </option>
          ))}
        </select>

        <ul className="container__pokemonCard">
          {pagination.map((pokemon, index) => (
            <PokemonCards
              darkmode={darkmode}
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </ul>
        <br />
        <br />
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

      <footer>
        <div className="containerbuttonFooter">
          <button
            className="btn-back"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}>
            <i className="bx bxs-chevrons-left"></i>
          </button>

          {numbers.map((number) => (
            <button
              key={number}
              className="pagination_numbers"
              onClick={() => setPage(number)}>
              {number}
            </button>
          ))}

          <button
            className="btn-next"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}>
            <i className="bx bxs-chevrons-right"></i>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Pokedex;
