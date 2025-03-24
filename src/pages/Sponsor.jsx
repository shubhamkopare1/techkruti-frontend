import React from "react";

const sponsors = [
  { id: 1, name: "CSI", logo: "CSI.jpg", website: "https://csiindia.org/" },

  {id:3,name:"Unnati Motor",logo:"Unnatimotors.jpg",website:"https://www.unnatimotor.com/"}

 
];

const Sponsor = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 py-20">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Our <span className="text-cyan-400">Sponsors</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-6">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-4 bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="w-24 h-24 object-cover rounded-md" />
            <span className="text-lg text-white font-semibold">{sponsor.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
