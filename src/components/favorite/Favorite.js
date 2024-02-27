import React, { useContext } from "react";
import { LanguageContext } from "../context";
import Card from "../card/Card";
import "../style/Favorite.css";

const Favorite = () => {
  const { favorite } = useContext(LanguageContext);
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {favorite.map((el) => (
            <Card el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
