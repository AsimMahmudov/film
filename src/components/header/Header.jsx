import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import lu from "../images/Без_названия-removebg-preview.png";

import "../style/Header.css";
import { click } from "@testing-library/user-event/dist/click";
import { LanguageContext } from "../context";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { setLanguage, language, setDark, dark } = useContext(LanguageContext);

  console.log("miine", dark);

  const nav = useNavigate();

  return (
    <div className="headers">
      <div className="container">
        <div className="hero">
          <div className="logo">
            <img src={lu} alt="" />
          </div>
          <div className="links">
            {/* <NavLink to={"hero"}>Hero</NavLink> */}
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/new"}>Now</NavLink>
            <NavLink to={"/top"}>Top rated</NavLink>
            <NavLink to={"/favorite"}>
              <ion-icon name="heart"></ion-icon>
            </NavLink>
          </div>

          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en-US">En</option>
            <option value="ru-RU">Ру</option>
            <option value="fr-FR">Fr</option>
          </select>

          <a href="#" onClick={() => setDark(!dark)}>
            <ion-icon name="moon"></ion-icon>
          </a>

          <div className="btn">
            <input
              onInput={(e) => {
                nav(`/search/${e.target.value}`);
              }}
              placeholder="найти фильм,сериал..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              onClick={
                inputValue
                  ? () => {
                      nav(`/search/${inputValue}`);
                      setInputValue("");
                    }
                  : null
              }
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
