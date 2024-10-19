import React from "react";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import BrandSection from "./components/BrandSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection"; // Galeri bölümü eklendi
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GallerySection /> {/* Mağaza resimleri bölümü */}
        <CarBrandSection />
        <BrandSection />
        <ContactSection /> {/* İletişim bölümü */}
      </main>
    </div>
  );
}

export default App;
