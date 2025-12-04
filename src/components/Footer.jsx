import { Link } from "react-router-dom";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-12 pb-8 mt-20 border-t border-neutral-800">

      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500 mb-10 opacity-60"></div>

      <div className="container mx-auto px-6 text-center">

        {/* Brand */}
        <h2 className="text-2xl font-semibold text-white">
          MOODY
        </h2>
        <p className="text-neutral-500 mt-1">
          AI Multimodal Emotion & Speech Control System
        </p>

       

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a className="hover:text-white transition" href="#"><Facebook size={20} /></a>
          <a className="hover:text-white transition" href="#"><Instagram size={20} /></a>
          <a className="hover:text-white transition" href="#"><Github size={20} /></a>
          <a className="hover:text-white transition" href="#"><Linkedin size={20} /></a>
        </div>

        {/* Copyright */}
        <p className="text-neutral-600 text-sm mt-8">
          © 2025 Moody — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
