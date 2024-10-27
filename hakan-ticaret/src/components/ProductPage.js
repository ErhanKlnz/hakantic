import React from "react";
import "./ProductPage.css";
import sampleImage from "../assets/sample-part.jpg"; // Örnek parça fotoğrafı

function ProductPage() {
  const product = {
    name: "Ön Fren Balatası",
    partNumber: "12345XYZ",
    oemNumber: "OEM-67890",
    price: "250.00",
    compatibleCars: ["Renault Clio", "Fiat Egea", "Volkswagen Polo", "Hyundai i20"],
    description: "Yüksek performanslı ön fren balatası. Sağlam yapısı ile uzun ömürlüdür ve güvenli bir sürüş sağlar.",
    inStock: true,
  };

  return (
    <section className="product-page">
      {/* Ürün Görseli */}
      <div className="product-image-container">
        <img src={sampleImage} alt={product.name} className="product-image" />
      </div>

      {/* Ürün Bilgileri */}
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p><strong>Parça Numarası:</strong> {product.partNumber}</p>
        <p><strong>OEM Numarası:</strong> {product.oemNumber}</p>
        <p className="product-price"><strong>Fiyat:</strong> {product.price} TL</p>

        {/* Uyumlu Araçlar */}
        <div className="compatible-cars">
          <h3>Uyumlu Araçlar</h3>
          <ul>
            {product.compatibleCars.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>

        {/* Ürün Açıklaması */}
        <div className="product-description">
          <h3>Ürün Açıklaması</h3>
          <p>{product.description}</p>
        </div>

        {/* Stok Bilgisi ve Satın Alma Butonları */}
        {product.inStock ? (
          <button className="add-to-cart-btn">Sepete Ekle</button>
        ) : (
          <p className="out-of-stock">Stokta Yok</p>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
