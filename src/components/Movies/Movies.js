import React from "react";
import Header from "../Header/Header";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import "../Movies/Movies.css";
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
			<>
				<Header>
					<Logo />
					<Navigation onClick={props.onMenu} />
				</Header>
				<SearchForm />	
				<section className="movies">
			    <article className="movie-card">
						<div className="movie-card__body">
							<h3 className="movie-card__title">
								Пятый элемент
							</h3>
							<p className="movie-card__duration">
								123 минуты
							</p>
						</div>
						<img className="movie-card__photo" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/1c7397d3580632a8cdef559a5262a7d5/100x64_3" alt="Пятый элемент" />
						<button className="movie-card__button" type="submit"></button>
					</article>
			    <article className="movie-card">
						<div className="movie-card__body">
							<h3 className="movie-card__title">
								Подземка
							</h3>
							<p className="movie-card__duration">
								104 минуты
							</p>
						</div>
						<img className="movie-card__photo" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/27707/325cb55b6245526b4d69475ea22d17c8/100x64_3" alt="Подземка" />
						<button className="movie-card__button" type="submit"></button>
					</article>
			    <article className="movie-card">
						<div className="movie-card__body">
							<h3 className="movie-card__title">
							Поезд на Дарджилинг. Отчаянные путешественники
							</h3>
							<p className="movie-card__duration">
								92 минуты
							</p>
						</div>
						<img className="movie-card__photo" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/b02688c7dcdbce1399e381c41df91111/100x64_3" alt="Поезд на Дарджилинг. 
							Отчаянные путешественники" />
						<button className="movie-card__button" type="submit"></button>
					</article>					
			    <article className="movie-card">
						<div className="movie-card__body">
							<h3 className="movie-card__title">
							Фестиваль Рифкина
							</h3>
							<p className="movie-card__duration">
								88 минут
							</p>
						</div>
						<img className="movie-card__photo" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/75d5239d41a3fbe5f56c6258228ad772/100x64_3" alt="Фестиваль Рифкина" />
						<button className="movie-card__button" type="submit"></button>
					</article>
			    <article className="movie-card">
						<div className="movie-card__body">
							<h3 className="movie-card__title">
							Капитан Фантастик
							</h3>
							<p className="movie-card__duration">
								118 минут
							</p>
						</div>
						<img className="movie-card__photo" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/9c2130ebc02eb1566c6af1f5972d9b9b/100x64_3" alt="Капитан Фантастик" />
						<button className="movie-card__button" type="submit"></button>
					</article>					    	  
				</section>					
				<Footer />
    </>
    );
}

export default Movies;