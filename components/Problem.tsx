import React from "react";
import { Section } from "./ui/Section";
import { EyeOff, AlertTriangle, GitCommit } from "lucide-react";

export const Problem: React.FC = () => {
  const cards = [
    {
      icon: <EyeOff className="w-8 h-8 text-zairo-accent" />,
      title: "Invisible Drift",
      desc: "Small, untracked changes compound until systems behave in ways no one intended — and nobody can pinpoint the moment it happened.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-zairo-accent" />,
      title: "Zero Accountability",
      desc: "When privileged actions leave no durable trace, governance becomes theater. You can’t audit what you can’t observe.",
    },
    {
      icon: <GitCommit className="w-8 h-8 text-zairo-accent" />,
      title: "Disconnected State",
      desc: "Reality diverges from documentation, and trust erodes quietly — right up until the incident forces it into the open.",
    },
  ];

  return (
    <Section id="why" className="scroll-mt-24 relative">
      <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
        <EyeOff size={400} strokeWidth={0.5} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="block text-zairo-accent font-mono text-sm mb-6 tracking-widest uppercase">
            /// 02 — The Gap
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
            Silence is a <br />
            liability.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-xl text-zairo-text leading-relaxed">
            Modern infrastructure is automated, fast, and powerful — but speed
            often comes at the cost of visibility.
          </p>

          <p className="text-xl text-zairo-text leading-relaxed">
            Silent updates, undocumented admin actions, and configuration drift
            create blind spots over time.
          </p>

          <p className="text-xl text-zairo-muted leading-relaxed">
            When execution is disconnected from intent, you lose the ability to
            answer the most important question:
            <br />
            <em>Who changed what — and why?</em>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-zairo-gray/30 border border-white/5 p-8 hover:border-zairo-accent/50 transition-colors duration-300"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">
              {item.title}
            </h3>
            <p className="text-zairo-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
