import React from "react";
import { motion } from "framer-motion";
import { Brain, Mic, Smile, Pointer,Scan } from "lucide-react";
import {
  Download as DownloadIcon,
  Smartphone,
  Monitor,
  Laptop,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function Download() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Download Moody
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
        >
          Get our Desktop and Mobile apps and experience seamless real-time
          emotion & speech recognition powered by AI.
        </motion.p>
      </section>

      {/* ===== DOWNLOAD CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-20 pb-20">
        {/* ---- Desktop App ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition"
        >
          <Monitor className="w-14 h-14 text-blue-400 mb-4" />

          <h2 className="text-3xl font-bold mb-3">Desktop Application</h2>

          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Install Moody on Windows and enjoy precise real-time emotion
            detection using your webcam and microphone.
          </p>

          <a
            href="#"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold text-black transition"
          >
            <DownloadIcon className="w-5 h-5" />
            Download for Windows
          </a>
        </motion.div>

        {/* ---- Mobile App ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl hover:shadow-green-500/20 transition"
        >
          <Smartphone className="w-14 h-14 text-green-400 mb-4" />

          <h2 className="text-3xl font-bold mb-3">Mobile Application</h2>

          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Use Moody anywhere on your smartphone. Fast, lightweight and
            perfect for students, researchers, and daily mood tracking.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-200 hover:bg-white px-6 py-3 rounded-xl font-semibold text-black transition"
            >
              <Smartphone className="w-5 h-5" /> Android
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-gray-200 hover:bg-white px-6 py-3 rounded-xl font-semibold text-black transition"
            >
              <Laptop className="w-5 h-5" /> iOS
            </a>
          </div>
        </motion.div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <section className="px-8 md:px-20 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
           What's Inside Moody?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-purple-500/20 transition"
          >
            <Smile className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emotion Detection</h3>
            <p className="text-gray-400">
              Real-time facial emotion detection to control system actions
        based on your mood.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-blue-500/20 transition"
          >
            <Mic className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speech Recognition</h3>
            <p className="text-gray-400">
               Give hands-free commands: scroll, click, open apps and more with 
        lightning-fast ASR processing.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-green-500/20 transition"
          >
            <Pointer className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hand Gesture Mouse Control</h3>
            <p className="text-gray-400">
              Control the cursor with MediaPipe Hands: pointing, clicking,
        dragging, and scrolling using intuitive gestures.
            </p>
          </motion.div>
        </div>
      </section>


       {/* ===== FEATURES SECTION ===== */}
      <section className="px-8 md:px-20 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          What's Inside the App?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-purple-500/20 transition"
          >
            <Scan className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accurate Detection</h3>
            <p className="text-gray-400">
              Detect happiness, sadness, anger, fear, surprise, and more using
              our trained CNN model.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-blue-500/20 transition"
          >
            <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
            <p className="text-gray-400">
              Optimized for real-time inference on both desktop and mobile.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-green-500/20 transition"
          >
            <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">
              All processing happens locally. Your face and voice data never
              leave your device.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
