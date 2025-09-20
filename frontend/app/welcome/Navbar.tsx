import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiChevronDown } from "react-icons/fi";
import CodeIn from "./codein.svg";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="w-full bg-[#002C38]/95 backdrop-blur-sm px-8 py-5 flex items-center justify-between shadow-md sticky top-0 z-30">
      {/* Logo */}
      <Link to="/" className="flex w-36 items-center">
        <img src={CodeIn} alt="CodeIn Logo" className="w-full" />
      </Link>

      {/* Menu */}
      <ul className="flex items-center space-x-6">
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center text-white font-medium text-lg px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C2CB] ${
              dropdownOpen
                ? "bg-[#00C2CB] text-[#002C38]"
                : "hover:bg-[#00C2CB]/90 hover:text-[#002C38]"
            }`}
            type="button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-controls="services-menu"
          >
            Services
            <FiChevronDown
              className={`ml-1 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div
              id="services-menu"
              className="absolute left-0 mt-3 w-64 bg-white rounded-lg shadow-xl z-20 py-2 animate-fadeIn"
            >
              <Link
                to="/services/web-development"
                className="block px-4 py-2 text-[#002C38] font-medium text-lg hover:bg-[#00C2CB]/10 transition-colors cursor-default rounded-t-md"
              >
                Web Development
              </Link>
              <Link
                to="/services/web-development/custom"
                className="block px-6 py-2 text-[#002C38] text-base hover:bg-[#00C2CB] hover:text-white transition-colors"
              >
                Custom Web Development
              </Link>
              <Link
                to="/services/web-development/react-landing"
                className="block px-6 py-2 text-[#002C38] text-base hover:bg-[#00C2CB] hover:text-white transition-colors"
              >
                React Landing Page
              </Link>
              <Link
                to="/services/web-development/fullstack"
                className="block px-6 py-2 text-[#002C38] text-base hover:bg-[#00C2CB] hover:text-white transition-colors rounded-b-md"
              >
                Fullstack Development
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link
            to="/projects"
            className="text-white font-medium text-lg px-3 py-2 rounded-md hover:bg-[#00C2CB]/90 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="text-white font-medium text-lg px-3 py-2 rounded-md hover:bg-[#00C2CB]/90 transition-colors"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white font-medium text-lg px-3 py-2 rounded-md hover:bg-[#00C2CB]/90 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white font-medium text-lg px-3 py-2 rounded-md hover:bg-[#00C2CB]/90 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Contact */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-white font-medium text-sm">
          <FiPhone className="text-[#00C2CB] w-4 h-4" />
          +62 823 3368 0382
        </span>
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-gradient-to-r from-[#00C2CB] to-[#00CFC9] px-4 py-2 rounded-md text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          <FiMail className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
