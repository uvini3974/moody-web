import React from "react";
import { motion } from "framer-motion";
import { Brain, Mic, Smile, Download, Pointer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* ===== FLOATING BACKGROUND ORBS ===== */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[140px]"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 flex flex-col items-center text-center px-8 pt-28 pb-20">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl"
        >
          JARVIS AI Assistant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 max-w-3xl text-lg md:text-xl mt-6 leading-relaxed"
        >
          Real-time <span className="text-blue-400 font-semibold">Face Emotion Detection</span>, 
          <span className="text-purple-400 font-semibold"> Speech Recognition</span>, 
          and <span className="text-green-400 font-semibold">Hand Gesture Control</span> 
            -built for seamless human-computer interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={() => {
              document.getElementById("Explore Features").scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-black font-bold text-lg shadow-xl hover:shadow-blue-500/40 transition"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* ===== FEATURES NAVIGATION SECTION ===== */}
      <section id="Explore Features" className="relative z-10 px-8 md:px-20 pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Explore Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ---- Emotion Detection ---- */}
          <FeatureCard
            title="Emotion Detection"
            desc="Detect happiness, anger, fear, surprise, and more in real-time using AI."
            icon={<Smile className="w-12 h-12 text-blue-400" />}
            link="/emotion"
            color="from-blue-500 to-purple-500"
          />

          {/* ---- Speech Recognition ---- */}
          <FeatureCard
            title="Speech Recognition"
            desc="Speak naturally. Your voice commands are analyzed instantly."
            icon={<Mic className="w-12 h-12 text-purple-400" />}
            link="/speech"
            color="from-purple-500 to-pink-500"
          />

          {/* ---- Gesture Control ---- */}
          <FeatureCard
            title="Gesture Control"
            desc="Control mouse movements and clicks using intuitive hand gestures."
            icon={<Pointer className="w-12 h-12 text-yellow-400" />}
            link="/gestures"
            color="from-yellow-500 to-orange-500"
          />

          {/* ---- Download App ---- */}
          <FeatureCard
            title="Download Apps"
            desc="Get the desktop and mobile versions of JARVIS."
            icon={<Download className="w-12 h-12 text-green-400" />}
            link="/download"
            color="from-green-500 to-teal-500"
          />

        </div>
      </section>
    </div>
  );
}

/* ----- REUSABLE FEATURE CARD COMPONENT ----- */
function FeatureCard({ title, desc, icon, link, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition cursor-pointer"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{desc}</p>

      <Link
        to={link}
        className={`inline-block px-6 py-3 bg-gradient-to-r ${color} text-black font-semibold rounded-xl shadow-md`}
      >
        Open
      </Link>
    </motion.div>
  );
}
