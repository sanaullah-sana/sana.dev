import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ myStyle, toggleStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header
        className="transition-colors py-7 fixed top-0 left-0 z-50 w-full px-6 shadow-md"
        style={myStyle}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer">
            <a href="/">Sana.dev</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12">
            <a style={myStyle} href="#home" className="lg:text-lg font-medium transition-colors">Home</a>
            <a style={myStyle} href="#skills" className="lg:text-lg font-medium transition-colors">Skills</a>
            <a style={myStyle} href="#projects" className="lg:text-lg font-medium transition-colors">Projects</a>
            <a style={myStyle} href="#about" className="lg:text-lg font-medium transition-colors">About</a>
            <a style={myStyle} href="#contact" className="lg:text-lg font-medium transition-colors">Contact</a>
          </nav>

          {/* Right Side: Dark Mode + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleStyle}
              className="text-xl p-2 rounded-full border border-gray-400 cursor-pointer transition"
              title={myStyle.color === 'black' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            >
              {myStyle.color === 'black' ? <FaMoon /> : <FaSun />}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden text-2xl cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        style={myStyle}
        className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-6 p-6 pt-24">
          <a style={myStyle} href="#home" onClick={closeMenu}>Home</a>
          <a style={myStyle} href="#skills" onClick={closeMenu}>Skills</a>
          <a style={myStyle} href="#projects" onClick={closeMenu}>Projects</a>
          <a style={myStyle} href="#about" onClick={closeMenu}>About</a>
          <a style={myStyle} href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
