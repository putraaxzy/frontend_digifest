import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informasi Pengguna</h1>
            <button>Perbarui Profil</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://raw.githubusercontent.com/putraaxzy/lomba_digifest/main/IMG-20240511-WA0034.jpg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Agus Sutrasno</b>
            </span>
            <span>
              E-mail: <b>agussutrasno.77@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>List Pondok</h1>
            <button>Posting Foto</button>
          </div>
          <List />
          <div className="title">
            <h1>Favorit</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
