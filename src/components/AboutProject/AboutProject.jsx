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
      <div className="timeline">
          <div className="timeline__fill_short timeline__text">
            1 неделя
          </div>
          <p className="timeline__undertext_short timeline__text">Back-end</p>
          <div className="timeline__fill_long timeline__text">
            4 недели
         </div>
          <p className="timeline__undertext_long timeline__text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
