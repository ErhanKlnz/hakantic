import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartsListPage.css";
import mgaLogo from "../assets/mga.png"; // Mobil1 logosunu import ediyoruz

const mockPartsData = [
  {
    id: 1,
    name: "Ön ve Arka Fren Balatası",
    partNumber: "12345XYZ",
    price: "Bilgi İçin Arayınız",
    description: "Firmamız, MGA, Zegen ve diğer önde gelen balata markalarının satışını gerçekleştirmektedir.",
    image: mgaLogo // Bu kısmı düzelttik
  },
  
  {
    id: 2,
    name: "Yağ Filtresi",
    partNumber: "67890ABC",
    price: "Bilgi İçin Arayınız",
    image: "/images/yag-filtresi.jpg"
  },
  {
    id: 3,
    name: "Hava Filtresi",
    partNumber: "34567LMN",
    price: "Bilgi İçin Arayınız",
    image: "/images/hava-filtresi.jpg"
  },
  {
    id: 4,
    name: "Amortisörler",
    partNumber: "34567LMN",
    price: "Amortisörler hakkında detaylı bilgi için lütfen bizimle iletişime geçiniz.",
    image: "/images/amortisor.jpg"
  }
  // Diğer parçalar burada
];
function PartsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredParts = mockPartsData.filter(
    (part) =>
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePartClick = (id) => {
    navigate(`/parcalar/${id}`);
  };

  return (
    <div className="parts-list-page">
      <h1>Parça Listesi</h1>
      <input
        type="text"
        placeholder="Parça numarası veya ismine göre ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="parts-list">
        {filteredParts.map((part) => (
          <div key={part.id} className="part-item" onClick={() => handlePartClick(part.id)}>
            <img src={part.image} alt={part.name} className="part-image" />
            <div className="part-details">
              <h2>{part.name}</h2>
              <p><strong>Parça Numarası:</strong> {part.partNumber}</p>
              <p><strong>Fiyat:</strong> {part.price}</p>
              <p>{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsListPage;

