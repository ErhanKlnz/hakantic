import React from "react";
import "./ContactSection.css";
import mobilLogo from "../assets/mobil.png"; // Mobil1 logosunu import ediyoruz
import locationIcon from "../assets/location-icon.png"; // Konum simgesi
import phoneIcon from "../assets/phone-icon.png"; // Telefon simgesi

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>İletişim Bilgilerimiz</h2>
      <div className="contact-grid">
        
        {/* Adres ve Telefon Bilgisi */}
        <div className="contact-card">
          <h3>Adres & Telefon</h3>
          <p>
            <img src={locationIcon} alt="Location Icon" className="icon" />
            <strong>Adres:</strong> Küçük Sanayi Sitesi 3651. Sk. No:9/B, 54300 Hendek/Sakarya
          </p>
          <p>
            <img src={phoneIcon} alt="Phone Icon" className="icon" />
            <strong>Telefon:</strong> <a href="tel:+90264140554">0264 614 05 54</a>
          </p>
          <p><strong>Saatler:</strong></p>
          <ul>
            <li>Pazartesi: 09:00–19:00</li>
            <li>Salı: 09:00–19:00</li>
            <li>Çarşamba: 09:00–19:00</li>
            <li>Perşembe: 09:00–19:00</li>
            <li>Cuma: 09:00–19:00</li>
            <li>Cumartesi: 09:00–17:00</li>
            <li>Pazar: Kapalı</li>
          </ul>
        </div>

        {/* Google Maps */}
        <div className="contact-card">
          <h3>Konum</h3>
          <p>Mağazamızın konumunu görmek için Google Maps'i ziyaret edin:</p>
          <a
            href="https://maps.app.goo.gl/7cMRNscj6GEgitXh7"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-link"
          >
            Google Maps ile Bize Ulaşın
          </a>
        </div>

        {/* Mobil1 Bayisi */}
        <div className="contact-card mobil1-card">
          <img src={mobilLogo} alt="Mobil1 Logo" className="mobil-logo" />
          <h3>Mobil1 Bayisi</h3>
          <p>Mobil1 bayisi olduğumuzu görmek için Mobil1 resmi sitesini ziyaret edin:</p>
          <a
            href="https://www.mobiloil.com.tr/tr-tr/where-to-buy/sakarya-hakanticaretbehicekilnaz-0fec9d1e-f502-42d2-baeb-ccfcaed166c2"
            target="_blank"
            rel="noopener noreferrer"
            className="mobil1-link"
          >
            Mobil1 Bayisi Hakkında Daha Fazla Bilgi
          </a>
        </div>
      </div>

      {/* Sabit WhatsApp butonu */}
      <a
        href="https://wa.me/905444547444"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fixed"
      >
        <img src={require("../assets/whatsapp-icon.png")} alt="WhatsApp Icon" />
        Bizimle İletişime Geçin
      </a>
    </section>
  );
}

export default ContactSection;
