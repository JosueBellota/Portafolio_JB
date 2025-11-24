import React from 'react';
import './css/projects.css';

import project2 from '../img/amazon-clone.jpg'
import project3 from '../img/blog-1.jpg'
import project4 from '../img/blog-2.jpg'
import project5 from '../img/blog-3.jpg'
import project11 from "../img/famms1.jpg"
import project12 from "../img/amazon1.0.jpg"
import project13 from "../img/linkedin-clone.jpg"

function Projects() {
  const projects = [
    {
      title: "E-Commerce",
      description: "In this project, we will develop an e-commerce website for selling various products online. The website will allow customers to browse through a range of products, add them to their cart, and make secure online payments.",
      stack: ["React", "Tailwind CSS"],
      image: project11,
      liveDemo: "https://famms-fashion.web.app/",
      github: "https://github.com"
    },
    {
      title: "Amazon-Clone",
      description: "The Amazon-Clone project is a website development project that aims to create an e-commerce platform similar to Amazon. The website will allow customers to browse and buy a variety of products online.",
      stack: ["React", "CSS"],
      image: project12,
      liveDemo: "https://ecommerce-f4b53.web.app/",
      github: "https://github.com"
    },
    {
      title: "Linkedin Clone",
      description: "The Amazon-Clone project is a website development project that aims to create an e-commerce platform similar to Amazon. The website will allow customers to browse and buy a variety of products online.",
      stack: ["React", "CSS"],
      image: project13,
      liveDemo: "https://linkedin-4a9f2.web.app/",
      github: "https://github.com"
    },
    {
      title: "Amazon-Clone",
      description: "",
      stack: [],
      image: project2,
      liveDemo: "https://ecommerce-f4b53.web.app/",
      github: "https://github.com"
    },
    {
      title: "Blog",
      description: "",
      stack: [],
      image: project5,
      liveDemo: "https://blog-3-8fa22.web.app/",
      github: "https://github.com"
    },
    {
      title: "Blog",
      description: "",
      stack: [],
      image: project4,
      liveDemo: "https://blog-2-aa8dd.web.app/",
      github: "https://github.com"
    },
    {
      title: "Website",
      description: "",
      stack: [],
      image: project3,
      liveDemo: "https://blog-1-40308.web.app/",
      github: "https://github.com"
    }
  ];

  return (
    <section className="our-projects">
      <div className="container-project">
        <div className="project-title">
          <h2 id="projects">PROJECTS</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__stack">
                  {project.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 