import React from "react";
import { useParams } from "react-router-dom";
import "./PartDetailPage.css";

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
];

function PartDetailPage() {
  const { id } = useParams();
  const part = mockPartsData.find((p) => p.id === parseInt(id));

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