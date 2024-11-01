import React from 'react';
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import user from '../img/transparent2.png';
import Particle from './Particle';
// import logotest from "../img/logo.png";

function Home() {
  return (
    <div>
      <Particle/>

      <div className="container"  id='home'>
          <div className="user-box">
              <img src={user} alt="" className='user_profile'/>
              <h1>Josue Bellota</h1>
              <p>Front End Developer</p>
          </div>
      </div> 
      
      <div class="skew-abajo" id="service1"></div>

    
      <div class="social-icons">
        <ul>
          <a href="https://www.linkedin.com/in/josue-bellota-b50476182" target="_blank"><LinkedInIcon className="social__icon"></LinkedInIcon></a>
          <a href="https://github.com/Jhosua1769?tab=projects" target="_blank"><GitHubIcon className="social__icon"></GitHubIcon></a>
          <a href="https://www.instagram.com/mr_eichen/?hl=en" target="_blank"><InstagramIcon className="social__icon"></InstagramIcon></a>
        </ul>
      </div>
    </div>
  )
}

export default Home