import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import CodeIn from "./codein.svg";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="w-full bg-[#002C38] px-6 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex w-48 items-center gap-2">
            <img src={CodeIn} alt="" />
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={`flex items-center text-white font-medium px-3 py-1 rounded-md transition-colors duration-200 focus:outline-none ${dropdownOpen ? 'bg-[#00C2CB] text-[#002C38]' : 'hover:bg-[#00C2CB] hover:text-[#002C38]'}`}
            type="button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            Services
            <FiChevronDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20 py-2">
              <Link to="/services/web-development" className="block px-4 py-2 text-[#002C38] hover:bg-[#00C2CB] hover:text-white rounded-t-md transition-colors duration-150">Web Development</Link>
              <Link to="/services/custom-system" className="block px-4 py-2 text-[#002C38] hover:bg-[#00C2CB] hover:text-white transition-colors duration-150">Custom System</Link>
              <Link to="/services/ai-data" className="block px-4 py-2 text-[#002C38] hover:bg-[#00C2CB] hover:text-white transition-colors duration-150">AI & Data Solutions</Link>
              <Link to="/services/ui-ux" className="block px-4 py-2 text-[#002C38] hover:bg-[#00C2CB] hover:text-white rounded-b-md transition-colors duration-150">UI/UX Design</Link>
            </div>
          )}
        </li>
        <li>
          <Link
            to="/about"
            className="text-white font-medium px-3 py-1 rounded-md hover:bg-[#00C2CB] hover:text-[#002C38] transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white font-medium px-3 py-1 rounded-md hover:bg-[#00C2CB] hover:text-[#002C38] transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

    {/* Contact */}
      <div className='flex items-center gap-6'>
        <span className="flex items-center gap-2 text-white font-medium">
          <FiPhone className="text-[#00C2CB] w-5 h-5" />
          +62 823 3368 0382
        </span>
        <span className="flex items-center gap-2 text-white font-medium">
          <FiMail className="text-[#00C2CB] w-5 h-5" />
          hello@codein.com
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
