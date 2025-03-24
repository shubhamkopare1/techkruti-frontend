import React from "react";

const supportTeam = [
  {
    id: 1,
    name: "Chhagan Rakhade",
    role: "Registration Technical Support",
    email: "chhaganrakhade7@gmail.com",
    phone: "+91 9158396794"
  },
  {
    id: 2,
    name: "Himanshu Dhenge",
    role: "Judging and Participation Tech",
    email: "himanshudhenge4@gmail.com",
    phone: "+91 9322913858"
  },
  {
    id: 3,
    name: "Shubham Kopare",
    role: "Judging  Tech",
    email: "shubhamkopare2004@gmail.com",
    phone: "+91 8485029672"
  }
  ,
  {
    id: 4,
    name: "Gagan Zade",
    role: "Registartion  technical support",
    email: "zadegagan17@gmail.com",
    phone: "+91 9689477797"
  },
  {
    id: 5,
    name: "Priyanshu Patle",
    role: "E-sport coordinator",
    email: "priyanshupatle2@gmail.com",
    phone: "+91 703883684"
  },
  {
    id: 6,
    name: "Adity Korde",
    role: "E-sport coordinator",
    email: "amdk282005@gmail.com",
    phone: "+91 8446950836"
  },
  {
    id: 7,
    name: "Sarang Kachare",
    role: "Registartion technical support",
    email: "sarangkachare111@gmail.com",
    phone: "+91 9325489326"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-27 px-4 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
        Contact Us
      </h1>

      {/* Support Team Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {supportTeam.map((person) => (
          <div
            key={person.id}
            className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold">{person.name}</h2>
            <p className="text-gray-400 text-sm sm:text-base">{person.role}</p>
            <p className="mt-2 text-sm sm:text-base">
              📧{" "}
              <a
                href={`mailto:${person.email}`}
                className="text-blue-400 hover:underline break-all"
              >
                {person.email}
              </a>
            </p>
            <p className="text-sm sm:text-base">
              📞{" "}
              <a
                href={`tel:${person.phone}`}
                className="text-blue-400 hover:underline"
              >
                {person.phone}
              </a>
            </p>
          </div>
        ))}
      </div>

      {/* Google Maps Section */}
      <div className="mt-10 sm:mt-12 max-w-5xl mx-auto text-center px-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-600">
          <iframe
            title="TGPCET Location"
            className="w-full h-64 sm:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
