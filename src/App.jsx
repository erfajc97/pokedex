import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import InputName from "./assets/components/InputName";
import Pokedex from "./assets/components/Pokedex";
import PokedexId from "./assets/components/PokedexId";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./assets/components/Loading";
import Logo from "./assets/img/image 11.png";
import ProtectedRoutes from "./assets/components/ProtectedRoute";

function App() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [switchMode, setSwitchMode] = useState(false);
  const [darkmode,setDarkmode] = useState(false)
  const userName = useSelector((state) => state.userName);

  setTimeout(() => {
    setLoadingPage(false);
  }, 1000);

  const switchOn = () => {
    setSwitchMode(!switchMode);
    setDarkmode(!darkmode);
  };

  let classDark = "";
  if (switchMode == true) {
    classDark = "active";
  }

  return (
    <div className="App">
      <div className={`dark ${darkmode ? "darkmode" : "ligthmode"}`}>
        <HashRouter>
          <div
            style={{ backgroundColor: darkmode ? "#6791B9" : "#dd1a1a" }}
            className={`container_principal_logo`}>
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
              <Route
                path="/"
                element={<InputName userName={userName} darkmode={darkmode} />}
              />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/pokedex"
                  element={<Pokedex darkmode={darkmode} />}
                />
                <Route
                  path="/pokedex/:id"
                  element={<PokedexId darkmode={darkmode} />}
                />
              </Route>
            </Routes>
          )}
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
