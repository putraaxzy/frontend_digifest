import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Pesan</h1>
        <div className="message">
          <img
            src="https://darunnajah.com/wp-content/uploads/2019/10/Santri-Darunnajah-1024x817.jpg"
            alt=""
          />
          <span>Ahmad Fikri</span>
          <p>Baiklah Terimakasih!</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_xyMUZFzlho3s9glaN49pri1K8IL6jJss5D9TrV6Lg&s"
            alt=""
          />
          <span>Darmono</span>
          <p>Fasilitas Kami terjamin!</p>
        </div>
        <div className="message">
          <img
            src="https://kliknusantara.com/asset/foto_berita/IMG_20230226_222000.jpg"
            alt=""
          />
          <span>Kiai Aqil Siradj</span>
          <p>Insyaallah anak akan terdidik..</p>
        </div>
        <div className="message">
          <img
            src="https://transrakyat.com/wp-content/uploads/2022/05/IMG-20220511-WA0033.jpg"
            alt=""
          />
          <span>Supriyanto</span>
          <p>Anak pasti akan betah disini</p>
        </div>
        <div className="message">
          <img
            src="https://pesantrenkulni.sch.id/media_library/images/647078b974635c091671d30349d49ec7.jpg"
            alt=""
          />
          <span>Sartono</span>
          <p>Belajar dan Mengaji di jamin seimbang</p>
        </div>
        <div className="message">
          <img
            src="https://sma-binainsani.sch.id/media_library/images/559c739946c73c984b9b4ab1379de9ce.png"
            alt=""
          />
          <span>Triyono</span>
          <p>Tentu saja bisa!</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://bunyanun-marshush.com/wp-content/uploads/2021/03/1-mudir-pesntren.png"
                alt=""
              />
              Sentot Nur Rahman
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Bagaimana pendapat bapak?</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage own">
              <p>Apakah orang tua dapat menjenguk anak?</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage">
              <p>Tentu saja! kami tidak ingin menjadi penyekat</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage own">
              <p>Baiklah pak untuk registrasi bagaimana?</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage">
              <p>Bisa hubungi admin kami ya pak!</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage own">
              <p>Baik pak, untuk pengurusan dokumen berapa lama?</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage">
              <p>Untuk itu relatif pak tapi akan kami usahakan secepatnya!</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage own">
              <p>Baik pak</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage">
              <p>Baik bapak untuk dokumen akan kami urus besok ya</p>
              <span>1 jam yang lalu</span>
            </div>
            <div className="chatMessage own">
              <p>Baik pak saya tunggu</p>
              <span>1 jam yang lalu</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
