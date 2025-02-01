import React from 'react';
import HamMenu from './HamMenu';
import InfoTags from './InfoTags';
import logo from './logo.png';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <HamMenu />
      <div className="container">
        <InfoTags number={3} description="New" color="#e34a4a" />
        <InfoTags number={5} description="Process" color="#F3BF45" />
        <InfoTags number={10} description="Ready" color="#61BB34" />
        <InfoTags number={2} description="Served" color="#4C3B4D" />
        
        <h1>Register 1</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;