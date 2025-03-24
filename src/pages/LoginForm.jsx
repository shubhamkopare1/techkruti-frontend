import React,{ useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post("https://techkruti-backend.onrender.com/api/auth/login", formData);
      setMessage("Login successful!");
      
      // Store token in localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect or reload page
      window.location.href = "/repos";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center">🔑 Login</h2>

      {message && <p className="text-green-600 text-center">{message}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required />
        </div>

        <button type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
