import React, { useState } from "react";
import { userN } from "../../../src/store/slices/userName.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const InputName = ({ userName }) => {
  const [inputUser, setInputUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clicButton = () => {
    dispatch(userN(inputUser));
    navigate("/Pokedex");
  };

  return (
    <div className="container_home">
      <div className="container_title_home">
        <h2 className="title_home animate__animated animate__backInDown">
          Hello Trainer
        </h2>
      </div>
      <div className="container_img_inputName">
        <img
          className=" animate__animated animate__backInLeft"
          src={"https://i.gifer.com/WiCJ.gif"}
        />

        <label htmlFor="name_trainer">Give me your name to star!</label>
        <div className="button_input_Name">
          <input
            placeholder="Your name"
            id="name_trainer"
            type="text"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />

          <button onClick={clicButton}>
            <i className="bx bxl-telegram bx-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputName;
