import React from "react";
import { motion } from "framer-motion";

export default function Speech() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Voice Commands with{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Real-Time Speech Recognition
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mt-5 mx-auto text-lg"
        >
          Control your computer using your voice. Speak naturally — the AI
          translates your commands instantly.
        </motion.p>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-24">
        
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">1. Microphone Capture</h2>
          <p className="text-neutral-400 mt-3">
            The desktop app listens using your microphone and converts raw audio
            into clean waveforms using noise reduction and audio preprocessing.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">2. Speech-to-Text Model</h2>
          <p className="text-neutral-400 mt-3">
            Your voice is processed using a lightweight ASR (Automatic Speech
            Recognition) model optimized for on-device performance.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">3. Command Extraction</h2>
          <p className="text-neutral-400 mt-3">
            The AI detects key command phrases like “open browser,” “play
            music,” “mute,” “scroll down,” and more.
          </p>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">4. Execute Action</h2>
          <p className="text-neutral-400 mt-3">
            Interpreted commands are sent to the system controller, performing
            actions instantly with near-zero latency.
          </p>
        </motion.div>

      </section>

      {/* Tips Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
        >
          Getting the Best Results
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            {
              title: "Use a Clear Voice",
              desc: "Speak naturally — you don't need to shout. The model is trained to pick up normal speech."
            },
            {
              title: "Quiet Environment",
              desc: "Background noise reduction helps, but a quieter environment improves accuracy."
            },
            {
              title: "Short Commands",
              desc: "Use direct phrases: 'Open Chrome', 'Volume up', 'Pause video', etc."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
