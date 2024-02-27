import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../style/Acter.css";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../context";

const Actor = () => {
  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";
  let { id } = useParams();
  const [person, setPerson] = useState([]);
  const [films, setFilms] = useState([]);
  const [state, setstate] = useState(false);
  const [isActive, setActive] = useState(false);
  const { language, dark } = useContext(LanguageContext);

  function getPersonjers() {
    axios(
      ` https://api.themoviedb.org/3/person/${id}?api_key=${APY_KEY}&language=${language}`
    ).then((res) => {
      setPerson(res.data);
      console.log("rrrrrrrrrrr", res);
    });

    axios(
      ` https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APY_KEY}&language=${language}`
    ).then((res) => {
      setFilms(res.data.cast);
      console.log("filmes", res);
    });
  }

  useEffect(() => {
    getPersonjers(APY_KEY);
  }, [language]);
  console.log(person);

  return (
    <div
      id="act"
      style={{
        background: dark ? "rgb(34, 34, 34)" : "rgb(121, 150, 194)",
      }}
    >
      <div className="container">
        <div className="actr">
          <div className="imageActer">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + person?.profile_path
              }
              alt=""
            />
          </div>
          <div className="text">
            <h1>{person?.name}</h1>
            <div className="data">
              <p>Дата рождения - {person.birthday}</p>
              <p> Место рождения - {person.place_of_birth}</p>
            </div>

            <h3>
              {!state
                ? person?.biography?.slice(0, 800)
                : person?.biography?.slice(0)}

              <span
                style={{
                  color: "blue",
                  cursor: "pointer",

                  // background: "none",
                  // display: state ? "flex" : "none",
                }}
                onClick={() => setstate(true)}
              >
                {""}
                .....Еше...
              </span>

              <span
                style={{
                  color: "blue",
                  cursor: "pointer",
                  display: state ? "flex" : "none",
                }}
                onClick={() => setstate(false)}
              >
                {""}
                ...закрыть
              </span>
            </h3>
          </div>
        </div>
        <h1 className="gg">Известность за</h1>
        {/* /////////////// */}

        <div className="fi2">
          {films.map((el) => (
            <div className="filmes">
              <Link to={`/MovieDetail/${el.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/original/" + el?.poster_path}
                  alt=""
                />
              </Link>
              <h1>{el?.title.slice(0, 30)}...</h1>
            </div>
          ))}
        </div>
        <div className="fi1">
          <h4>Также известность как</h4>
          <h3>{person?.also_known_as}</h3>
        </div>

        {/* /////////////// */}
      </div>
    </div>
  );
};

export default Actor;
