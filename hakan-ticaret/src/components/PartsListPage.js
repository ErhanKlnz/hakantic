import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import partsData from "../data/partsData"; // Parça verisini içe aktarıyoruz
import "./PartsListPage.css";

function PartsListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredParts = partsData.filter(
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
              <p><strong>Açıklama:</strong>{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsListPage;
