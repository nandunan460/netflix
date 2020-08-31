import React, { useEffect, useState } from "react";
import logo from "./netflix.png";
import profile from "./profile.png";
import "./nav.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__blank"}`}>
      <img className="nav__logo" src={logo} alt="Netflix logo" />
      <img className="nav__avatar" src={profile} alt="Netflix logo" />
    </div>
  );
}

export default Navbar;
