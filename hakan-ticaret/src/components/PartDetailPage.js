import React from "react";
import { useParams } from "react-router-dom";
import "./PartDetailPage.css";

const mockPartsData = [
  { id: 1, name: "Ön Fren Balatası", partNumber: "12345XYZ", price: "250.00", description: "Yüksek performanslı fren balatası" },
  { id: 2, name: "Yağ Filtresi", partNumber: "67890ABC", price: "50.00", description: "Motorunuzu koruyan yüksek kaliteli yağ filtresi" },
  { id: 3, name: "Hava Filtresi", partNumber: "34567LMN", price: "30.00", description: "Temiz hava sağlar, motor verimini artırır" },
];

function PartDetailPage() {
  const { id } = useParams();
  const part = mockPartsData.find((p) => p.id === parseInt(id));

  if (!part) {
    return <p>Parça bulunamadı.</p>;
  }

  return (
    <div className="part-detail-page">
      <h1>{part.name}</h1>
      <p><strong>Parça Numarası:</strong> {part.partNumber}</p>
      <p><strong>Fiyat:</strong> {part.price} TL</p>
      <p><strong>Açıklama:</strong> {part.description}</p>
    </div>
  );
}

export default PartDetailPage;
