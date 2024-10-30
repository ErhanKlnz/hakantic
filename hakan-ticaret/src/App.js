import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import BrandSection from "./components/BrandSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection"; // Galeri bölümü eklendi
import ProductPage from "./components/ProductPage"; // Ürün sayfası bileşeni
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Yönlendirmeler */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GallerySection   />
                <CarBrandSection />
                <BrandSection   />
                <ContactSection />
              </>
            }
          />
          <Route path="/parcalar" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
