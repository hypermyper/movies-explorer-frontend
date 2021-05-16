import React from "react";
import { Link } from 'react-scroll';
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo__navi">
            <li className="promo__navi-element"><Link className="promo__navi-link" to="aboutProject" smooth={true}>О проекте</Link></li>
            <li className="promo__navi-element"><Link className="promo__navi-link" to="aboutTechs" smooth={true}>Технологии</Link></li>
            <li className="promo__navi-element"><Link className="promo__navi-link" to="aboutMe" smooth={true}>Студент</Link></li>
        </ul>
      </div>
    </section>
  );
}

export default Promo;
