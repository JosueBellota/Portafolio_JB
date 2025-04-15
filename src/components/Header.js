import React, { useState } from 'react';
import './css/Header.css';
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
  const [menuOpen, setMenuOpen] = useState(false);

  
  function openMenu() {
   

    setHeaderOptionStyle({display: 'flex'});
    setButtonStyle({visibility: 'hidden'});
    setCloseStyle({visibility: 'visible'});
    setNavscreen({visibility: 'hidden'});
    setMenuOpen(true);

  }
  
  function closeMenu() {

    setHeaderOptionStyle({display: 'none'});
    setButtonStyle({visibility: 'visible'});
    setCloseStyle({visibility: 'hidden'});
    setNavscreen({visibility: 'visible'});
    setMenuOpen(false);

  }
  

  return (
    <div className="header">        
        
    <a className="header__logo" href="#">&lt;/&gt;</a>
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

    <Button className='header__toggler' onClick={openMenu} style={buttonStyle}>
        <MenuIcon className='header__toggler_icon' />
    </Button>

    <Button className='header__close' onClick={closeMenu} style={{ display: menuOpen ? 'block' : 'none' }} >
        <CloseIcon className='header__closeIcon'></CloseIcon>
    </Button>   

    <div className='mobile__box'>

      <div className='header__nav__mobile' style={headerOptionStyle}>

        <div className='header__option'>
          {/* <Link to = "/"> */}
          <a href="/" className='header__link' onClick={closeMenu}>HOME</a>
          {/* </Link> */}
        </div>

        <div className='header__option'>
          <a href="#about" className='header__link' onClick={closeMenu}>ABOUT ME</a>
        </div>

        <div className='header__option'>
          <a href="#projects" className='header__link' onClick={closeMenu}>PROJECT</a>
        </div>

        {/* <div className='header__option'>
          <a href="#services_title" className='header__link' onClick={closeMenu}>SERVICES</a>
        </div> */}

        <div className='header__option'>
          <a href="#contacto" className='header__link' onClick={closeMenu}>CONTACT</a>
        </div>
        
      </div> 

      

    </div>
  
    </div>
 
    )
}

export default Header