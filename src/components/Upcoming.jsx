import React from "react";
import { useNavigate } from "react-router-dom";

const events = [ {
  id: 1,
  title: "KrutiVerse Hackathon 2K25",
  description:
    "Compete in an intense 7-hour coding marathon to solve real-world challenges.",
  img: "Hackthon.jpg",
  fee: "₹80 per Head",
  teamSize: "2-4 members",
  venue: "TGPCET campus",
  date: "28th March",
  time: "9:00 AM - 4:00 PM",
  registerLink:"https://forms.gle/Aubvq4mS49vUcuE88"
},
{
  id: 2,
  title: "E-Sports LAN Event",
  description:
    "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
  img: "pubg.jpg",
  fee: "₹200 per squad",
  teamSize: "4 members",
  venue: "TGPCET Campus",
  date: "29th March",
  time: "9:00 AM - 4:00 PM",
  registerLink:
    "https://forms.gle/FQ1y7L7nQoK75ZQY6",
},
{
  id: 3,
  title: "Project Expo",
  description:
    "Showcase your innovative tech projects to industry leaders and investors.",
  img: "Projects.jpg",
  fee: "₹100 per entry",
  teamSize: "1-2 members",
  venue: "Data Science Department",
  date: "28th March",
  time: "9:00 AM - 4:00 PM",
  registerLink:"https://forms.gle/x9t8waM5yNJdU6mC8"
},
{
  id: 4,
  title: "AI vs Human Debate",
  description:
    "Engage in a thrilling debate on AI's potential to surpass human intelligence.",
  img: "Debate.jpg",
  fee: "₹50 per participant",
  teamSize: "1-2 members",
  venue: "TGPCET campus",
  date: "28th March",
  time: "10:00 AM - 5:00 PM",
  registerLink:"https://forms.gle/4Tcd9Qc8bKMBPyCS7"
},
{
  id: 5,
  title: "Meme Battle",
  description:
    "Show off your creativity and humor by creating the most hilarious and trending memes.",
  img: "MemeBattle.jpg",
  fee: "₹30 per participant",
  teamSize: "Solo",
  venue: "TGPCET campus",
  date: "29th March",
  time: "10:00 AM - 5:00 PM",
  registerLink:"https://forms.gle/WgyCR1D46b6ewYBcA"
},
{
  id: 6,
  title: "Ciphertext Treasure Hunt",
  description: "Decode encrypted clues and solve puzzles to find the hidden treasure.",
  img: "cipher.jpg",
  fee: "₹100/- entry",
  teamSize: "4 members",
  venue: "Mystery Room",
  date: "29 March",
  time: "10:00 Am - 4:00 PM",
  registerLink: "https://forms.gle/7wNGM65ufrGzCVGJ7"
}

];

const Upcoming = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black  px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
          Upcoming Events
        </h1>
        <p className="text-gray-600 text-lg">Explore our exciting tech events lineup</p>
      </div>

      {/* Event Cards - 2 Column Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-gradient relative"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
                {event.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-3">
              {/* Compact Details */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  {event.fee}
                </span>
                <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  👥 {event.teamSize}
                </span>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  📍 {event.venue}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-tight line-clamp-2 mb-2">
                {event.description}
              </p>

              {/* Date & Time */}
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-purple-600 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-600 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => navigate(event.id === 1 ? "/hackthon" : `/event/${event.id}`)}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold shadow-sm"
                >
                  View Details
                </button>
                {event.registerLink ? (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-lg text-center hover:opacity-90 transition-opacity text-sm font-semibold shadow-sm"
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-gray-200 text-gray-500 px-3 py-2 rounded-lg cursor-not-allowed text-sm font-semibold"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .hover\:border-gradient:hover {
          border-image: linear-gradient(45deg, #ec4899, #8b5cf6);
          border-image-slice: 1;
        }
      `}</style>
    </div>
  );
};

export default Upcoming;