import { Ghost, Clock, Shield, Trash2, Lock, Eye } from 'lucide-react';

const features = [
  {
    icon: Ghost,
    title: 'Stay Anonymous',
    description: 'No accounts, no emails, no phone numbers. Just you and your conversation partner.',
  },
  {
    icon: Clock,
    title: 'Auto-Destruct',
    description: 'Set a timer and watch your messages vanish. From 30 seconds to 24 hours.',
  },
  {
    icon: Shield,
    title: 'End-to-End Encrypted',
    description: 'Military-grade encryption ensures only you and your recipient can read the messages.',
  },
  {
    icon: Trash2,
    title: 'No Data Storage',
    description: "We don't store your messages. Once deleted, they're gone forever from our servers.",
  },
  {
    icon: Lock,
    title: 'Screenshot Alert',
    description: 'Get notified instantly if someone tries to capture your private conversation.',
  },
  {
    icon: Eye,
    title: 'View Once',
    description: 'Send photos and files that can only be viewed once before self-destructing.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Privacy by </span>
            <span className="text-cyan-400">Design</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every feature is built with your privacy as the top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border transition-all border-cyan-500/20 hover:scale-105`}
              >
                <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
