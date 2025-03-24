import React, { useState } from "react";
import axios from "axios";

const ProblemForm = () => {
  const [formData, setFormData] = useState({
    problemCode: "",
    teamName: "",
    link: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if ( !formData.problemCode || !formData.teamName || !formData.link) {
      setError("⚠️ All fields are required.");
      return;
    }

    try {
      const res = await axios.post("https://techkruti-backend.onrender.com/api/problem-form/submit", formData);
      setMessage("✅ Submission successful!");
      setFormData({  problemCode: "", teamName: "", link: "" });
    } catch (err) {
      setError("❌ Submission failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center mt-20 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-2xl backdrop-blur-lg bg-opacity-80 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">🚀 Submit Your Problem</h2>

        {/* Success & Error Messages */}
        {message && <p className="text-green-600 bg-green-100 p-2 rounded-md text-center">{message}</p>}
        {error && <p className="text-red-600 bg-red-100 p-2 rounded-md text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Problem Statement */}
         

          {/* Problem Code */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Problem Code</label>
            <input
              type="text"
              name="problemCode"
              value={formData.problemCode}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              placeholder="Enter problem code"
              required
            />
          </div>

          {/* Team Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Team Name</label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              placeholder="Enter team name"
              required
            />
          </div>

          {/* Project Link */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Repo Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              placeholder="Enter project link"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg"
          >
            Submit 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProblemForm;
