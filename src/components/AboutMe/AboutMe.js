import React from "react";
import Avatar from '../../images/avatar.jpeg';
import "./AboutMe.css";

function AboutMe() {

  return (
		<>
			<section className="about-me" id="aboutMe">
				<h3 className="about-me__title">Студент</h3>
				<div className="about-me__info">
					<div className="about-me__text">
						<h2 className="about-me__name">Александр Зенкин</h2>
						<h4 className="about-me__subtitle">Фронтенд-разработчик, 42 года</h4>
						<p className="about-me__description">
							Я родился и живу в Москве, закончил факультет электроники МГИЭМ. У
							меня есть жена и две дочки. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь
							бегом. После того, как прошёл курс по&nbsp;веб-разработке, начал
							заниматься фриланс-заказами.
						</p>
						<div className="about-me__links">
							<a className="about-me__link"	href="https://www.facebook.com/zenkin.ru">Facebook</a>
							<a className="about-me__link"	href="https://github.com/hypermyper">Github</a>
						</div>
					</div>
					<img className="about-me__avatar" src={Avatar} alt="аватар" />
				</div>
			</section>
		</>
  );
	
}

export default AboutMe;