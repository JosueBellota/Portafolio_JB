import React, { useState } from 'react';
import './Header.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const linkStyle = {textDecoration: 'none'};
  const [headerOptionStyle, setHeaderOptionStyle] = useState({});
  const [Navscreen, setNavscreen] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});
  const [closeStyle, setCloseStyle] = useState({});
  
  function openMenu() {
    // set the display style of the mobile navigation menu to 'block'
    setHeaderOptionStyle({display: 'flex'});
    // set the visibility style of the menu button to 'hidden'
    setButtonStyle({visibility: 'hidden'});
    // set the visibility style of the close button to 'visible'
    setCloseStyle({visibility: 'visible'});

    setNavscreen({visibility: 'hidden'});
  }
  
  function closeMenu() {
    // set the display style of the mobile navigation menu to 'none'
    setHeaderOptionStyle({display: 'none'});
    // set the visibility style of the menu button to 'visible'
    setButtonStyle({visibility: 'visible'});
    // set the visibility style of the close button to 'hidden'
    setCloseStyle({visibility: 'hidden'});
    setNavscreen({visibility: 'visible'});
  }
  

  return (
    <div className="header">        
        
    <a className="header__logo" href="#"><img id="main-logo" src={logo} alt=""/></a>
    <div className='header__nav'></div>
    <div className='header__nav' style={Navscreen}>

      <div className='header__option'>
        <a href="/" className='header__link'>HOME</a>
      </div>

      <div className='header__option'>
        <a href="#about" className='header__link'>ABOUT</a>
      </div>

      <div className='header__option'>
        <a href="#projects" className='header__link'>PROJECTS</a>
      </div>

      {/* <div className='header__option'>
        <a href="#services_title" className='header__link'>SERVICES</a>
      </div> */}

      <div className='header__option'>
        <a href="#contacto" className='header__link'>CONTACT</a>
      </div>
      

    </div> 

    <div className='mobile__box'>


      <div className='header__nav__mobile' style={headerOptionStyle}>

        <div className='header__option'>
          {/* <Link to = "/"> */}
          <a href="/" className='header__link'>HOME</a>
          {/* </Link> */}
        </div>

        <div className='header__option'>
          <a href="#about" className='header__link'>ABOUT ME</a>
        </div>

        <div className='header__option'>
          <a href="#projects" className='header__link'>PROJECT</a>
        </div>

        <div className='header__option'>
          <a href="#services_title" className='header__link'>SERVICES</a>
        </div>

        <div className='header__option'>
          <a href="#contacto" className='header__link'>CONTACT</a>
        </div>

        <Button className='header__close' onClick={closeMenu} style={closeStyle} >
          <CloseIcon></CloseIcon>
        </Button>            
        
      </div> 

      <Button className='header__toggler' onClick={openMenu} style={buttonStyle}>
        <MenuIcon className='header__toggler_icon' />
      </Button>
      


    </div>
  
    </div>
 
    )
}

export default Header