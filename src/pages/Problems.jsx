import React, { useState } from "react";

const ProblemStatements = ({ problems = [] }) => {
  const [expanded, setExpanded] = useState(false);

  // Default problems
  const problemData = [
    { title: "AI-Powered Automatic UI/UX Generator (AI/ML)", code: "TGP12", description: "Build an AI tool that converts wireframes or hand-drawn sketches into front-end code" },
    { title: "Decentralized Social Media Platform", code: "TGP13", description: "Develop a blockchain-powered social media app where users own their data and content." },
    { title: "AI-Powered Traffic Violation Detection System", code: "TGP14", description: "Create a mobile app that uses live camera feeds and AI to detect and report traffic violations." },
    { title: "AI-Powered Resume Screener (AI/ML)", code: "TGP15", description: "Develop an AI-based system that scans resumes and matches them to job descriptions based on skills and experience." },
    { title: "AI-Powered Portfolio Builder", code: "TGP15", description: "Develop a web app that automatically generates a personal portfolio website based on a user’s LinkedIn/GitHub profile." },
    { title: "Event Planner with Smart Task Scheduling", code: "TGP15", description: "Create a web-based event planning tool that suggests the best schedule for tasks based on available time slots.." },
    { title: "Decentralized Voting for College Elections", code: "TGP15", description: "Build a blockchain-based voting system for college elections, ensuring transparency and security" },
    { title: "Offline-First Emergency Health App", code: "TGP15", description: "Develop an app that provides offline first-aid guides and emergency contacts." },
    { title: "Decentralized Transparent NGO Funding System", code: "TGP15", description: " Create a blockchain platform that ensures donation transparency for NGOs using smart contracts." },
    { title: "Web-Based Mood Tracker with AI Insights", code: "TGP15", description: " Build a web app where users log their daily mood, and AI analyzes patterns to give emotional well-being insights." },
  ];

  // Use provided problems or fallback to default data
  const dataToShow = problems.length ? problems : problemData;

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          🚀 Problem Statements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataToShow.slice(0, expanded ? dataToShow.length : 3).map((event, index) => (
            <div
              key={index}
              className="p-5 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-500">Code: {event.code}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          ))}
        </div>

        {dataToShow.length > 3 && (
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemStatements;
