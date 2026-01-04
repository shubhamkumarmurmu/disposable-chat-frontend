import { Shield, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-8 right-8 bg-cyan-500/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Your privacy matters</span>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Chat </span>
              <span className="text-cyan-400">Privately?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who've made the switch to ephemeral messaging. No download required. Start in seconds.
            </p>

            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 inline-flex items-center gap-2 group">
              Create Private Room
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-gray-500 text-sm mt-6">
              Free forever. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
