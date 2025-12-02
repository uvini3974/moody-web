import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<header className="w-full bg-[#14161a] border-b border-gray-800">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-black font-bold">⚡</div>
<h1 className="text-xl font-semibold text-white">MOODY</h1>
</div>


<nav className="flex items-center gap-6 text-gray-300">
<Link to="/" className="hover:text-white">Home</Link>
<Link to="/emotion" className="hover:text-white">Emotion</Link>
<Link to="/speech" className="hover:text-white">Voice</Link>
<Link to="/download" className="hover:text-white">Download</Link>
<Link to="/gestures" className="hover:text-white">Gestures</Link>
</nav>
</div>
</header>
)
}