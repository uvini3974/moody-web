import { motion } from "framer-motion";
import { Camera, Cpu, Workflow, Smile,User} from "lucide-react";



export default function Emotion() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="pt-28 pb-20 px-6 text-center relative">
        
        {/* Glow lights */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 blur-[150px] rounded-full"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Real-Time{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Emotion Detection
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 max-w-2xl mt-5 mx-auto text-lg"
        >
          Powered by deep learning, computer vision, and real-time image
          processing  Moody recognizes your facial expressions instantly and
          locally on your device.
        </motion.p>
      </section>

      {/* =====================================================
          ARCHITECTURE SECTION (Inspired by your diagram)
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center mb-12"
>
  <img
    src="/images/face.jpg"
    alt="Face Detection AI"
    className="rounded-2xl shadow-lg w-[500px] border border-neutral-800"
  />
</motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            

          {/* LEFT SIDE: Flow Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Camera className="text-blue-400" /> Webcam Pipeline
            </h3>

            <FlowItem title="Input Face Image" />
            <FlowItem title="Preprocessing" />
            <FlowItem title="Feature Extraction" />
            <FlowItem title="Classification" />
            <FlowItem title="Emotion Output" isLast/>

          </motion.div>

          {/* RIGHT SIDE: Dataset Path */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="text-purple-400" /> Training Pipeline
            </h3>

            <FlowItem title="Dataset Face Images" />
            <FlowItem title="Preprocessing" />
            <FlowItem title="Feature Extraction" />
            <FlowItem title="Model Training" isLast/>
          </motion.div>

        </div>

        {/* Emotion Labels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold mb-6">Recognized Emotions</h3>
          <p className="text-neutral-400">
            Happy • Sad • Angry • Fearful • Surprise • Disgust • Neutral
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-24">

        {/* Step 1 */}
        <InfoCard
          title="1. Face Detection"
          description="A CNN-based face detector analyzes the webcam feed, locating your face using key landmarks such as eyes, nose, mouth, and jawline."
          points={[
            "Real-time detection (30–60 FPS)",
            "Robust under lighting variations",
            "Runs locally with full privacy",
          ]}
        />

        {/* Step 2 */}
        <InfoCard
          title="2. Emotion Classification"
          description="Once your face is detected, our neural network predicts your emotional state using 7 universal facial expression categories."
          points={[
            "😊 Happy     • 😡 Angry  • 😢 Sad",
            "😮 Surprise  • 😐 Neutral",
            "😖 Disgust   • 😱 Fear",
          ]}
          delay={0.1}
        />
      </section>

      {/* =====================================================
          LIVE PREVIEW MOCKUP
      ===================================================== */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Live Webcam Preview</h2>
        <p className="text-neutral-400 mt-2 max-w-xl mx-auto">
          Stand in front of your webcam and let Moody detect your emotions in real-time.
        </p>

        <div className="mt-10 flex justify-center">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative w-full max-w-3xl h-72 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden"
  >
    {/* Webcam Icon (Top Left) */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-4 left-4 flex items-center gap-2"
    >
      <Camera className="w-6 h-6 text-blue-400" />
      <span className="text-sm text-neutral-400">Webcam Active</span>
    </motion.div>

    {/* Face Icon (Inside the focus box) */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="absolute w-32 h-44 rounded-2xl border border-purple-500/60 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]"
    >
      <User className="w-10 h-10 text-purple-300 mb-2" />
      <span className="text-neutral-400 text-sm">Align Your Face</span>
    </motion.div>

    {/* Center Text */}
    <p className="text-neutral-500 text-center">
     
    </p>
  </motion.div>
</div>

      </section>

      {/* =====================================================
          WHY IT MATTERS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

        <WhyCard title="⚡ Real-Time Accuracy" desc="Optimized models ensure smooth 30–60 FPS predictions on modern devices." />
        <WhyCard title="🔒 100% Private" desc="All processing happens locally. No cloud, no data uploads." />
        <WhyCard title="🎯 High Precision" desc="Trained on diverse image datasets to ensure stable emotional recognition." />

      </section>

    </div>
  );
}

/* =============== COMPONENTS =============== */

const FlowItem = ({ title, isLast }) => (
  <div className="flex flex-col items-center">
    {/* Box */}
    <div className="w-full bg-neutral-800 border border-neutral-700 text-center py-4 rounded-xl shadow-md">
      {title}
    </div>

    {/* Vertical line (hidden for last item) */}
    {!isLast && (
      <div className="h-6 w-1 bg-gradient-to-b from-purple-400 to-blue-400 mt-2"></div>
    )}
  </div>
);


function InfoCard({ title, description, points, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl backdrop-blur bg-white/5 border border-white/10"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-neutral-400 mt-3">{description}</p>

      <div className="mt-4 text-neutral-300 text-sm space-y-1">
        {points.map((p, i) => (
          <div key={i}>• {p}</div>
        ))}
      </div>
    </motion.div>
  );
}

function WhyCard({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-neutral-400 mt-2">{desc}</p>
    </motion.div>
  );
}
