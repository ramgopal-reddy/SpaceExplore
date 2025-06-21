import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons (requires lucide-react)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black backdrop-blur sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          🚀 NASA Explorer
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/nasa-gallery" className="hover:text-yellow-400 transition">
            Gallery
          </Link>
          <Link to="/pic" className="hover:text-yellow-400 transition">
            Picture of Day
          </Link>
          <Link to="/alerts" className="hover:text-yellow-400 transition">
            Space Alerts
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 text-white space-y-4 px-4 pb-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="/nasa-gallery"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Gallery
          </Link>
          <Link
            to="/pic"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Picture of Day
          </Link>
          <Link
            to="/alerts"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Space Alerts
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
