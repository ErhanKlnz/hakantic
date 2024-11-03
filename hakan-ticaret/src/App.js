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
                <CarBrandSection />
                <BrandSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/parcalar" element={<PartsListPage />} />
          <Route path="/parcalar/:id" element={<PartDetailPage />} />
        <Route path="/product" element={<ProductPage />} /> {/* Yeni rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
