import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHeartbeat, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive
        ? "text-cyan-600 border-b-2 border-cyan-600 pb-1"
        : "text-slate-700 hover:text-cyan-600"
    } transition text-[14.5px] font-medium`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/service", label: "Services" },
    { path: "/doctors", label: "Doctors" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo Section */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#e7f7f9] text-[#0e7a8c] text-[20px]">
              <FaHeartbeat />
            </span>
            <span className="leading-none">
              <span className="block text-[19px] font-extrabold text-slate-900">
                Medi<span className="text-[#0e7a8c]">Care</span>
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.18em] uppercase text-slate-400 mt-0.5">
                Healthcare
              </span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className={navLinkStyles}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            
            
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2.5 text-slate-700 hover:text-cyan-600 transition-colors duration-200"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#e7f7f9] text-[#0e7a8c] text-[13px]">
                <FaPhoneAlt />
              </span>
              <span className="text-[14px] font-semibold">
                +1 (555) 123-4567
              </span>
            </a>

            <NavLink
              to="/contact"
              className="rounded-full bg-[#0e7a8c] hover:bg-[#0b5f6e] text-white text-[13.5px] font-semibold px-6 py-3 transition-colors duration-200"
            >
              Book Appointment
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-slate-700 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[76px] left-0 w-full bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `${navLinkStyles({ isActive })} block py-2.5 w-max`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-slate-100">
            
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2.5 text-slate-700"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#e7f7f9] text-[#0e7a8c] text-[13px]">
                <FaPhoneAlt />
              </span>
              <span className="text-[14px] font-semibold">
                +1 (555) 123-4567
              </span>
            </a>

            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className="rounded-full bg-[#0e7a8c] hover:bg-[#0b5f6e] text-white text-[13.5px] font-semibold px-6 py-3 text-center transition-colors duration-200"
            >
              Book Appointment
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;