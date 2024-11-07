import React from "react";
import { useParams } from "react-router-dom";
import partsData from "../data/partsData"; // Parça verisini içe aktarıyoruz
import "./PartDetailPage.css";

function PartDetailPage() {
  const { id } = useParams();
  const part = partsData.find((p) => p.id === parseInt(id));

  if (!part) {
    return <p>Parça bulunamadı.</p>;
  }

  return (
    <div className="part-detail-page">
      <div className="part-detail-content">
        <img src={part.image} alt={part.name} className="part-detail-image" />
        <div className="part-detail-info">
          <h1>{part.name}</h1>
          <p><strong>Parça Numarası:</strong> {part.partNumber}</p>
          <p><strong>Fiyat:</strong> {part.price}</p>
          <p><strong>Açıklama:</strong> {part.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PartDetailPage;
