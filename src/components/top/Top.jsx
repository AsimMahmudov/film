import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import "./Top.css";
import Card from "../../components/card/Card";
import { LanguageContext } from "../context";

const Top = () => {
  const [top, settop] = useState([]);
  const [page, setPage] = useState(1);
  const { language, dark } = useContext(LanguageContext);

  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";

  const getTop = () => {
    axios(
      ` https://api.themoviedb.org/3/movie/top_rated?api_key=${APY_KEY}&language=${language}&page=${page}`
    ).then((res) => {
      settop(res.data.results);
      console.log(res);
    });
  };

  useEffect(() => {
    getTop([]);
  }, [page, language]);

  return (
    <div
      id="top"
      style={{
        background: dark ? "rgb(34, 34, 34)" : "rgb(121, 150, 194)",
      }}
    >
      <div className="container">
        <div className="block">
          <img
            className="fo"
            src="https://yastatic.net/s3/kinopoisk-frontend/frontend-www/release/_next/static/images/cover-391898c8941d3cc1.jpg"
            alt=""
          />
        </div>

        <div className="ph1">
          {" "}
          <h1>
            <span className="sp">Топ рекомендуемые</span> <br /> фильмы и
            сериалы ждут вас!
          </h1>
        </div>
        <div className="inpP">
          <input type="text" placeholder="найти фильм,сериал,персону...." />
          <button>search</button>
        </div>
        <div className="top">
          {top.map((el, index) => (
            <Card el={el} key={index} />
          ))}
        </div>
        <div className="butons">
          <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
            back
          </button>
          <h4>{page}</h4>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
