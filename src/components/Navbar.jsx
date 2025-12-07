import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Settings } from "lucide-react";
import { useState, useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Emotion", path: "/emotion" },
    { label: "Voice", path: "/speech" },
    { label: "Gestures", path: "/gestures" },
    { label: "Download", path: "/download" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900/60 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
       <Link to="/">
  <motion.div 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3 cursor-pointer"
  >
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-black text-xl font-extrabold shadow-lg">
      ⚡
    </div>
    <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
      JARVIS
    </h1>
  </motion.div>
</Link>


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

        {/* USER PROFILE DROPDOWN (Desktop) */}
        <div className="hidden md:block relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition text-gray-300 hover:text-white"
          >
            <User size={20} />
            <span className="text-sm font-medium">{user?.name || user?.email || "User"}</span>
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 bg-neutral-800 border border-neutral-700 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-neutral-700">
                  <p className="text-sm text-gray-400">Signed in as</p>
                  <p className="text-sm font-medium text-white truncate">{user?.email}</p>
                </div>
                
                <div className="py-2">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/profile");
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-neutral-700 hover:text-white flex items-center gap-3 transition"
                  >
                    <Settings size={16} />
                    Profile Settings
                  </button>
                  
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      handleLogout();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-neutral-700 hover:text-red-300 flex items-center gap-3 transition"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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

            {/* Mobile User Actions */}
            <div className="border-t border-neutral-700 mt-4 pt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/profile");
                }}
                className="w-full py-3 text-lg text-left text-gray-300 hover:text-white flex items-center gap-3"
              >
                <Settings size={20} />
                Profile Settings
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="w-full py-3 text-lg text-left text-red-400 hover:text-red-300 flex items-center gap-3"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
