import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img/portfolio1.jpg";
import IMG2 from "../../assets/img/portfolio2.jpg";
import IMG3 from "../../assets/img/portfolio3.jpg";
import IMG4 from "../../assets/img/portfolio4.jpg";
import IMG5 from "../../assets/img/portfolio5.png";
import IMG6 from "../../assets/img/portfolio6.jpg";

// Do not use the images in production

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Street Food Website",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17945750--Exploration-Street-Food-Website-Detail-Page",
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Real Estate Property",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17852472-Real-Estate-Property-Detail",
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Online Doctors Booking",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17944024-Online-Doctors-Booking",
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: "Stratalis Project illustrations",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17677006-Stratalis-Project-illustrations",
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: "E-Learning Center",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17936701-Nyinauni-E-Learning-Hero-Section",
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: "SAAS Website",
//     github: "https://github.com/cycscarlos",
//     demo: "https://dribbble.com/shots/17944161-SAAS-Website",
//   },
// ];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Recent Work</h2>

      <div className="container portfolio__container">
        {/* {data.map((id, image, title, github, demo) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })} */}

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/cycscarlos"
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_Pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
