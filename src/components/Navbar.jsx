import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check authentication
  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    setIsAuthenticated(token);
  };

  useEffect(() => {
    checkAuthStatus(); // Initial check

    // Listen for login/logout changes
    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  let navLinks = [
    { name: "Home", path: "/" },
    { name: "KrutiVerse Hack", path: "/hackthon" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "addRepos", path: "/ProblemForm" },
  ];

  if (isAuthenticated) {
    navLinks.push({ name: "Repos", path: "/repos" });
    navLinks.push({ name: "Logout", path: "#", onClick: handleLogout });
  } else {
    navLinks.push({ name: "Login", path: "/login" });
  }

  return (
    <>
      <nav className="fixed h-auto bg-black/90 top-0 left-0 w-full backdrop-blur-md border-b-2 border-cyan-500/30 shadow-xl shadow-cyan-500/20 z-[9999] pb-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <span className="text-cyan-400 text-3xl font-bold">{'</>'}</span>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              TechKruti 2K25
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div key={index} whileHover={{ y: -2 }} className="relative group">
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="text-lg text-gray-300 hover:text-cyan-400 transition-all font-medium px-3 py-2"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link to={link.path} className="text-lg text-gray-300 hover:text-cyan-400 transition-all font-medium px-3 py-2">
                    {link.name}
                    <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-cyan-400 hover:text-purple-400  focus:outline-none p-2 rounded-lg border border-cyan-400/30 hover:border-cyan-400"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-1/2 h-screen bg-black/95 backdrop-blur-xl shadow-lg flex flex-col items-start mt-24 pb-16 justify-start space-y-6 pl-8 z-[9999]"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: index * 0.1 }} className="relative">
                {link.onClick ? (
                  <button
                    onClick={() => {
                      link.onClick();
                      setIsOpen(false);
                    }}
                    className="text-1xl font-bold text-cyan-400 hover:text-purple-400 px-6 py-3 border-b-2 border-transparent hover:border-cyan-400 transition-all"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="text-1xl font-bold text-cyan-400 hover:text-purple-400 px-6 py-3 border-b-2 border-transparent hover:border-cyan-400 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
