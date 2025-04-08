import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TravelEase</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/destinations" className="text-gray-600 hover:text-blue-600">Destinations</Link>
            <Link to="/packages" className="text-gray-600 hover:text-blue-600">Packages</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/booking" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/packages"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}