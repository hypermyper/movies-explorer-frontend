import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo__navi">
            <li class="promo__navi-element"><a className="promo__navi-link" href="#about">О проекте</a></li>
            <li class="promo__navi-element"><a className="promo__navi-link" href="#about">Технологии</a></li>
            <li class="promo__navi-element"><a className="promo__navi-link" href="#about">Студент</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Promo;
