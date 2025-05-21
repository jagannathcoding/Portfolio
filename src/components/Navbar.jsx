import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSelector from "./ThemeSelector";

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const handleScroll = (section) => {
    scrollToSection(section.toLowerCase());
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-base-100 text-base-content shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="navbar px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleScroll("Home")}
          className="text-2xl font-bold font-mono tracking-widest 
                     bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          My Site
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex space-x-4 text-lg font-medium">
            {navLinks.map((text) => (
              <li key={text}>
                <button
                  onClick={() => handleScroll(text)}
                  className="btn btn-ghost btn-sm rounded-full hover:btn-secondary hover:shadow-md hover:scale-105 transition duration-300"
                >
                  {text}
                </button>
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

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-full left-0 right-0 z-50 bg-base-200 text-base-content px-6 pb-4 pt-4 space-y-3 shadow-md">
          {navLinks.map((text) => (
            <li key={text}>
              <button
                onClick={() => handleScroll(text)}
                className="btn btn-ghost btn-block rounded-full hover:btn-secondary hover:shadow-md hover:scale-105 transition duration-300"
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
