import React, { useEffect, useState } from "react";
import axios from "axios";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://techkruti-backend.onrender.com/api/problem-form/getTeamData", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(res);
      
      setProblems(res.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load data.");
      setLoading(false);
    }
  };
  if (!isAuthenticated) {
    return <p className="text-red-500 text-center">You must be logged in to view this page.</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-35">
      <h2 className="text-2xl font-bold text-center mb-4">📌 Submitted Problems</h2>

      {loading && <p className="text-blue-500 text-center">Loading...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !error && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Team Name</th>
              <th className="p-3 border">Problem Code</th>
              <th className="p-3 border">Repo Link</th>
            </tr>
          </thead>
          <tbody>
            {problems.length > 0 ? (
              problems.map((problem) => (
                <tr key={problem._id} className="text-center hover:bg-gray-100">
                  <td className="p-3 border">{problem.teamName}</td>
                  <td className="p-3 border">{problem.problemCode}</td>
                  <td className="p-3 border">
                    <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Repo
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProblemList;
