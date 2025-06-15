
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Dental Care of South Florida
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#providers" className="text-gray-700 hover:text-blue-600 transition-colors">Our Providers</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#providers" className="text-gray-700 hover:text-blue-600 transition-colors">Our Providers</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
