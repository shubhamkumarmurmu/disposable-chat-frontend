import { Ghost } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500/10 p-2 rounded-lg">
              <Ghost className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-white text-xl font-bold">Vanish</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-gray-500 text-sm">
            © 2024 Vanish. All messages vanish.
          </p>
        </div>
      </div>
    </footer>
  );
}
