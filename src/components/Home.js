import React from 'react';
import './css/Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import user from '../img/test_background.jpg';

function Home() {
  return (
    <div className="home-container">
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