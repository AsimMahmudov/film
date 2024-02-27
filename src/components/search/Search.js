import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "../style/Search.css";

const Search = () => {
  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";
  const [search, setSearch] = useState([]);
  const { movieName } = useParams();

  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    ).then((res) => {
      setSearch(res.data.results);
    });
  };

  useEffect(() => {
    getSearch(APY_KEY);
  }, [movieName]);

  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {search.map((el) => (
            <Card el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
