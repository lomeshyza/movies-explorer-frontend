import "./AboutProject.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";


function AboutProject() {
  return (
    <section className="landing__container" id='about' >
      
        <LandingHeader LandingHeaderText={"О проекте"}/>
        <div className="about-project__container" >
          <div className="about-project__column">
            <h2 className="about-project__text">
              Дипломный проект включал 5 этапов
            </h2>
            <p className="about-project__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
           </div>
           <div className="about-project__column">
            <h2 className="about-project__text">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="about-project__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
            </div>
           <div className="about-project__column">
            <button className="about-project__button about-project__button-active">1 неделя</button>
            <p className="about-project__undertext">Back-end</p>
          </div>
           <div className="about-project__column">
            <button className="about-project__button">4 недели</button>
            <p className="about-project__undertext">Front-end</p>
          </div>
        
      </div>
    </section>
  );
}

export default AboutProject;
