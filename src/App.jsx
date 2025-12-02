import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home'
import Emotion from './pages/Emotion'
import Speech from './pages/Speech'
import Download from './pages/Download'
import Gestures from './pages/Gestures'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />


<main className="flex-1 container mx-auto px-6 py-8">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/emotion" element={<Emotion/>} />
<Route path="/speech" element={<Speech/>} />
<Route path="/download" element={<Download/>} />
<Route path="/gestures" element={<Gestures/>} />
</Routes>
</main>


<Footer />
</div>
)
}