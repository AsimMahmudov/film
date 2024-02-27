import axios from "axios";
import React, { useContext } from "react";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../style/MovieDetail.css";
import { LanguageContext } from "../context";

// import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////

const MovieDetail = ({ el }) => {
  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";
  const [details, setDetails] = useState({});
  let { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  const [isModal, setmodal] = useState(false);
  const { language, dark, favorite, setFavorite } = useContext(LanguageContext);

  const [man, setMan] = useState([]);

  const [uu, setUu] = useState([]);

  // .......

  const [heart, setHeart] = useState(false);
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState(false);
  const [heart3, setHeart3] = useState(false);

  // ........

  let findMovie = favorite.some((el) => el.id === details.id);
  function getMov(date) {
    if (findMovie) {
      const filteredMovies = favorite.filter((el) => el.id !== date.id);
      setFavorite(filteredMovies);
    } else {
      setFavorite((prev) => [...prev, date]);
    }
  }
  console.log(favorite, "eee");

  /////////////////////////////////////////////////////////////////////////////////////////

  function getDetails(key) {
    window.scroll(0, 0);
    axios(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetails(res.data);
      console.log(res);
    });

    axios(
      ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=${language}
      `
    ).then((res) => {
      setTrailer(res.data.results);
      console.log("trailer", res.data);
    });

    axios(
      ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}
      `
    ).then((res) => {
      setMan(res.data.cast);
      console.log("man", res.data);
    });

    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APY_KEY}&language=${language}&page=1`
    ).then((res) => {
      setUu(res.data.results);
      console.log("rrrrrrrrrrr", res);
    });
  }

  useEffect(() => {
    getDetails(APY_KEY);
  }, [id, language]);
  console.log(details);

  /////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      id="detil"
      style={{
        background: dark ? "rgb(34, 34, 34)" : "rgb(121, 150, 194)",
      }}
    >
      <div className="container">
        <div
          className="details"
          style={{
            background: `url(${
              "https://image.tmdb.org/t/p/original/" + details?.backdrop_path
            })no-repeat center/cover`,
          }}
        >
          <div className="content">
            <img
              className="registor"
              onClick={() => setmodal(true)}
              src={
                "https://image.tmdb.org/t/p/original/" + details?.poster_path
              }
              alt=""
            />

            {/* //////// * MODAL-WINDOW * ////// */}

            <div
              className="modal-window"
              style={{ display: isModal ? "" : "none" }}
            >
              <div className="modal-content">
                <button className="cick" onClick={() => setmodal(false)}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
                <div className="mo">
                  <img
                    className="foto"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      details?.poster_path
                    }
                    alt=""
                  />
                  <h2>{details?.title}</h2>
                </div>
              </div>
            </div>

            {/* ////////////////// */}

            <div className="text1">
              <h1>{details?.title}</h1>
              <span>{details?.release_date}</span>
              <p>{details?.overview}</p>
              <div className="pos">
                <a
                  className="ic"
                  href="#"
                  onClick={() => setHeart(!heart)}
                  style={{
                    color: heart ? "yellow" : "white",
                    background: "blue",
                  }}
                >
                  <ion-icon name="list"></ion-icon>
                </a>

                <a
                  className="ic"
                  href="#"
                  onClick={() => setHeart1(!heart1)}
                  style={{
                    color: heart1 ? "red" : "white",
                    background: "blue",
                  }}
                >
                  <ion-icon name="heart"></ion-icon>
                </a>

                <a
                  className="ic"
                  href="#"
                  // onClick={() => setHeart2(!heart2)}
                  onClick={() => {
                    getMov(details);
                  }}
                  style={{
                    color: findMovie ? "yellow" : "white",
                    background: "blue",
                  }}
                >
                  <ion-icon name="bookmarks"></ion-icon>
                </a>

                <a
                  className="ic"
                  href="#"
                  onClick={() => setHeart3(!heart3)}
                  style={{
                    color: heart3 ? "yellow" : "white",
                    background: "blue",
                  }}
                >
                  <ion-icon name="star"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        <h1 className="tr"> наслаждайтесь трейлером</h1>

        <div className="trey">
          {trailer.map((video) => (
            <>
              <div className="vv">
                <iframe
                  className="vid"
                  width="1031"
                  height="580"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="Кухня | Сезон 3 | Серия 56 - 60"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </>
          ))}
        </div>
        <h1 className="tt">Актеры и актрицы фильма</h1>
        <div className="dd">
          {man.map((el) => (
            <div className="container">
              <div className="person">
                <Link to={`/ActersDetail/${el.id}`}>
                  <img
                    className="pers"
                    src={
                      "https://image.tmdb.org/t/p/original/" + el.profile_path
                    }
                    alt=""
                  />
                </Link>

                <h2>{el.name}</h2>
                <p>{el.character}</p>
              </div>
            </div>
          ))}
        </div>
        {/* //////////////////// */}
        <h1 className="eee"> рекомендации</h1>

        <div className="rek">
          {uu.map((el) => (
            <div className="ee">
              <Link to={`/MovieDetail/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el?.backdrop_path}`}
                  alt=""
                />
              </Link>

              <div className="boxs">
                <h4>{el.release_date}</h4>
              </div>
              <h3>{el?.title.slice(0, 100)}...</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
