import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    alert("Account created successfully");
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>

          <p className="text-gray-500 mb-6">
            Join the platform and get help when your vehicle breaks down.
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Create Account
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?
            <a href="/" className="text-blue-600 ml-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
