import React, { useRef, useState, useEffect } from "react";
import "./GallerySection.css";

function GallerySection() {
  const scrollContainerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(300); // Varsayılan kaydırma mesafesi

  const images = [
    require("../assets/shop1.jpeg"),
    require("../assets/shop2.jpeg"),
    require("../assets/shop.jpg"),
    require("../assets/boschak.jpg"),
  ];

  // Mobil cihazlarda kaydırma mesafesini bir resim genişliğine göre ayarla
  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setScrollAmount(400); // Mobil için tam genişlik kaydırma
      } else {
        setScrollAmount(300); // Masaüstü için daha kısa kaydırma
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Mağaza Resimleri</h2>
      <div className="scroll-buttons">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="gallery-container" ref={scrollContainerRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Mağaza ${index + 1}`}
              onClick={() => openModal(index)}
              className="gallery-image"
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <button className="modal-nav-button left" onClick={showPreviousImage}>
              &#10094;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Mağaza ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-nav-button right" onClick={showNextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
