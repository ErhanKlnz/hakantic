import React, { useRef } from "react"; // useRef'i React'ten içe aktardık
import renaultLogo from "../assets/renault.png";
import fiatLogo from "../assets/fiat.png";
import tofasLogo from "../assets/tofas.png";
import volkswagenLogo from "../assets/volkswagen.png";
import peugeotLogo from "../assets/peugeot.png";
import opelLogo from "../assets/opel.png";
import hyundaiLogo from "../assets/hyundai.png";
import kiaLogo from "../assets/kia.png";
import citroenLogo from "../assets/citroen.png";
import toyotaLogo from "../assets/toyota.png"; 
import skodaLogo from "../assets/skoda.png"; 
import ladaLogo from "../assets/lada.png"; 
import seatLogo from "../assets/seat.png"; 



function CarBrandSection() {
  const scrollContainerRef = useRef(null); // Kaydırılacak container'ı referans alıyoruz

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Sol kaydırma
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Sağ kaydırma
  };

  const brands = [
    { name: "Renault", img: renaultLogo },
    { name: "Fiat", img: fiatLogo },
    { name: "Tofaş", img: tofasLogo },
    { name: "Volkswagen", img: volkswagenLogo },
    { name: "Seat", img: seatLogo },
    { name: "Skdoa", img: skodaLogo },
    { name: "Lada", img: ladaLogo },
    { name: "Peugeot", img: peugeotLogo },
    { name: "Citroen", img: citroenLogo },
    { name: "Opel", img: opelLogo },
    { name: "Hyundai", img: hyundaiLogo },
    { name: "Kia", img: kiaLogo },
    { name: "Toyota", img: toyotaLogo }, // Toyota dosya adı düzeltildi
  ];

  return (
    <section id="car-brands" className="car-brands-section">
      <h2>Sattığımız Araba Markaları</h2>
      <div className="scroll-buttons">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#10094; {/* Sol ok simgesi */}
        </button>
        <div className="brand-container" ref={scrollContainerRef}>
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.img} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#10095; {/* Sağ ok simgesi */}
        </button>
      </div>
    </section>
  );
}

export default CarBrandSection;
