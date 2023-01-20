import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexId = () => {

      const navigate = useNavigate();
      const back = () => {
        navigate(-1);
      };
    return (
      <div>
        <h2>POKEDEX ID</h2>

        <div className="container_button_back">
          <button onClick={back} className="back">
            <i className="bx bx-arrow-back bx-lg"></i>
          </button>
        </div>
      </div>
    );
};

export default PokedexId;