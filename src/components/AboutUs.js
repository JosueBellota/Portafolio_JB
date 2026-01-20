import React from 'react';
import './css/aboutus.css';
import laptopabout from "../img/desktop.webp";
import JavascriptIcon from '@mui/icons-material/Javascript';
import AndroidIcon from '@mui/icons-material/Android';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import TerminalIcon from '@mui/icons-material/Terminal';


function AboutUs() {
    
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
                    As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer 
                    a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and 
                    optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in 
                    collaborating with cross-functional teams to produce outstanding web applications.
                </p> 
                <br/>
                <div className='skills'>
                    <p>Tech Stack</p>
                    <div className="logos">
                        <ul>
                            <li><HtmlIcon sx={{ fontSize: 40, color: "#E34F26" }} /></li>
                            <li><CssIcon sx={{ fontSize: 40, color: "#1572B6" }} /></li>
                            <li><JavascriptIcon sx={{ fontSize: 50, color: "black", backgroundColor: "#f7df1e", borderRadius: "50%" }} /></li>
                            <li><TerminalIcon sx={{ fontSize: 35, color: "#61DAFB" }} /></li>
                            <li><CodeIcon sx={{ fontSize: 35, color: "#4F5D95" }} /></li>
                            <li><AndroidIcon sx={{ fontSize: 35, color: "#3DDC84" }} /></li>
                            <li><StorageIcon sx={{ fontSize: 35, color: "#00758F" }} /></li>
                            <li><CloudIcon sx={{ fontSize: 35, color: "#FFCA28" }} /></li>
                            <li><MemoryIcon sx={{ fontSize: 35, color: "#00979D" }} /></li>
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