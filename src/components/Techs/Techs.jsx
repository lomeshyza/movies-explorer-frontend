import "./Techs.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";

function Techs({}) {
  return (
    <div className="landing__container">
      
        <LandingHeader LandingHeaderText={"Технологии"} />
        <div className="techs">
            <h2 className="techs__header">7 технологий</h2>
            <p className="techs__paragraph">
              На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__techs">
              <li className="techs__list">HTML</li>
              <li className="techs__list">CSS</li>
              <li className="techs__list">JS</li>
              <li className="techs__list">React</li>
              <li className="techs__list">Git</li>
              <li className="techs__list">Express.js</li>
              <li className="techs__list">mongoDB</li>
            </ul>
      </div>
    </div>
  );
}

export default Techs;
