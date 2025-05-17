import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger icons
import NoisyBg from "./NoisyBg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "main" },
    { name: "About", id: "about" },
    { name: "Pricing", id: "pricing" },
    { name: "Services", id: "services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md w-full px-6 sm:px-8 py-4 flex justify-between items-center border-b border-gray-200 font-fira bg-white z-50">
      <NoisyBg />

      {/* Left: Logo */}
      <div className="flex items-center relative space-x-3">
        <div className="relative w-10 h-10">
          <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-500" />
          <div className="absolute top-1.5 left-1.5 w-7 h-7 bg-white rounded-full" />
        </div>
        <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-gray-800 uppercase font-share">
          Rukaz
        </span>
      </div>

      {/* Center: Nav links - desktop only */}
      <div className="hidden lg:flex space-x-6 text-sm text-gray-700 bg-[#d8d7d3] py-3 px-6 rounded">
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={600}
            offset={-80} // if you have a sticky header
            className="cursor-pointer relative z-50 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full font-medium text-[13px] block uppercase"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>

      {/* Right: Login & Sign Up + Hamburger */}
      <div className="flex items-center space-x-4 text-sm font-medium uppercase">
        {/* Login & Sign Up - hidden on small screens, shown on md+ */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="relative text-gray-700 hover:text-black transition flex items-center arrow-hover"
          >
            <span className="right">
              <IoMdArrowDropright />
            </span>
            Login
            <span className="left">
              <IoMdArrowDropleft />
            </span>
          </a>
          <a
            href="#"
            className="bg-[#2d2b2c] border-b-8 border-yellow-400 text-white px-4 pt-1 rounded-md opacity-90 transition lg:px-8 flex items-center"
          >
            <IoMdArrowDropright />
            Sign Up
          </a>
        </div>

        {/* Hamburger button - shown on small screens only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl p-1 rounded-md hover:bg-gray-100 transition relative"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 lg:hidden z-40">
          <div className="flex flex-col space-y-2 py-4 px-6 text-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                onClick={() => setMenuOpen(false)}
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80} // if you have a sticky header
                className="cursor-pointer relative z-50 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full font-medium text-[13px] block uppercase"
              >
                {item.name}
              </ScrollLink>
            ))}

            <div className="mt-4 flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-700 hover:text-black flex justify-center items-center space-x-1"
                onClick={() => setMenuOpen(false)}
              >
                <IoMdArrowDropright />
                <span>Login</span>
                <IoMdArrowDropleft />
              </a>
              <a
                href="#"
                className="bg-[#2d2b2c] border-b-8 border-yellow-400 text-white px-8 py-2 rounded-md opacity-90 flex justify-center items-center"
                onClick={() => setMenuOpen(false)}
              >
                <IoMdArrowDropright />
                <span>Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
