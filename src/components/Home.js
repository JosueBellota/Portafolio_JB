import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './css/Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import user from '../img/test_background.jpg';

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className="home-container">
      <Particles
        id="tsparticles"
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
      <div className='home-profile'>
        <div className="hero-image">
            <img src={user} alt="Josue Bellota" />
        </div>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Josue Bellota</h1>
            <p>Front End Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/josue-bellota-b50476182" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='icon-profile'/>
              </a>
              <a href="https://github.com/JosueBellota" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className='icon-profile'/>
              </a>
              <a href="https://www.instagram.com/josue_bellota/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className='icon-profile'/>
              </a>
            </div>
          </div>
      </div>
      
        
      </div>
    </div>
  );
}

export default Home