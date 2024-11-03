import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import BrandSection from "./components/BrandSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import ProductPage from "./components/ProductPage";
import PartsListPage from "./components/PartsListPage"; // Parçalar listeleme sayfası
import PartDetailPage from "./components/PartDetailPage"; // Parça detay sayfası
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
                <GallerySection />
                <CarBrandSection />
                <BrandSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/parcalar" element={<PartsListPage />} /> {/* Parça listeleme */}
          <Route path="/parcalar/:id" element={<PartDetailPage />} /> {/* Parça detay */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
