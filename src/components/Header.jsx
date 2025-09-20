import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons (requires lucide-react)
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black backdrop-blur sticky top-0 z-50 w-full pt-5">
      <div className="max-w-7xl mx-auto my-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Space Explorer/Research
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
            Astronomy Picture of Day
          </Link>
          <Link to="/alerts" className="hover:text-yellow-400 transition">
            Space Alerts
          </Link>
          <Link to="/iss" className="hover:text-yellow-400 transition">
            ISS Tracker
          </Link>
          <Link to="/asteroids" className="hover:text-yellow-400 transition">
            Asteroids
          </Link>
          <Link to="/space" className="hover:text-yellow-400 transition">
            Space Simulator
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row space-x-2 justify-center items-center hover:text-gray-300 transition"
          >
            <p>About</p>
            <FaGithub />
          </a>
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
            Astronomy Picture of Day
          </Link>
          <Link
            to="/alerts"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Space Alerts
          </Link>
          <Link
            to="/iss"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            ISS Tracker
          </Link>
          <Link
            to="/asteroids"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Asteroids
          </Link>
          <Link
            to="/space"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Space Simulator
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
