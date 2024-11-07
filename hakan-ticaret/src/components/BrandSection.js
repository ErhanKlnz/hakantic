import React, { useRef } from "react";
import wurthLogo from "../assets/wurth.png";
import boschLogo from "../assets/bosch.png";
import filtronLogo from "../assets/filtron.png";
import photonLogo from "../assets/photon.png";
import goodyearLogo from "../assets/goodyear.png";
import valeoLogo from "../assets/valeo.png";
import inaLogo from "../assets/ina.png";
import skfLogo from "../assets/skf.png";
import oparLogo from "../assets/opar.png";
import petlasLogo from "../assets/petlas.png";
import mobilLogo from "../assets/mobil.png";
import seleniaLogo from "../assets/selenia.png";
import rbwLogo from "../assets/rbw.jpg";
import mgaLogo from "../assets/mga.png";


function BrandSection() {
  const scrollContainerRef = useRef(null); // Kaydırılacak container'ı referans alıyoruz

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Sol kaydırma
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Sağ kaydırma
  };

  const brands = [
    { name: "Mobil 1 Motor Yağı - Bayisi", img: mobilLogo },
    { name: "Selenia Motor Yağı", img: seleniaLogo },
    { name: "Würth", img: wurthLogo },
    { name: "Bosch", img: boschLogo },
    { name: "Filtron Filtre", img: filtronLogo },
    { name: "Photon Led", img: photonLogo },
    { name: "MGA Balata", img: mgaLogo },
    { name: "Goodyear Antifiriz ", img: goodyearLogo },
    { name: "Valeo", img: valeoLogo },
    { name: "INA", img: inaLogo },
    { name: "SKF", img: skfLogo },
    { name: "Opar", img: oparLogo },
    { name: "Petlas Lastik", img: petlasLogo },
    { name: "RBW Silecek", img: rbwLogo },
  ];

  return (
    <section id="brands" className="brands-section">
      <h2>Satışını Yaptığımız Bazı Markalar</h2>
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

export default BrandSection;