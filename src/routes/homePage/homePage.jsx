import SearchBar from "../../components/searchBar/SearchBar";
import DonationPage from "../../donasi/DonationPage";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h4 className="title">
            Temukan Pilihan Terbaik, Jelajahi Pondok Pesantren Bersama Kami!
          </h4>
          <p>
            <h3 className="web">carisantri.id</h3>
            Website yang menyediakan informasi terperinci dan <br />
            terverifikasi tentang pondok pesantren di <b>Indonesia!</b>
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>8</h1>
              <h2>Pondok Terdaftar</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Pengunjung</h2>
            </div>
            <div className="box">
              <h1>7</h1>
              <h2>Mitra</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/tes.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
