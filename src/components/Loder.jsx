import { motion } from "framer-motion";
import React from "react";

const Loder = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50 p-4">
      <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 max-w-6xl mx-auto">
        {/* Main Text with Responsive Scaling */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: -10 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.4, 0, 0.2, 1],
          }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-tighter md:tracking-wider"
        >
          Techkruti
        </motion.div>

        {/* Responsive Powered By Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="text-gray-300 italic relative"
        >
          <span className="text-lg md:text-xl lg:text-2xl font-light">orgnised by</span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="block text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
           CSE Data Science <br/> TGPCET
            </motion.span>
          </motion.span>
        </motion.div>

        {/* Responsive Animated Dots */}
        <div className="flex justify-center space-x-2 md:space-x-3 mt-4 md:mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, scale: 0.5 }}
              animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-glow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loder;