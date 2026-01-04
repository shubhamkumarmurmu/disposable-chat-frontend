import { Ghost } from 'lucide-react';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500/10 p-2 rounded-lg">
              <Ghost className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-white text-xl font-bold">Vanish</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
          </nav>

          <div className='flex items-center'>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors"
            onClick={() => navigate('/signup')}>
            Start Chat
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}
