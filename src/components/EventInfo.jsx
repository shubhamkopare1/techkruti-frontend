import React from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Techverse Hackathon",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "28 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🚀 What is Hackathon Techverse?",
          "Hackathon Techverse is a 7-hour coding marathon where innovators, developers, designers, and problem-solvers collaborate to build impactful solutions.",
          "",
          "💡 Why Participate?",
          "- Solve real-world problems with cutting-edge technology",
          "- Work in teams and showcase problem-solving skills",
          "- Gain mentorship from industry experts",
          "- Win exciting prizes and recognition",
          "- Network with like-minded tech enthusiasts"
        ],
        
      }

    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "7 hours non stop coding"
    ],
    contacts: [
      { name: "Chhagan Rakhade", phone: "+91 9158396794" },
      { name: "Himanshu dhenge", phone: "+91 9322913858" }
    ]
  },

  {
    id: 2,
    title: "E-Sports Championship",
    subtitle: "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
    date: "29 March, 2025",
     registration:"https://forms.gle/FQ1y7L7nQoK75ZQY6",
    about: [
      {  
        heading: "About the Event",
        description: [
          "🎮 What is the E-Sports Championship?",
          "The E-Sports Championship brings together gaming enthusiasts for the ultimate competitive showdown, featuring the most popular battle royale and FPS games!",
          "",
          "🔥 Why Participate?",
          "- Compete in high-stakes tournaments with skilled players",
          "- Everyone has to paly games using their own mobile internet only, we will not provide WiFi Sysytem",
          "- Play your favorite games: Valorant, BGMI, and Free Fire",
          "- Win cash prizes, exclusive in-game rewards, and trophies",
          "- Experience a thrilling gaming atmosphere with live commentary",
          "- Meet and connect with pro gamers and gaming influencers"
        ],
       
      }
    ],
    highlights: [
      "Thrilling Battle Royale & FPS Matches",
      "Cash Prizes & Gaming Rewards",
      "Live Streaming & Commentary",
      "Squad & Solo Mode Competitions",
      "Intense Showdowns with Pro Gamers",
      "Ultimate Gaming Experience"
    ],
    contacts: [
      { name: "Priyanshu Patle", phone: "+91 70388 36841" },
      { name: "Dishant Janbandhu", phone: "+91 7517938702" } ,
      { name: "Aditya Korde", phone: "+91 8446950836" },
      { name: "Paras Longadge", phone: "+91 8329390262" }

    ]
  },
  {
    id: 3,
    title: "Project Expo",
    subtitle: "Showcase Your Innovative Projects to Industry Experts",
    date: "28 March, 2025",
    registration:"https://forms.gle/x9t8waM5yNJdU6mC8",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎯 What is Project Expo?",
          "Project Expo is an exhibition of innovative student projects across various disciplines. It provides a platform for students to showcase their technical and creative skills.",
          "",
          "🔍 Why Participate?",
          "- Get your project evaluated by industry experts",
          "- Gain feedback and mentorship for improvement",
          "- Win prizes and recognition for outstanding innovations",
          "- Build networking opportunities with professionals and investors",
        ],
      },
    ],
    highlights: [
      "Innovative Project Showcase",
      "Industry Expert Evaluation",
      "Networking with Professionals",
      "Exciting Prizes for Best Projects",
      "Hands-on Feedback & Mentorship",
    ],
    contacts: [
      { name: "Vishakha ghatole", phone: "+91 8208212898"},
      { name: "Nidhi Sharnagat", phone: "+91 9021138083"},
      {name:"Pranay Dhore",phone:"+91 7498678112 "},
      {name:"Dipanshu Waradhe",phone:"+91 7498623657"}
    ],
  },
  {
    id: 4,
    title: "AI/ML Debate",
    subtitle: "Discuss the Future of AI & Machine Learning",
    date: "28 March, 2025",
    registration:"https://forms.gle/4Tcd9Qc8bKMBPyCS7",
    about: [
      {
        heading: "About the Event",
        description: [
          "🧠 What is AI/ML Debate?",
          "The AI/ML Debate is a competitive discussion where experts, students, and enthusiasts share insights on the future of AI, ethics, and its impact on industries.",
          "",
          "🤔 Why Participate?",
          "- Engage in thought-provoking discussions",
          "- Explore the latest trends and breakthroughs in AI",
          "- Challenge yourself with logical reasoning and argumentation",
          "- Get recognized for your analytical and debating skills",
        ],
      },
    ],
    highlights: [
      "Industry Expert Panel",
      "Debate on AI's Ethical Concerns",
      "Latest AI/ML Trends Discussion",
      "Recognition for Best Debaters",
      "Certificate of Participation",
    ],
    contacts: [
      { name: "Devanshi Shingade", phone: "+91 7077503311"},
      { name: "Nidhi meshram", phone: "+91 8180962625" }
    ],
  },
  {
    id: 5,
    title: "Meme Battle",
    subtitle: "Unleash Your Creativity with the Funniest Memes",
    date: "29 March, 2025",
    registration:"https://forms.gle/WgyCR1D46b6ewYBcA",
    about: [
      {
        heading: "About the Event",
        description: [
          "😂 What is the Meme Battle?",
          "The Meme Battle is a creative competition where participants craft hilarious and trending memes on tech, college life, pop culture, and more.",
          "",
          "🔥 Why Participate?",
          "- Show off your meme-making skills",
          "- Compete with fellow meme lords",
          "- Create viral-worthy content",
          "- Win prizes and recognition for your humor",
          "- Have fun and make the audience laugh!"
        ]
       
      }
    ],
    highlights: [
      "Theme-Based Meme Creation",
      "Live Voting & Audience Reactions",
      "Best Meme Awards & Prizes",
      "Social Media Feature for Top Memes",
      "Certificate of Participation"
    ],
    contacts: [
      { name: "Devanshi Shingade", phone: " +707750311"},
      { name: "Nidhi meshram", phone: "+91 8180962625" }
    ],
  },
  {
  id: 6,
    title: "CipherText Treasure Hunt",
    subtitle: "Solve the encrypted clues to find the treasure!",
    date: "29 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🔐 What is CipherText Treasure Hunt?",
          "Cipher Treasure Hunt is an exciting puzzle-solving event where participants decode encrypted messages to find the hidden treasure.",
          "",
          "💡 Why Participate?",
          "- Challenge your cryptography and problem-solving skills",
          "- Work in teams to decrypt ciphers",
          "- Win exciting prizes and recognition",
          "- Learn about different encryption techniques",
          "- Have fun with an interactive adventure!"
        ]
      }
    ],
    highlights: [
      "Cryptography & Problem-Solving",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Fun and Engaging Treasure Hunt",
      "Decode & Discover"
    ],
    contacts: [
      { name: "Devanshi Shingade", phone: " +707750311"},
      { name: "Harsh chahande", phone: "+91 7447343307" },
      { name: "Kunal gomkar", phone: "+91 9763606402" }
    ]
}

  // Update other events similarly...
];

