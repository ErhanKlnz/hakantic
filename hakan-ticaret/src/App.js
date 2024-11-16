import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import BrandSection from "./components/BrandSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import ProductPage from "./components/ProductPage"; // Ürün sayfası bileşeni
import PartsListPage from "./components/PartsListPage";
import PartDetailPage from "./components/PartDetailPage";
import About from "./components/About"; // Hakkımızda bileşeni

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GallerySection />
                <About /> {/* Hakkımızda bölümü */}
                <CarBrandSection />
                <BrandSection />
              </>
            }
          />
          <Route path="/parcalar" element={<PartsListPage />} />
          <Route path="/parcalar/:id" element={<PartDetailPage />} />
          <Route path="/GallerySection" element={<GallerySection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} /> {/* Yeni rota */}
        </Routes>
        <ContactSection />
        </div>
 {/* Sabit WhatsApp butonu */}
 <a
        href="https://wa.me/905444547444"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fixed"
      >
        <img src={require("./assets/whatsapp-icon.png")} alt="WhatsApp Icon" />
        Bizimle İletişime Geçin
      </a>
    </Router>
  );
}

export default App;
