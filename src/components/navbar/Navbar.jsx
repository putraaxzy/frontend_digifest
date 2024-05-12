import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/sc.png" alt="" />
          <span>CariPesantren.Id</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <Link to="/donasi">Donasi</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://raw.githubusercontent.com/putraaxzy/lomba_digifest/main/IMG-20240511-WA0034.jpg"
              alt=""
            />
            <span>Agus Sutrasno</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profil</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
