import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2020–{date.getFullYear()}</p>
        <ul className="footer__links-wrapper">
          <li>
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/hypermyper" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li>
						<a className="footer__link" href="https://www.facebook.com/zenkin.ru" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
