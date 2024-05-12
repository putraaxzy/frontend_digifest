import React from "react";
import "./DonationPage.scss";

const DonationPage = () => {
  return (
    <div className="donation-page">
      <h1>Donation Page</h1>
      <p>Silakan pilih program donasi yang ingin Anda dukung:</p>
      <div className="donation-options">
        {/* Daftar program donasi */}
        <div className="donation-option">
          <h2>Program A</h2>
          <p>Deskripsi Program A</p>
          <button>Donasi Sekarang</button>
        </div>
        <div className="donation-option">
          <h2>Program B</h2>
          <p>Deskripsi Program B</p>
          <button>Donasi Sekarang</button>
        </div>
        {/* Tambahkan program donasi lainnya sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default DonationPage;
