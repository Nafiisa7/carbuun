import Navbar from "../../components/Navbar";
import { useState } from "react";
import { users } from "../../data/users";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    // Save user session (temporary)
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect based on role
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    }

    if (user.role === "technician") {
      navigate("/technician/dashboard");
    }

    if (user.role === "client") {
      navigate("/dashboard");
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row items-center justify-center p-8 gap-10">
        <div className="hidden lg:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>

          <p className="text-gray-500 mb-6">
            Login to request a technician and track your vehicle repair service.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Enter email or phone"
              className="w-full border rounded p-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded p-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account?
            <a href="/signup" className="text-blue-600 ml-1">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
