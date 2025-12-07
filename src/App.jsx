import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Emotion from './pages/Emotion'
import Speech from './pages/Speech'
import Download from './pages/Download'
import Gestures from './pages/Gestures'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">

      {!hideLayout && <Navbar />}

      <main className="flex-1 container mx-auto px-6 py-8">
        <Routes>

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>

          <Route path="/emotion" element={
            <ProtectedRoute>
              <Emotion />
            </ProtectedRoute>
          }/>

          <Route path="/speech" element={
            <ProtectedRoute>
              <Speech />
            </ProtectedRoute>
          }/>

          <Route path="/gestures" element={
            <ProtectedRoute>
              <Gestures />
            </ProtectedRoute>
          }/>

          <Route path="/download" element={
            <ProtectedRoute>
              <Download />
            </ProtectedRoute>
          }/>

          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }/>

        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
