import React from 'react';
import { Section } from './ui/Section';
import { EyeOff, AlertTriangle, GitCommit } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="gap" className="relative">
      <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
        <EyeOff size={400} strokeWidth={0.5} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="block text-zairo-accent font-mono text-sm mb-6 tracking-widest uppercase">
             /// 02 — The Gap
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
            Silence is a <br/>liability.
          </h2>
        </div>
        <div>
          <p className="text-xl text-zairo-text leading-relaxed mb-6">
            Modern infrastructure is automated, fast, and powerful.
            But speed often comes at the cost of visibility.
            <br/><br/>
            Silent updates, undocumented admin actions,
            and configuration drift create blind spots over time.
          </p>
          <p className="text-xl text-zairo-muted leading-relaxed">
            When execution is disconnected from intent,
            you lose the ability to answer the most important question:
            <br/>
            <em>Who changed what — and why?</em>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {[
          {
            icon: <EyeOff className="w-8 h-8 text-zairo-accent" />,
            title: "Invisible Drift",
            desc: "Small, untracked changes accumulate until systems behave in ways no one intended."
          },
          {
            icon: <AlertTriangle className="w-8 h-8 text-zairo-accent" />,
            title: "Zero Accountability",
            desc: "When actions leave no trace, governance becomes theoretical. You cannot audit what you cannot see."
          },
          {
            icon: <GitCommit className="w-8 h-8 text-zairo-accent" />,
            title: "Disconnected State",
            desc: "Reality diverges from documentation, and trust erodes quietly."
          }
        ].map((item, i) => (
          <div key={i} className="bg-zairo-gray/30 border border-white/5 p-8 hover:border-zairo-accent/50 transition-colors duration-300">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
            <p className="text-zairo-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};