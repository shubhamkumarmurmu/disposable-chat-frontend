import { Link, MessageSquare, Clock, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Create a Room',
    description: 'Generate a unique, one-time link for your private conversation. Share it only with people you trust.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Start Chatting',
    description: 'Send messages, photos, and files instantly. Everything is encrypted the moment you type.',
  },
  {
    number: '03',
    icon: Clock,
    title: 'Set Expiry',
    description: 'Choose when your messages disappear. After the timer runs out, everything vanishes.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Poof, Gone!',
    description: 'Messages self-destruct automatically. No archives, no backups, no way to recover.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It </span>
            <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Start a private conversation in seconds
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute left-7 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-800/50 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center border border-cyan-500/30">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-sm font-semibold mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
