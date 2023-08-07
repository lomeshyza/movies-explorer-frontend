import "./AboutProject.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";

function AboutProject() {
  return (
    <section className="landing" id="about">
      <LandingHeader LandingHeaderText={"О проекте"} />
      <div className="about-project">
        <div className="about-project__column">
          <h3 className="about-project__text">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__text">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline-container">
          <div className="about-project__fill_short about-project__timeline-text">
            1 неделя
          </div>
          <p className="about-project__undertext_short about-project__timeline-text">Back-end</p>
          <div className="about-project__fill_long about-project__timeline-text">4 недели
         </div>
          <p className="about-project__undertext_long about-project__timeline-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
