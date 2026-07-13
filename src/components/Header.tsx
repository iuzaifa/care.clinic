// import { useState } from "react";
// import logo from "../../../../public/logo.png";
// import { NavLink } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Header = () => {
//   // State to handle mobile menu visibility
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <NavLink to="/" onClick={() => setIsOpen(false)}>
//             <img src={logo} alt="Care Clinic" className="h-10" />
//           </NavLink>

//           {/* Desktop Navigation - Hidden on mobile, Flex on Large screens (md) */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8 font-medium">

//               <li><NavLink  to="/" className="hover:text-cyan-600 transition">Home</NavLink></li>
//               <li><NavLink to="/about" className="hover:text-cyan-600 transition">About</NavLink></li>
//               <li><NavLink to="/departments" className="hover:text-cyan-600 transition">Departments</NavLink></li>
//               <li><NavLink to="/doctors" className="hover:text-cyan-600 transition">Doctors</NavLink></li>
//               <li><NavLink to="/gallery" className="hover:text-cyan-600 transition">Gallery</NavLink></li>
//               <li><NavLink to="/pricing" className="hover:text-cyan-600 transition">Pricing</NavLink></li>
//               <li><NavLink to="/blog" className="hover:text-cyan-600 transition">Blog</NavLink></li>
//               <li><NavLink to="/contact" className="hover:text-cyan-600 transition">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button - Hidden on Desktop (md:hidden) */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-2xl text-gray-700 focus:outline-none z-50"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu Drawer */}
//       {/* It slides down smoothly or pops open based on state */}
//       <div
//         className={`md:hidden fixed top-[73px] left-0 w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${
//           isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
//         }`}
//       >
//         <nav className="px-6 py-4">
//           <ul className="flex flex-col gap-4 font-medium text-gray-700">
//             <li><NavLink to="/" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Home</NavLink></li>
//             <li><NavLink to="/about" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">About</NavLink></li>
//             <li><NavLink to="/departments" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Departments</NavLink></li>
//             <li><NavLink to="/doctors" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Doctors</NavLink></li>
//             <li><NavLink to="/gallery" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Gallery</NavLink></li>
//             <li><NavLink to="/pricing" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Pricing</NavLink></li>
//             <li><NavLink to="/blog" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Blog</NavLink></li>
//             <li><NavLink to="/contact" onClick={toggleMenu} className="block py-2 hover:text-cyan-600">Contact</NavLink></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reusable active class styling function
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => `${isActive ? "text-cyan-600 border-cyan-600 pb-1" : "text-gray-700 hover:text-cyan-600"} transition`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Care Clinic" className="h-10" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <NavLink to="/" className={navLinkStyles}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkStyles}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/departments" className={navLinkStyles}>
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctors" className={navLinkStyles}>
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={navLinkStyles}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={navLinkStyles}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={navLinkStyles}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkStyles}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700 focus:outline-none z-50" aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <div className={`md:hidden fixed top-[73px] left-0 w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            {/* Note: 'w-max' ensures the border-b-2 doesn't span the full screen width on mobile */}
            <li>
              <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `${navLinkStyles({ isActive })} block py-2 w-max`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
