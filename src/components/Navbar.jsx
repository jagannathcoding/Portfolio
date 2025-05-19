import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = ["Home", "About", "Services", "Contact"];
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const getPath = (text) => (text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`);

  return (
    <nav className="bg-base-100 text-base-content shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="navbar px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold font-mono tracking-widest 
                     bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          MySite
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex space-x-4 text-lg font-medium">
            {navLinks.map((text) => (
              <li key={text}>
                <Link
                  to={getPath(text)}
                  className={`btn btn-ghost btn-sm rounded-full transition duration-300 ${
                    location.pathname === getPath(text)
                      ? "btn-primary font-semibold shadow-md scale-105"
                      : "hover:btn-secondary hover:shadow-md hover:scale-105"
                  }`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSelector />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeSelector />
          <button
            onClick={toggleMenu}
            className="btn btn-ghost p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>






      {/* Mobile Menu Dropdown */}
      {menuOpen && (
  <ul
    className="lg:hidden bg-base-200 text-base-content px-6 pb-4 space-y-3 transition-all duration-300"
  >
    {navLinks.map((text) => (
      <li key={text}>
        <Link
          to={getPath(text)}
          onClick={toggleMenu}
          className={`btn btn-ghost btn-block rounded-full transition duration-300 ${
            location.pathname === getPath(text)
              ? "btn-primary font-semibold shadow-md scale-105"
              : "hover:btn-secondary hover:shadow-md hover:scale-105"
          }`}
        >
          {text}
        </Link>
      </li>
    ))}
  </ul>
)}

    </nav>
  );
};

export default Navbar;
