import React from "react";
import lu from "../images/unnamed-removebg-preview.png";

import "../style/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="f-block">
            <div className="f-img">
              <img src={lu} alt="" />
            </div>
            {/* /////// */}
            <div className="f-box">
              <h1>ГЛАВНОЕ</h1>
              <a href="">О TMDB</a>
              <a href="">Связаться с нами</a>
              <a href="">Форумы поддержки API</a>
              <a href="">Статус системы</a>
            </div>
            {/* //////// */}
            {/* /////// */}
            <div className="f-box">
              <h1>УЧАСТВУЙТЕ</h1>
              <a href="">Библия редакторов</a>
              <a href="">Добавить новый фильм</a>
              <a href="">Добавить новый сериал</a>
            </div>
            {/* //////// */}
            {/* /////// */}
            <div className="f-box">
              <h1>СООБЩЕСТВО</h1>
              <a href="">Руководства</a>
              <a href="">Обсуждения</a>
              <a href="">Доска почёта</a>
              <a href=""></a>
            </div>
            {/* //////// */}
            {/* /////// */}
            <div className="f-box">
              <h1>О ПРАВЕ</h1>
              <a href="">Условия использования</a>
              <a href="">API Правила использования</a>
              <a href="">Политика конфиденциальности</a>
              <a href="">DMCA Policy</a>
            </div>
            {/* //////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
