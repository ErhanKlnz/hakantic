import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import ContactSection from "./components/ContactSection";
import ProductPage from "./components/ProductPage"; // Ürün sayfası bileşeni
import "./App.css"; // Stil dosyaları

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Menü bağlantıları */}
        <nav className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/parcalar">Parçalar</Link>
        </nav>

        {/* Sayfa yönlendirmeleri */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarBrandSection />
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
