import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="bg-transparent mt-40 bg-cover bg-center min-h-screen flex flex-col items-center text-gray-900 py-12 px-6 md:px-12 lg:px-24">
      {/* Event Introduction */}
      <motion.div
        className="text-center mb-12 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg uppercase">
          Welcome to <span className="text-blue-500">TECHKRUTI 2025</span>
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          TECHKRUTI is the **premier tech fest** of Tulsiramji Gaikwad-Patil College of Engineering & Technology, organized by the **CSE & Data Science Department**. It unites innovators, tech enthusiasts, and gamers for an **unforgettable** experience of knowledge, competition, and futuristic technology.
        </p>
      </motion.div>

      {/* Competitions Section */}
      <motion.div
        className="w-full  max-w-4xl backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl border border-white/30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Major Competitions</h2>
        <ul className="mt-6 text-white/90 list-disc pl-8 space-y-4 text-lg">
          <li>🔥 <span className="font-semibold">7-Hour National Hackathon</span> - Solve real-world tech challenges under time constraints.</li>
          <li>🎮 <span className="font-semibold">E-Sports Tournament</span> - Compete in <span className="text-yellow-400">BGMI, Free Fire, Valorant, and BGMI</span> to claim the championship.</li>
          <li>🚀 <span className="font-semibold">Project Expo</span> - Exhibit your **groundbreaking projects** and innovative ideas.</li>
          <li>🤖 <span className="font-semibold">AI vs Human Debate</span> - A thrilling intellectual showdown between **human logic and AI intelligence**.</li>
        </ul>
      </motion.div>

      {/* Detailed Hackathon Information */}
      <motion.div
        className="mt-12 w-full max-w-4xl backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl border border-white/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Hackathon: Code Your Future</h2>
        <p className="mt-6 text-white/90 text-lg leading-relaxed">
          The **7-Hour National Hackathon** challenges participants to develop innovative tech solutions within a limited timeframe. Compete in teams to build software, AI models, or automation tools that address real-world problems.
        </p>
        <ul className="mt-6 text-white/90 list-disc pl-8 space-y-4 text-lg">
          <li>💡 **Theme-Based Problem Statements** - Solve pressing industry challenges with creativity and skill.</li>
          <li>🛠 **Tech Stack Freedom** - Use **React, Python, Firebase, AI/ML, Blockchain, and more**.</li>
          <li>🏆 **Attractive Prizes** - Cash rewards, internships, and mentorship opportunities.</li>
          <li>🌍 **Networking & Learning** - Collaborate with experts, developers, and startup founders.</li>
        </ul>
      </motion.div>

      {/* Why Participate? */}
      <motion.div
        className="mt-12 w-full max-w-4xl backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl border border-white/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Why Join TECHKRUTI?</h2>
        <ul className="mt-6 text-white/90 list-disc pl-8 space-y-4 text-lg">
          <li>✅ **Compete against top minds in gaming and innovation**.</li>
          <li>✅ **Gain hands-on experience with real-world tech challenges**.</li>
          <li>✅ **Win exciting prizes, industry recognition, and internship opportunities**.</li>
          <li>✅ **Network with industry leaders, mentors, and fellow enthusiasts**.</li>
          <li>✅ **Be part of an electrifying atmosphere of innovation and gaming excellence!**</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
