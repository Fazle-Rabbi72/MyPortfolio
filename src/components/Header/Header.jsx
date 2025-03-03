import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full sticky top-0 left-0 z-50">
      <header className="header w-full">
        <div>
          <Link to="/" className="logo">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""} z-50`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </div>

        <div className="flex ">
          <ThemeToggle />
          <Link to="/contact"><button className="mx-2 border-3 border-teal-500 bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-md font-bold hover:cursor-pointer">Contact Me</button></Link>
        </div>

        <div className="hamburger" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
