import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
		<>
			<section className="portfolio">
				<h3 className="portfolio__title">Портфолио</h3>
				<a href="/" className="portfolio__links portfolio__links_divider">
					<div className="portfolio__link">Статичный сайт</div>
					<div className="portfolio__link-icon">↗</div>
				</a>
				<a href="https://hypermyper.github.io/russian-travel/" target="_blank" className="portfolio__links portfolio__links_divider" rel="noreferrer">
						<div className="portfolio__link">Адаптивный сайт</div>
						<div className="portfolio__link-icon">↗</div>
				</a>
				<a href="https://hypermyper.github.io/teamwork/" target="_blank" className="portfolio__links portfolio__links_divider" rel="noreferrer">
					<div className="portfolio__link">Командный проект</div>
					<div className="portfolio__link-icon">↗</div>
				</a>			
				<a href="https://nikoloshgw.github.io/hackaton2025yandex/" target="_blank" className="portfolio__links portfolio__links_divider" rel="noreferrer">
					<div className="portfolio__link">Хакатон–2025</div>
					<div className="portfolio__link-icon">↗</div>
				</a>					
				<a href="https://kentavrik.com/" target="_blank" className="portfolio__links" rel="noreferrer">
					<div className="portfolio__link">Одностраничное приложение</div>
					<div className="portfolio__link-icon">↗</div>
				</a>
			</section>
		</>
  );
}

export default Portfolio;
