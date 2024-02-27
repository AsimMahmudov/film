import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../style/Card.css";
import { LanguageContext } from "../context";

const Card = ({ el }) => {
  const [isActive, setActive] = useState(false);
  const { language, dark } = useContext(LanguageContext);

  return (
    <div className="card">
      <Link to={`/MovieDetail/${el.id}`}>
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
          alt=""
        />
      </Link>
      <h4>{el.title}</h4>
      <h5>{el.release_date}</h5>
      <div className="rting">
        <h3>{el.vote_average}</h3>
      </div>

      <div className="as">
        <div
          className="box"
          style={{
            width: isActive ? "500px" : "0px",
            height: isActive ? "335px" : "0px",
            fontSize: isActive ? "15px" : "0px",
          }}
        >
          <h3 className="ttt">{el.overview.slice(0, 200)}...</h3>
        </div>
        <button className="dark" onClick={() => setActive(!isActive)}>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Card;
