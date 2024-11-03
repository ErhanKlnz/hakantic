import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartsListPage.css";

const mockPartsData = [
  { id: 1, name: "Ön Fren Balatası", partNumber: "12345XYZ", price: "250.00" },
  { id: 2, name: "Yağ Filtresi", partNumber: "67890ABC", price: "50.00" },
  { id: 3, name: "Hava Filtresi", partNumber: "34567LMN", price: "30.00" },
  // Eklemek istediğiniz parçalar burada olacak
];

function PartsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Arama işlemi
  const filteredParts = mockPartsData.filter(
    (part) =>
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePartClick = (id) => {
    navigate(`/parcalar/${id}`); // Parça detay sayfasına yönlendirme
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
          <div
            key={part.id}
            className="part-item"
            onClick={() => handlePartClick(part.id)}
          >
            <h2>{part.name}</h2>
            <p>Parça Numarası: {part.partNumber}</p>
            <p>Fiyat: {part.price} TL</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsListPage;
