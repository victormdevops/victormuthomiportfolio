import { useState } from "react";
import { GiScorpion } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <nav className="flex flex-col items-center px-4 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-1 font-bold text-4xl mb-3">
          <span className="text-white">V</span>
          <GiScorpion className="text-green-400" />
          <span className="text-white">M</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-green-400">
          <a href="#banner" className="hover:text-white">Banner</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden absolute right-4 top-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-400 hover:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4 text-green-400">
          <a href="#banner" className="block hover:text-white" onClick={() => setIsOpen(false)}>Banner</a>
          <a href="#about" className="block hover:text-white" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block hover:text-white" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

