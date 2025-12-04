import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Emotion", path: "/emotion" },
    { label: "Voice", path: "/speech" },
    { label: "Gestures", path: "/gestures" },
    { label: "Download", path: "/download" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900/60 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-black text-xl font-extrabold shadow-lg">
            ⚡
          </div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            MOODY
          </h1>
        </motion.div>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition ${
                pathname === item.path ? "text-white" : "hover:text-white"
              }`}
            >
              {item.label}

              {/* Animated underline */}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-900/90 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-4 text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`py-3 text-lg transition ${
                  pathname === item.path ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
