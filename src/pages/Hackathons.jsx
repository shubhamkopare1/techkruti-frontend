import React from "react";

const TechverseHackathon = () => {
  return (
    <div className="w-full mt-20 min-h-screen text-white flex flex-col items-center py-12 px-6">
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          Techverse Hackathon 2K25
        </h1>
        <p className="text-gray-300 text-lg mt-4">🚀 <strong>Where Innovation Meets Execution!</strong></p>
        <p className="text-gray-300 text-lg mt-2">
          💡 Join a high-energy <strong>7-hour coding marathon</strong> where top minds solve <strong>real-world challenges</strong>, compete with <strong>elite developers</strong>, and <strong>showcase their skills</strong> for exciting rewards!
        </p>
      </div>

      {/* Event Details */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400">📍 Event Details</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li><strong>📅 Date:</strong> 28th March, 2025</li>
          <li><strong>⏰ Time:</strong> 9:00 AM - 4:00 PM</li>
          <li><strong>📍 Venue:</strong> TGPCET Campus</li>
          <li><strong>💰 Entry Fee:</strong> ₹80 per head (Non-refundable)</li>
          <li><strong>👥 Team Size:</strong> 2-4 members</li>
          <li><strong>🏆 Prize Pool:</strong> ₹30,000+</li>
        </ul>
      </div>

      {/* Hackathon Domains */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-blue-400">🌍 Hackathon Domains</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>🤖 AI/ML</li>
          <li>🌐 Web Development</li>
          <li>📱 App Development</li>
          <li>🔗 Blockchain</li>
          <li>📊 Data Science</li>
        </ul>
      </div>

      {/* Hackathon Rules & Guidelines */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-red-400">📜 Hackathon Rules & Guidelines</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>🔌 Bring your own laptops and required accessories</li>
          <li>🌐 Internet access will be provided</li>
          <li>🖥️ Follow ethical coding practices</li>
          <li>✅ Respect team collaboration and fair play</li>
          <li>⚖️ Judging criteria: Innovation, functionality, scalability</li>
          <li>⏳ The hackathon lasts for exactly <strong>7 hours</strong></li>
          <li>🚀 Teams will receive problem statements at the beginning of the event</li>
          <li>📤 Final submissions must be made before the deadline</li>
          <li>🔍 Judges will evaluate based on creativity, feasibility, and execution</li>
          <li>🚫 Registration fees are <strong>non-refundable</strong></li>
        </ul>
      </div>

      {/* Registration Button */}
      <div className="mt-10">
        <a href="https://forms.gle/Aubvq4mS49vUcuE88" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition">
          🚀 Register Now
        </a>
      </div>

      {/* Contact Coordinators */}
      <div className="mt-10 bg-black p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-4">📞 Contact Coordinators</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Chhagan Rakhade: <span className="text-blue-500 hover:text-white">+91 9158396794</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Shubham Kopare:<span className="text-blue-500 hover:text-white">+91 8485029672</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Himanshu Dhenge: <span className="text-blue-500 hover:text-white">+91 9322913858</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Gagan Zade: <span className="text-blue-500 hover:text-white">+91 9689477797</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Sarang Kachare: <span className="text-blue-500 hover:text-white">+91 9325489326</span>
          </h2>
          <h2 className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer">
            Vedant Nanoti: <span className="text-blue-500 hover:text-white">+91 9960116568</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TechverseHackathon;
