import { motion } from "framer-motion";

export default function AuthCard({ title, children, subtitle }) {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow Effects */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[160px] top-10 left-10"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[200px] bottom-10 right-10"
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* AUTH CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full max-w-md 
          bg-neutral-900/80 
          backdrop-blur-xl 
          border border-neutral-800/60 
          rounded-2xl p-10 
          shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.6)]
          relative
        "
      >

        {/* Subtle top gradient border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-purple-500/40 rounded-full" />

        <h1 className="text-3xl font-bold text-white text-center">{title}</h1>

        {subtitle && (
          <p className="text-neutral-500 text-center mt-2">{subtitle}</p>
        )}

        <div className="mt-8">{children}</div>
      </motion.div>
    </div>
  );
}
