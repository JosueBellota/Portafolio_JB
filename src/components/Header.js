import React, { useState } from 'react';
import './css/Header.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="header__logo" href="#">&lt;/&gt;</a>
      
      {/* Desktop Navigation */}
      <div className={`header__nav ${menuOpen ? 'hidden' : ''}`}>
        <div className='header__option'>
          <a href="/" className='header__link'>HOME</a>
        </div>
        <div className='header__option'>
          <a href="#about" className='header__link'>ABOUT</a>
        </div>
        <div className='header__option'>
          <a href="#projects" className='header__link'>PROJECTS</a>
        </div>
        <div className='header__option'>
          <a href="#contacto" className='header__link'>CONTACT</a>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='header__mobile-controls'>
        {!menuOpen ? (
          <Button className='header__toggler' onClick={toggleMenu}>
            <MenuIcon className='header__toggler_icon' />
          </Button>
        ) : (
          <Button className='header__close' onClick={closeMenu}>
            <CloseIcon className='header__closeIcon' />
          </Button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile__box ${menuOpen ? 'active' : ''}`}>
        <div className='header__nav__mobile'>
          <div className='header__option'>
            <a href="/" className='header__link' onClick={closeMenu}>HOME</a>
          </div>
          <div className='header__option'>
            <a href="#about" className='header__link' onClick={closeMenu}>ABOUT ME</a>
          </div>
          <div className='header__option'>
            <a href="#projects" className='header__link' onClick={closeMenu}>PROJECT</a>
          </div>
          <div className='header__option'>
            <a href="#contacto" className='header__link' onClick={closeMenu}>CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;