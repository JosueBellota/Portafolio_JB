import React from 'react';
import './css/aboutus.css';
import laptopabout from "../img/desktop.webp";
import logotest from "../img/icons/html5.svg";
import logotest2 from "../img/icons/css3.svg";
import logotest3 from "../img/icons/js.png";
import logotest4 from "../img/icons/react.svg";
import logotest5 from "../img/icons/php.png";


function AboutUs() {

    const aboutus = 'about-us';
    
    
    return (      
        <div className="about" id='about'>
        <h2 className='h2-mobile'>ABOUT ME</h2>
        <div className="about-skills">

            <div className="about-info about-image">
                <img src={laptopabout} alt="" />
            </div>
            <div className="about-info">    
                <div className='about-text'>
                <p id="about-p">
                    As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, 
                    React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer 
                    a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and 
                    optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in 
                    collaborating with cross-functional teams to produce outstanding web applications.
                </p> 
                <br/>
                <div className='skills'>
                    <p>Tech Stack</p>
                    <div className="logos">
                        <ul>
                         <li><img src={logotest} alt="" /></li>
                            <li><img src={logotest2} alt="" /></li>
                            <li><img src={logotest3} alt="" /></li>
                            <li><img src={logotest4} alt="" /></li>
                            <li><img src={logotest5} alt="" /></li>
                            {/* <li><img src={logotest} alt="" /></li> */}
                        </ul>
                    </div>
                </div>
                </div>
            </div>       
            
        </div> 
                
    </div>
        
    )
}

export default AboutUs