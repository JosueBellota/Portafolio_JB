import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './css/projects.css';

import project2 from '../img/amazon-clone.jpg'
import project3 from '../img/blog-1.jpg'
import project4 from '../img/blog-2.jpg'
import project5 from '../img/blog-3.jpg'
import project11 from "../img/famms1.jpg"
import project12 from "../img/amazon1.0.jpg"
import project13 from "../img/linkedin-clone.jpg"
import project14 from "../img/proyectobiometria.png"
import project15 from "../img/huertosverticales.jpg"

function Projects() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const projects = [
    {
      title: "Proyecto de Biometría Ambiental Multiplataforma",
      description: (
        <>
          Sistema integral de monitoreo ambiental para la recolección y visualización de datos de calidad del aire en tiempo real. Incluye nodos sensores Arduino, transmisión BLE a una app Android, y un panel web administrativo con mapas de calor.
          <br /><br />
          <strong>Usuarios de prueba:</strong><br />
          Ciudadano: Correo: ffmusicff20@gmail.com / Contraseña: Testeo77<br />
          Admin: Correo: Endika / Contraseña: ematuteblanco@gmail.com
        </>
      ),
      stack: ["React", "Firebase", "Android", "Arduino", "IoT", "Java", "C++", "JavaScript", "Bootstrap"],
      image: project14,
      liveDemo: "https://proyectodebiometria.web.app",
      github: "https://github.com/JosueBellota/ProyectoDeBiometria"
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
      title: "Gestión de Huertos Verticales",
      description: (
        <>
          Plataforma web integral para la gestión y monitoreo inteligente de huertos verticales. Permite administrar cultivos, visualizar datos de sensores (humedad, pH, luz) en tiempo real y optimizar el cuidado mediante decisiones basadas en datos.
          <br /><br />
          <strong>Usuario de prueba:</strong><br />
          Correo: Test / Contraseña: Test7
        </>
      ),
      stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Chart.js"],
      image: project15,
      liveDemo: "https://jbelich.upv.edu.es/",
      github: "https://github.com/JosueBellota/GTI_Huertos_Verticales"
    },
    {
      title: "E-Commerce",
      description: "In this project, we will develop an e-commerce website for selling various products online. The website will allow customers to browse through a range of products, add them to their cart, and make secure online payments.",
      stack: ["React", "Tailwind CSS"],
      image: project11,
      liveDemo: "https://famms-fashion.web.app/",
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
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="particles-bg"
      />
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