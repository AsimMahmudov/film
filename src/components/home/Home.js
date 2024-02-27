import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../style/Home.css";
import { Link, useParams } from "react-router-dom";
import war from "../images/ac0c83b56f7c0d335855834c8a82c364.gif";
import wars from "../images/tumblr_74a3631c26e19769bb9a82c8db884b04_7fd6f6a9_540.gif";
import { LanguageContext } from "../context";

//////////////////////////////////////////////////////

const Home = () => {
  const [home, setHome] = useState([]);
  const [now, setNow] = useState([]);
  const [rek, setRek] = useState([]);
  const { language, dark } = useContext(LanguageContext);

  const [background, setBackground] = useState([]);
  let result = [];

  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";

  let { id } = useParams();

  //////////////////////////////////////////////////////

  function getHome(key) {
    axios(
      ` https://api.themoviedb.org/3/movie/popular?api_key=${APY_KEY}&language=${language}&page=2`
    ).then((res) => {
      setHome(res.data.results);
      console.log(res);
    });

    axios(
      `   https://api.themoviedb.org/3/movie/now_playing?api_key=${APY_KEY}&language=${language}&page=1`
    ).then((res) => {
      setNow(res.data.results);
      console.log(res);
    });

    axios(
      `    https://api.themoviedb.org/3/movie/top_rated?api_key=${APY_KEY}&language=${language}&page=1`
    ).then((res) => {
      setRek(res.data.results);
      console.log(res);
    });
  }

  useEffect(() => {
    getHome([]);
  }, [language]);

  //  ggggggggggggggg

  const getBackground = (key) => {
    axios(
      ` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-EN&page=1`
    ).then((res) =>
      res.data.results.map((el) => {
        result = [...result, el.backdrop_path];
        setBackground(result);
      })
    );
  };

  useEffect(() => {
    getBackground(APY_KEY);
  }, []);
  console.log(result);

  //////////////////////////////////////////////////////

  return (
    <div
      id="home"
      style={{
        background: dark ? "rgb(34, 34, 34)" : "rgb(121, 150, 194)",
      }}
    >
      <div className="container">
        <div className="block">
          <img className="fo" src={war} alt="" />
        </div>
        <div className="ph1">
          {" "}
          <h1>
            <span className="sp"> Захватывающие</span> <br /> фильмы и сериалы
            ждут вас!
          </h1>
        </div>
        <div className="inpP">
          <input type="text" placeholder="найти фильм,сериал,персону...." />
          <button>search</button>
        </div>
        <h1 className="popularText">Что популярно</h1>
        <div className="homePopular">
          {home.map((el) => (
            <div className="popularBox">
              <Link to={`/MovieDetail/${el.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/original/" + el?.poster_path}
                  alt=""
                />
              </Link>

              <h1>{el.title}</h1>
            </div>
          ))}
        </div>

        {/* //// */}

        <h1 className="popularText"> Новинки</h1>
        <div className="homePopular">
          {now.map((el) => (
            <div className="popularBox">
              <Link to={`/MovieDetail/${el.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/original/" + el?.poster_path}
                  alt=""
                />
              </Link>

              <h1>{el.title}</h1>
            </div>
          ))}
        </div>

        {/* //// */}

        <h1 className="popularText"> Топ рекомендации</h1>
        <div className="homePopular">
          {rek.map((el) => (
            <div className="popularBox">
              <Link to={`/MovieDetail/${el.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/original/" + el?.poster_path}
                  alt=""
                />
              </Link>

              <h1>{el.title}</h1>
            </div>
          ))}
        </div>

        {/* ////////////////////////////////////// */}
        <div className="starbox">
          <img src={wars} alt="" />
        </div>
        <div className="starbox1">
          <div className="boxt">
            <div className="box1">
              <h1>Присоединяйтесь сегодня</h1>
              <p>
                Get access to maintain your own custom personal lists, track
                what you've seen and search and filter for what to watch
                next—regardless if it's in theatres, on TV or available on
                popular streaming services like .
              </p>
              <button>Зарегистрироваться</button>
            </div>
            <div className="box2">
              <li> Enjoy TMDB ad free</li>
              <li> Maintain a personal watchlist</li>
              <li>
                {" "}
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li> Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
