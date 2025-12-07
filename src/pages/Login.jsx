import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "./auth/AuthCard";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save user + token using login method
      login(data.user, data.token);

      // Redirect to home
      navigate("/");
    } catch (err) {
      setError("Network error");
    }

    setLoading(false);
  }

  return (
    <AuthCard title="Welcome Back" subtitle="Login to continue using JARVIS">
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>

        {error && (
          <p className="text-red-400 bg-red-950/40 p-3 rounded-lg text-sm">
            {error}
          </p>
        )}

        {/* Email */}
        <div>
          <label className="text-neutral-400 text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
            placeholder="you@example.com"
            required
            autoComplete="email"
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
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-neutral-500 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
