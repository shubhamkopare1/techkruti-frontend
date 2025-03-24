import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0D1117] to-[#1A1F2B]  text-white py-4 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-base sm:text-lg font-semibold text-cyan-400 uppercase">
          TECHKRUTI 2025
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm text-center">
          CSE & Data Science | TGPCET, Mohgav
        </p>

        {/* Navigation Links */}
        <nav className="mt-2 flex flex-wrap justify-center space-x-3 sm:space-x-5 text-cyan-300 text-xs sm:text-sm font-medium">
          <a href="#" className="hover:text-cyan-200 transition">Home</a>
          <a href="#" className="hover:text-cyan-200 transition">About</a>
          <a href="#" className="hover:text-cyan-200 transition">Sponsors</a>
          <a href="#" className="hover:text-cyan-200 transition">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-3 flex justify-center space-x-3 text-lg">
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaFacebook /></a>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaYoutube /></a>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaLinkedin /></a>
          <a href="https://www.instagram.com/ds_tgpcet/?hl=en" className="text-cyan-300 hover:text-cyan-200 transition"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-2">
          © 2025 TECHKRUTI. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Developed by <span className="text-cyan-400 font-semibold">Chhagan Rakhade</span> & <span className="text-cyan-400 font-semibold">Shubham Kopare</span><span>&</span>
          <span className="text-cyan-400 font-semibold">Himanshu Dhenge</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

