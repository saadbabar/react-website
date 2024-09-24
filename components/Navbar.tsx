import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/siteConfig';
import { FaBars, FaTimes } from 'react-icons/fa';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            {siteConfig.navTitle}
          </Link>

          {/* Hamburger Icon for smaller screens */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="#experience" className="text-gray-300 hover:text-white transition duration-300">Experience</Link>
            <Link href="#education" className="text-gray-300 hover:text-white transition duration-300">Education</Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 text-center py-4">
            <Link href="#experience" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition duration-300">Experience</Link>
            <Link href="#education" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition duration-300">Education</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition duration-300">Projects</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
