import { useState } from "react";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Hero from "./Hero";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[linear-gradient(to_bottom,#A8D3FF,#FFF4DF)] relative">
      <div className="flex justify-between items-center py-9 px-4 container m-auto">

        {/* Logo */}
        <img src={logo} alt="Logo" width={120} />

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(true)}>
          <CiMenuBurger />
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8">
          <a href="#product" className="hover:text-link transition-colors">Product</a>
          <a href="#journal" className="hover:text-link transition-colors">Journal</a>
          <a href="#about" className="hover:text-link transition-colors">About</a>
          <a href="#careers" className="hover:text-link transition-colors">Careers</a>
          <a href="#get-started" className="flex items-center gap-2 hover:text-link transition-colors">
            Get started <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50
          shadow-2xl sm:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 text-2xl">
          <IoMdClose onClick={closeMenu} className="cursor-pointer" />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6">
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#careers" onClick={closeMenu}>Careers</a>
          <a
            href="#get-started"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            Get started <FaArrowRight />
          </a>
        </div>
      </div>
      <Hero />
    </nav>
  );
};

export default Navbar;
