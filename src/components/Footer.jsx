import React from 'react'
import { FaLinkedin ,FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0">
    
    {/* Created By */}
    <div className="text-sm">
      Created By | <span className="font-semibold">Sana Ullah</span>
    </div>

    {/* Copyright */}
    <div className="text-sm">
      © {new Date().getFullYear()} All rights reserved
    </div>

    {/* Social Icons */}
    <div className="flex space-x-4 text-lg">
      <a 
        href="https://www.linkedin.com/in/sana-ullah-258465272" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-blue-500 transition"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/sanaullah-sana" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-black dark:hover:text-white transition"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
