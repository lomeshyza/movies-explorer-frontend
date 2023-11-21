import "./AboutMe.css";
import portfolioPic from "../../images/IMG_4794.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    
      <section className="about">
        <div className="about__column">
          <h3 className="about__name">Надежда</h3>
          <h4 className="about__job">Web-разработчик,</h4>
          <p className="about__paragraph">
          как-то мне предложили заняться интернет-магазином на платформе WordPress, 
          сейчас он неплохо работает, но там постоянно не хватает определенных функций, 
          поэтому я решила изучить настоящую веб-разработку и сделать сайт самой. 
          В данный момент активно изучаю материалы, видеолекции по frontend разработке, 
          применяю полученные знания в своем пет-проекте.
          </p>
          <Link
            to="https://github.com/lomeshyza?tab=repositories"
            target="_blank"
            className="about__git link"
          >
            Github
          </Link>
        </div>
        <img
          className="about__picture"
          src={portfolioPic}
          alt="Портрет студента"
        ></img>
      </section>

  );
}
export default AboutMe;
