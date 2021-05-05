import React from "react";
import { Link } from "react-router-dom";
import "../LostPage/LostPage.css";

function LostPage() {
  return (
    <section className="lostpage">
      <h1 className="lostpage__title">404</h1>
      <p className="lostpage__text">Страница не найдена</p>
      <Link to="/" className="lostpage__link">
        Назад
      </Link>
    </section>
  );
}

export default LostPage;