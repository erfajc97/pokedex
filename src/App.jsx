import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './assets/components/InputName'
import Pokedex from "./assets/components/Pokedex";
import PokedexId from "./assets/components/PokedexId";
import { useDispatch, useSelector } from "react-redux";
import Loading from './assets/components/Loading'
import Logo from "./assets/img/image 11.png";

function App() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [switchMode , setSwitchMode] = useState(false)
  const userName = useSelector(state => state.userName)

  
    setTimeout(() => {
      
      setLoadingPage(false)
    }, 3000);
  
    const switchOn = () =>{
      setSwitchMode(!switchMode);
    }

    let classDark = ""
    if(switchMode == true){
      classDark="active"
    }
    

  return (
    <div className="App">
      <HashRouter>
        <div className="container_principal_logo">
          <img
            style={{ display: loadingPage ? "none" : "flex" }}
            className="logo"
            src={Logo}
            alt=""
          />
          <div
            style={{ display: loadingPage ? "none" : "flex" }}
            className="barra_logo">
            <div className="circule">
              <div className="circule_small">
                <div className="smallest"></div>
              </div>
            </div>
          </div>
        </div>
        <header
          style={{ display: loadingPage ? "none" : "flex" }}
          className="principal_header">
          <h1 className="principal_Title">POKEMON</h1>
          <button
            onClick={switchOn}
            className={`switch ${classDark}`}
            id="swith">
            <span>
              <i className="bx bx-sun bx-sm"></i>
            </span>
            <span>
              <i className="bx bx-moon bx-sm"></i>
            </span>
          </button>
        </header>

        {loadingPage ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<InputName userName={userName} />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedexId" element={<PokedexId />} />
          </Routes>
        )}
       
      </HashRouter>
    </div>
  );
}

export default App
