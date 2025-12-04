import React from "react";
import { motion } from "framer-motion";
import { Hand, MousePointer, HandMetal, ScrollText, HandIcon,Pointer } from "lucide-react";
import index from "/images/index.png";
import palm from "/images/palm.png";
import shape from "/images/shape.png";
import rock from "/images/rock.png";
import three from "/images/three.png";

export default function Gestures() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-20 py-20">

      {/* ===== Floating Background Lights ===== */}
      <motion.div
        className="absolute top-32 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[140px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[160px]"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl"
      >
        Hand Gesture Control
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-300 max-w-3xl text-lg md:text-xl mx-auto text-center mt-6 leading-relaxed"
      >
        Control your system using intuitive real-time hand gestures powered by
        <span className="text-purple-400 font-semibold"> MediaPipe Hands</span>,
        <span className="text-blue-400 font-semibold"> OpenCV</span>, and
        <span className="text-green-400 font-semibold"> PyAutoGUI</span>.
      </motion.p>

      

      {/* ===== SECTION: GESTURE CARDS ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mt-20 mb-10"
      >
        Gesture Mapping & Actions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <GestureCard
          icon={<img src={palm} alt="Open Palm Gesture" className="w-20 h-20 object-contain" />}

          title="Open Palm"
          desc="Toggle virtual mouse on or off for gesture-based control."
        />

        <GestureCard
           icon={<img src={index} alt="Pointing" className="w-20 h-20 object-contain" />}
          title="Index Finger Pointing"
          desc="Controls mouse cursor movement smoothly and accurately."
        />

        <GestureCard
          icon={<img src={shape} alt="L Shape" className="w-20 h-20 object-contain" />}
          title="Thumb–Index L Shape"
          desc="Short hold = Left Click. Long Hold = Click & Drag."
        />

        <GestureCard
          icon={<img src={rock} alt="Rock Sign" className="w-20 h-20 object-contain" />}
          title="Rock Sign"
          desc="Triggers a Right Click action."
        />

        <GestureCard
           icon={<img src={three} alt="Three Fingers" className="w-25 h-25 object-contain" />}
          title="Three Fingers Extended"
          desc="Enables vertical scrolling using hand movement."
        />

      </div>

      {/* ===== IMPLEMENTATION CARD ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-20 bg-neutral-900 border border-neutral-800 rounded-2xl p-10 shadow-xl mb-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Behind the Scenes</h2>
        <p className="text-gray-300 leading-relaxed">
          After recognizing the gestures, the system uses <span className="text-green-400">PyAutoGUI</span>
          to execute cursor actions such as movement, clicking, dragging, and scrolling in real time.
          <br /><br />
          Spatial normalization, timing thresholds, and smoothing filters prevent unintentional
          commands, ensuring high accuracy and a seamless interaction experience.
        </p>
      </motion.div>

    </div>
  );
}

/* ----- Reusable Gesture Card Component ----- */
function GestureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-400 text-center">{desc}</p>
    </motion.div>
  );
}

export function LGestureIcon({ size = 40, color = "#9b5cff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Thumb */}
      <line x1="30" y1="60" x2="10" y2="60" />

      {/* Index Finger */}
      <line x1="30" y1="60" x2="30" y2="20" />

      {/* Palm */}
      <rect x="30" y="60" width="40" height="25" rx="10" />
    </svg>
  );
}

