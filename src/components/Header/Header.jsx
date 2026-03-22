import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img src="https://res.cloudinary.com/dbzuqtojr/image/upload/v1772511305/avatar-user/avttexxt_dnwmtq.png" alt="Avatar" />
        </NavLink>
      </div>

      <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="hamburger"></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Giới thiệu</NavLink>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Dự án</NavLink>
        <NavLink to="/blog" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
        <NavLink to="/support" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Dịch vụ</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Liên hệ</NavLink>
      </div>
    </nav>
  );
};

export default Header;
