// import logo from "../../../../public/logo.png"
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/">
//             <img src={logo} alt="Care Clinic" className="h-10" />
//           </Link>

//           <nav>
//             <ul className="flex items-center gap-8">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/departments">Departments</Link></li>
//               <li><Link to="/doctors">Doctors</Link></li>
//               <li><Link to="/gallery">Gallery</Link></li>
//               <li><Link to="/pricing">Pricing</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import logo from "../../../../public/logo.png";
import { Link } from "react-router-dom";
// Burger aur Close icon ke liye simple indicators (Aap React Icons bhi install kar sakte hain)
import { HiMenu, HiX } from "react-icons/hi"; 

const Header = () => {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Care Clinic" className="h-10" />
          </Link>

          {/* Desktop Navigation - Hidden on mobile, Flex on Large screens (md) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-medium text-gray-700">
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
              <li><Link to="/departments" className="hover:text-blue-600 transition">Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-blue-600 transition">Doctors</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-600 transition">Gallery</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button - Hidden on Desktop (md:hidden) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-2xl text-gray-700 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {/* It slides down smoothly or pops open based on state */}
      <div 
        className={`md:hidden fixed top-[73px] left-0 w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li><Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="block py-2 hover:text-blue-600">About</Link></li>
            <li><Link to="/departments" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Departments</Link></li>
            <li><Link to="/doctors" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Doctors</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Gallery</Link></li>
            <li><Link to="/pricing" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/blog" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;