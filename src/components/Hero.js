import { MessageSquare, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span className="text-gray-400 text-sm">Messages that vanish into thin air</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
          <span className="text-white">Chat. </span>
          <span className="text-cyan-400">Disappear.</span>
          <br />
          <span className="text-gray-500">Repeat.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Send messages that self-destruct. No accounts, no history, no trace.
          Just pure, ephemeral conversations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 group">
            <MessageSquare className="w-5 h-5" />
            Start Chatting
          </button>
          <button className="border-2 border-gray-700 hover:border-cyan-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2">
            <Zap className="w-5 h-5" />
            See How It Works
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-400">No registration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-400">End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-400">Auto-delete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
