import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about"className="about-section">
      <div className="about-container">
        <h2 className="about-title">Hakkımızda</h2>
        <p className="about-description">
          Hakan Ticaret olarak 1990 yılından beri Hendek'te yedek parça sektöründe
          hizmet veriyoruz. Motor yağları, lastikler, aküler, silecekler, bakım ürünleri,
          mekanik ve motor parçalarının satışında müşterilerimize en kaliteli ürünleri sunmayı
          hedefliyoruz.
        </p>
        <p className="about-description">
          Sektörde yılların verdiği deneyim ve güvenle, araç bakımında ihtiyaç duyulan her
          türlü ürünü tek çatı altında bulabilirsiniz. Müşteri memnuniyeti ve kaliteli hizmet
          anlayışımızla sektörde güvenilir bir marka haline geldik.
        </p>
        <p className="about-description highlight">
          Bizimle çalışarak aracınızın ihtiyaçlarını en doğru şekilde karşılayabilirsiniz!
        </p>
      </div>
    </section>
  );
}

export default About;
