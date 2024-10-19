import React from "react";
import Header from "./components/Header";
import CarBrandSection from "./components/CarBrandSection";
import ContactSection from "./components/ContactSection";
import "./App.css"; // Stil dosyaları

function App() {
  return (
    <div className="App">
      <Header />
      <CarBrandSection />
      <ContactSection />
    </div>
  );
}

export default App;
