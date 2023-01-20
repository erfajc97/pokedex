import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCards = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  function firstLetterUpCase(text){
    let name =text?.split(' ');
    return name?.map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
  }

  const upperCaseName = firstLetterUpCase(pokemon.name);

  return (
    <div
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
      className="container_pokemons">
      <img src={pokemon.sprites?.front_default} alt="" />
      {upperCaseName}
      <p>Types</p>
      {/* {
        pokemon.types?.map((types, index) => {
            <p> {types?.name} </p>
        })
      } */}
    </div>
  );
};

export default PokemonCards;
