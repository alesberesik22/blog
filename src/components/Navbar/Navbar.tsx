import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo2.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {};
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div className="navbar_img">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar_items">
        <li className="navbar_item">
          <a href="/">Home</a>
        </li>
        <li className="navbar_item">
          <a href="/">Test</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