const EventInfo = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="text-white mt-20 min-h-screen px-6 py-8 flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-5xl flex flex-col items-center space-y-12">

        {/* Event Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-teal-300 via-blue-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-300">
            {event.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-300 font-medium">
            {event.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-blue-300">🗓️</span>
            <p className="text-lg font-semibold text-blue-300">
              {event.date}
            </p>
          </div>
        </div>

        {/* Registration Button */}
        {event.registration && (
          <a 
            href={event.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="flex items-center space-x-2">
              <span className="text-xl">🚀</span>
              <span className="text-lg font-bold tracking-wide">Register Now</span>
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
          </a>
        )}

        {/* About Section */}
        <div className="w-full max-w-3xl space-y-8 backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 border border-gray-700 shadow-xl">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Event Details
          </h2>
          <div className="space-y-6">
            {event.about.map((section, index) => (
              <div key={index} className="space-y-4">
                {section.description.map((line, i) => (
                  <p 
                    key={i} 
                    className={`text-lg ${
                      line.startsWith("🚀") || line.startsWith("💡") || line.startsWith("🎮") 
                        ? "font-bold text-blue-300" 
                        : "text-gray-300"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="w-full max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            🌟 Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {event.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                  <p className="text-lg font-medium text-gray-300 group-hover:text-white">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-2xl space-y-8 text-center bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            📱 Contact Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.contacts.map((contact, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700/20 rounded-lg hover:bg-gray-700/40 transition-colors duration-300"
              >
                <p className="text-lg font-semibold text-blue-300">{contact.name}</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventInfo;