import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Header */}
      <header className="transition-colors py-7 fixed top-0 left-0 z-50 w-full px-6 shadow-md bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer">
            <a href="/">Sana.dev</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12">
            <a href="#home" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-lg font-medium transition-colors">Home</a>
            <a href="#skills" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-lg font-medium transition-colors">Skills</a>
            <a href="#projects" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-lg font-medium transition-colors">Projects</a>
            <a href="#about" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-lg font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 lg:text-lg font-medium transition-colors">Contact</a>
          </nav>

          {/* Right Side: Dark Mode + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md transition"
              title="Toggle Theme"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            </button>

            {/* Hamburger Icon */}
            <button onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer">
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
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start gap-6 p-6 pt-24">
          <a href="#home" onClick={closeMenu} className="text-gray-700 dark:text-white">Home</a>
          <a href="#skills" onClick={closeMenu} className="text-gray-700 dark:text-white">Skills</a>
          <a href="#projects" onClick={closeMenu} className="text-gray-700 dark:text-white">Projects</a>
          <a href="#about" onClick={closeMenu} className="text-gray-700 dark:text-white">About</a>
          <a href="#contact" onClick={closeMenu} className="text-gray-700 dark:text-white">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
