import React, { useState, useContext } from 'react';
import './css/Header.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language].header;

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
      
      <div className="header__right">
        {/* Desktop Navigation */}
        <div className={`header__nav ${menuOpen ? 'hidden' : ''}`}>
          <div className='header__option'>
            <a href="/" className='header__link'>{t.home}</a>
          </div>
          <div className='header__option'>
            <a href="#about" className='header__link'>{t.about}</a>
          </div>
          <div className='header__option'>
            <a href="#projects" className='header__link'>{t.projects}</a>
          </div>
          <div className='header__option'>
            <a href="#contacto" className='header__link'>{t.contact}</a>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="header__lang">
          <span onClick={() => changeLanguage('es')} style={{ fontWeight: language === 'es' ? 'bold' : 'normal', opacity: language === 'es' ? 1 : 0.7 }}>ES</span> | <span onClick={() => changeLanguage('en')} style={{ fontWeight: language === 'en' ? 'bold' : 'normal', opacity: language === 'en' ? 1 : 0.7 }}>EN</span>
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
            <a href="/" className='header__link' onClick={closeMenu}>{t.home}</a>
          </div>
          <div className='header__option'>
            <a href="#about" className='header__link' onClick={closeMenu}>{t.about}</a>
          </div>
          <div className='header__option'>
            <a href="#projects" className='header__link' onClick={closeMenu}>{t.projects}</a>
          </div>
          <div className='header__option'>
            <a href="#contacto" className='header__link' onClick={closeMenu}>{t.contact}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;