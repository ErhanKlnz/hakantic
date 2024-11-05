import React, { useRef } from "react";
import "./GallerySection.css"; // Stil dosyasını içe aktar

function GallerySection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Sol kaydırma
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Sağ kaydırma
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Mağaza Resimleri</h2>
      <div className="scroll-buttons">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094; {/* Sol ok simgesi */}
        </button>
        <div className="gallery-container" ref={scrollContainerRef}>
          <img src={require("../assets/shop1.jpeg")} alt="Mağaza 1" />
          <img src={require("../assets/shop2.jpeg")} alt="Mağaza 2" />
          <img src={require("../assets/shop.jpg")} alt="Mağaza 3" />
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#10095; {/* Sağ ok simgesi */}
        </button>
      </div>
    </section>
  );
}

export default GallerySection;