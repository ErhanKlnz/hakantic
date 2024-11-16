import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Link'i kaldırdık
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Sayfa yönlendirme aracı

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sayfa içi navigasyon için
  const handleScrollToSection = (hash) => {
    navigate("/"); // Önce anasayfaya yönlendir
    setIsMenuOpen(false); // Menü kapatılır
    setTimeout(() => {
      // Scroll işlemini biraz gecikmeyle yap
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Anasayfa
              </NavLink>
            </li>
            <li>
              {/* Hash navigation */}
              <button
                onClick={() => handleScrollToSection("#about")}
                className="link-button"
              >
                Hakkımızda
              </button>
            </li>
            <li>
              {/* Hash navigation */}
              <button
                onClick={() => handleScrollToSection("#brands")}
                className="link-button"
              >
                Markalar
              </button>
            </li>
            <li>
              <NavLink
                to="/parcalar"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Parçalar
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("#contact")}
                className="link-button"
              >
                İletişim
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
