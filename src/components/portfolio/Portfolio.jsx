import "./portfolio.css";

import IMG1 from "../../assets/Education-website.png";
import IMG2 from "../../assets/Shopify-store.png";
import IMG3 from "../../assets/New-paper.png";
import IMG4 from "../../assets/Blog-page.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      // link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/M-khan637/mk-tech-learning-hub.git",
    },
    {
      id: 3,
      title: "Blog Page",
      img: IMG4,
      description:
        "A responsive blog page designed to showcase articles and content through a clean, modern, and user-friendly interface.",
      technologies: "HTML | CSS | JavaScript | JSON",
      // link: "https://fh-huquq-com.vercel.app/",
      github: "https://github.com/MuhammadKhanDeveloper",
    },
    {
      id: 2,
      title: "Shopify Store",
      img: IMG2,
      description: "A Shopify store for selling chocolates, featuring a clean and user-friendly interface with product listings, shopping cart functionality, and a smooth online shopping experience.",
      technologies: "HTML | CSS | JavaScript|JSOn",
      // link: "https://fs-code-task-two.vercel.app/",
        github: "https://github.com/MuhammadKhanDeveloper",
    },
    {
      id: 4,
      title: "Eesar Time News",
      img: IMG3,
      description:
        "A news website for Eesar Times, designed to deliver the latest news and updates through a clean, responsive, and user-friendly interface.",
      technologies: "Html | CSS | JavaScript | Next Js",
      // link: "https://alpha-agency-project.vercel.app/",
       github: "https://github.com/MuhammadKhanDeveloper",
    },
  
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
