import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector((state) => state.userName);
    const navigate = useNavigate();
    const back =()=>{
      navigate(-1)

    }

    return (
      <div className="container_Pokedex">
        <div className="container_borrador">
          <h2 className='title_Pokedex'>
            Welcome <b>{userName}</b>, here you can find your favorite POKEMON
          </h2>

          <div className="container_button_back">
            <button onClick={back} className="back">
              <i class="bx bx-arrow-back bx-lg"></i>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Pokedex;