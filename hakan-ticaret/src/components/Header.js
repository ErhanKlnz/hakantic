import React from "react";
import logo from "../assets/logo.png"; // Logoyu içe aktar

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Hakan Ticaret Logo" className="logo" /> {/* Logoyu büyüttük */}
        <h1>HAKAN TİCARET </h1> {/* Mobil resmi bayisi bilgisi eklendi */}
        <nav>
          <ul>
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#brands">Markalar</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
