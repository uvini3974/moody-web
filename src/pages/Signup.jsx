import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "./auth/AuthCard";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      // Save token
      localStorage.setItem("moody_token", data.token);

      // Redirect
      navigate("/");
    } catch (err) {
      setError("Network error");
    }

    setLoading(false);
  }

  return (
    <AuthCard title="Create Account" subtitle="Join Moody in seconds">
      <form className="flex flex-col gap-5" onSubmit={handleSignup}>

        {error && (
          <p className="text-red-400 bg-red-950/40 p-3 rounded-lg text-sm">
            {error}
          </p>
        )}

        {/* Name */}
        <div>
          <label className="text-neutral-400 text-sm">Full Name</label>
          <input
            name="name"
            type="text"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-neutral-400 text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-neutral-400 text-sm">Password</label>
          <input
            name="password"
            type="password"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-neutral-500 text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
