import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="header">
  <div className="header-content">
    <img src={logo} alt="Hakan Ticaret Logo" className="logo" />
    <h1 className="header-title">HAKAN TİCARET</h1>
    
    {/* Hamburger ikonu (Mobil) */}
    <div className="menu-icon" onClick={toggleMenu}>
      ☰
    </div>

    {/* Menü öğeleri */}
    <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Anasayfa</Link></li>
        <li><a href="#brands" onClick={toggleMenu}>Markalar</a></li>
        <li><Link to="/parcalar" onClick={toggleMenu}>Parçalar</Link></li>
        <li><a href="#contact" onClick={toggleMenu}>İletişim</a></li>

      </ul>
    </nav>
  </div>
</header>

  );
}

export default Header;
