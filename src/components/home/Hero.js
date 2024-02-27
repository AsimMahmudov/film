import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const APY_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";

  const [background, setBackground] = useState([]);
  let result = [];

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
  return (
    <div
      style={{
        background: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
          background[Math.round(Math.random() * background.length)]
        }) no-repeat center/cover fixed`,
        minHeight: "90vh",
      }}
    ></div>
  );
};

export default Hero;
