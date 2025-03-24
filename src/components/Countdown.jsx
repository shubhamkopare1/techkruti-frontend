import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("March 28, 2025 9:00:00").getTime();
  
  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-30  min-h-130 flex flex-col items-center justify-center relative overflow-hidden bg-black animate-background">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-text-glow">
            NATIONAL LEVEL TECH FEST
          </h3>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient-flow">
              TECHKRUTI
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 animate-gradient-flow-reverse ml-4">
              2K25
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
            Organized by CSE (Data Science) Department In Association with CSI, TGPCET Nagpur Mohgaon <br/> An Autonomous Institute
          </p>
          <h1 className="text-purple-400 sm:text-xl">Techkruti 2K25 Begins In</h1>
        </div>

        {/* Unique Countdown Design */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="relative w-24 h-24 sm:w-32 sm:h-32 bg-black/30 backdrop-blur-lg border-2 border-purple-400/30 rounded-xl transform rotate-45 hover:rotate-0 transition-all duration-500 group"
            >
              {/* Diagonal Content Container */}
              <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-2">
                <span className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {value}
                </span>
                <span className="text-xs sm:text-sm uppercase text-cyan-300 mt-1">
                  {unit}
                </span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="space-y-2 mt-8">
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
            March 28-29, 2025 | TGPCET Campus
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(0); opacity: 0; }
        }

        @keyframes background {
          0% { background-color: #000; }
          50% { background-color: #111; }
          100% { background-color: #000; }
        }

        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient-flow-reverse {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.6); }
        }

        .animate-particle {
          animation: particle 8s linear infinite;
        }

        .animate-background {
          animation: background 5s ease-in-out infinite;
        }

        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 5s ease infinite;
        }

        .animate-gradient-flow-reverse {
          background-size: 200% auto;
          animation: gradient-flow-reverse 5s ease infinite;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Countdown;
