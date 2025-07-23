import React from 'react';
import './css/Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import user from '../img/test_background.jpg';
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
          <a href="https://www.linkedin.com/in/josue-bellota-b50476182" target="_blank" rel="noreferrer"><LinkedInIcon className="social__icon"></LinkedInIcon></a>
          <a href="https://github.com/JosueBellota" target="_blank" rel="noreferrer"><GitHubIcon className="social__icon" ></GitHubIcon></a>
          <a href="https://www.instagram.com/josue_bellota/" target="_blank" rel="noreferrer"><InstagramIcon className="social__icon" ></InstagramIcon></a>
        </ul>
      </div>
      
    </div>
  )
}

export default Home