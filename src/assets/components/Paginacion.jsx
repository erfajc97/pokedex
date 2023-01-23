import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Paginacion = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const paginacion = pokemon?.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(pokemon?.length / 20);


   const numbers = [];

   for (let i = page - 3; i <= page + 2; i++) {
     if (i >= page && i <= lastPage) {
       numbers.push(i);
     }
   }

  return (
    <div>
      {paginacion.map((paginacion) => (
        <p key={paginacion.name}>{paginacion.name}</p>
      ))}

      <div className="containerbuttonFooter">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Back
        </button>

        {numbers.map((number) => (
         
            <button
              key={number}
              className="pagination numbers"
              onClick={() => setPage(number)}>
              {number}
            </button>
          
        ))}

        <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          Next
        </button>
      </div>
    </div>
  );
  
};

export default Paginacion;