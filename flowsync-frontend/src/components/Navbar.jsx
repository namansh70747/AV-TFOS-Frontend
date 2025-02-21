import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Vehicle", href: "#" },
  { name: "Control Panel", href: "#" },
  { name: "City Map", href: "#" },
  { name: "Emergency", href: "#" },
  { name: "Traffic Light", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-black/80 shadow-lg backdrop-blur-md" : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      } py-4`}
    >
      <div className="flex justify-between items-center mx-auto px-6 md:px-12 container">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/assets/image.png"
            alt="Logo"
            className="shadow-lg border-2 border-white rounded-full w-24 h-24"
          />
          <span className="ml-3 font-mono font-extralight text-white text-4xl uppercase tracking-wider">
            Code Crafters
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="group relative font-sans text-gray-300 hover:text-white text-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              <motion.span
                className="bottom-0 left-0 absolute bg-blue-400 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform"
              ></motion.span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="top-16 left-0 fixed flex flex-col items-center space-y-8 bg-black bg-opacity-95 shadow-2xl backdrop-blur-lg py-8 w-full"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-serif text-gray-300 hover:text-white text-xl transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
