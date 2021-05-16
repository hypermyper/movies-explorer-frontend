import React from "react";
import "./Techs.css";

function Techs() {
  return (
		<>
			<section className="techs" id="aboutTechs">
				<h3 className="techs__title">Технологии</h3>
				<h2 className="techs__subtitle">7 технологий</h2>
				<p className="techs__description">
					На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
				</p>
				<ul className="techs__tags">
					<li className="techs__tag">HTML</li>
					<li className="techs__tag">CSS</li>
					<li className="techs__tag">JS</li>
					<li className="techs__tag">React</li>
					<li className="techs__tag">Git</li>
					<li className="techs__tag">Express.js</li>
					<li className="techs__tag">mongoDB</li>
				</ul>
			</section>		
		</>
  );
}

export default Techs;
