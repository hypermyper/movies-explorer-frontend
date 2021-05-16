import React from "react";
import "./AboutProject.css";

function AboutProject() {

	return (
    <>
      <section className="about-project" id="aboutProject">
        <h3 className="about-project__title">О проекте</h3>
        <div className="about-project__steps">
          <div>
            <h4 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h4>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h4 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h4>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div>
          <div className="about-project__progress_line">
            <div className="about-project__progress_week about-project__week_dark">1 неделя</div>
            <div className="about-project__progress_week">4 недели</div>
          </div>
          <div className="about-project__progress_line">          
            <div className="about-project__progress_tech">Back-end</div>
            <div className="about-project__progress_tech">Front-end</div>
          </div>
        </div>
      </section>
    </>
    );
  }
  
export default AboutProject;
