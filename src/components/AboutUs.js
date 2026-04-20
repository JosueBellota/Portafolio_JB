import React, { useContext } from 'react';
import './css/aboutus.css';
import laptopabout from "../img/desktop.webp";
import chatgpt from "../img/chatgpt.png";
import gemini from "../img/gemini.png";
import JavascriptIcon from '@mui/icons-material/Javascript';
import AndroidIcon from '@mui/icons-material/Android';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import TerminalIcon from '@mui/icons-material/Terminal';
import GamepadIcon from '@mui/icons-material/Gamepad';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MovieIcon from '@mui/icons-material/Movie';
import Tooltip from '@mui/material/Tooltip';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';


function AboutUs() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].about;
    
    return (      
        <div className="about" id='about'>
        <h2 className='h2-mobile'>{t.title}</h2>
        <div className="about-skills">

            <div className="about-info about-image">
                <img src={laptopabout} alt="" />
            </div>
            <div className="about-info">    
                <div className='about-text'>
                <p id="about-p">
                    {t.description}
                </p> 
                <br/>
                <div className='skills'>
                    <p>{t.techStack}</p>
                    <div className="logos">
                        <ul>
                            <Tooltip title="HTML5" arrow><li ><HtmlIcon sx={{ fontSize: 40, color: "#E34F26" }} /></li></Tooltip>
                            <Tooltip title="CSS3" arrow><li ><CssIcon sx={{ fontSize: 40, color: "#1572B6" }} /></li></Tooltip>
                            <Tooltip title="JavaScript" arrow><li ><JavascriptIcon sx={{ fontSize: 50, color: "black", backgroundColor: "#f7df1e", borderRadius: "50%" }} /></li></Tooltip>
                            <Tooltip title="React" arrow><li ><TerminalIcon sx={{ fontSize: 35, color: "#61DAFB" }} /></li></Tooltip>
                            <Tooltip title="PHP" arrow><li ><CodeIcon sx={{ fontSize: 35, color: "#4F5D95" }} /></li></Tooltip>
                            <Tooltip title="Android" arrow><li ><AndroidIcon sx={{ fontSize: 35, color: "#3DDC84" }} /></li></Tooltip>
                            <Tooltip title="SQL/Databases" arrow><li ><StorageIcon sx={{ fontSize: 35, color: "#00758F" }} /></li></Tooltip>
                            <Tooltip title="Firebase/Cloud Services" arrow><li ><CloudIcon sx={{ fontSize: 35, color: "#FFCA28" }} /></li></Tooltip>
                            <Tooltip title="Arduino/IoT" arrow><li ><MemoryIcon sx={{ fontSize: 35, color: "#00979D" }} /></li></Tooltip>
                            <Tooltip title="Unity/Game Development" arrow><li ><GamepadIcon sx={{ fontSize: 35, color: "#222" }} /></li></Tooltip>
                            <Tooltip title="C#/C++" arrow><li ><DataObjectIcon sx={{ fontSize: 35, color: "#68217A" }} /></li></Tooltip>
                            <Tooltip title="VFX Graph/Cinemachine" arrow><li ><MovieIcon sx={{ fontSize: 35, color: "#E91E63" }} /></li></Tooltip>
                            <Tooltip title="ChatGPT integration" arrow><li ><img src={chatgpt} alt="ChatGPT" style={{ width: '35px', height: '35px', objectFit: 'contain' }} /></li></Tooltip>
                            <Tooltip title="Gemini AI integration" arrow><li ><img src={gemini} alt="Gemini" style={{ width: '35px', height: '35px', objectFit: 'contain' }} /></li></Tooltip>
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