import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { User, Mail, Save, AlertCircle, CheckCircle } from "lucide-react";

export default function Profile() {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });
    setLoading(true);

    try {
      const token = localStorage.getItem("jarvis_token");
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.message || "Update failed" });
        setLoading(false);
        return;
      }

      updateUser(data.user);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      setMessage({ type: "error", text: "Network error" });
    }

    setLoading(false);
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match" });
      return;
    }

    if (formData.newPassword.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters" });
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("jarvis_token");
      const res = await fetch("http://localhost:5000/api/auth/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.message || "Password update failed" });
        setLoading(false);
        return;
      }

      setMessage({ type: "success", text: "Password updated successfully!" });
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (err) {
      setMessage({ type: "error", text: "Network error" });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400">Manage your account information and security</p>
        </motion.div>

        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              message.type === "success"
                ? "bg-green-950/40 text-green-400 border border-green-900"
                : "bg-red-950/40 text-red-400 border border-red-900"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span>{message.text}</span>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Profile Information</h2>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="text-neutral-400 text-sm block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-neutral-400 text-sm block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save size={20} />
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          </motion.div>

          {/* Change Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Change Password</h2>
            </div>

            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <label className="text-neutral-400 text-sm block mb-2">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="text-neutral-400 text-sm block mb-2">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="text-neutral-400 text-sm block mb-2">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:border-purple-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save size={20} />
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Account Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Account Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-400">User ID:</span>
              <span className="text-white ml-2">{user?.id}</span>
            </div>
            <div>
              <span className="text-neutral-400">Member since:</span>
              <span className="text-white ml-2">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
