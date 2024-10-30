import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Hakan Ticaret Logo" className="logo" />
        <h1>HAKAN TİCARET</h1>
        <nav>
          <ul>
            <li><Link to="/">Anasayfa</Link></li> {/* Ana sayfaya Link */}
            <li><a href="#brands">Markalar</a></li> {/* Markalar bölümü */}
            <li><a href="#contact">İletişim</a></li> {/* İletişim bölümü */}
            <li><Link to="/parcalar">Parçalar</Link></li> {/* Parçalar sayfasına Link */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
