import React from "react";
import { Section } from "./ui/Section";
import { EyeOff, AlertTriangle, GitCommit } from "lucide-react";

export const Problem: React.FC = () => {
  const cards = [
    {
      icon: <EyeOff className="w-8 h-8 text-zairo-accent" />,
      title: "Unreported Changes",
      desc: "Small changes ship quietly. Over time, the system drifts — and the point of change is no longer recoverable from memory.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-zairo-accent" />,
      title: "No Audit Trail",
      desc: "Privileged actions without durable records turn governance into interpretation. You cannot verify what was never recorded.",
    },
    {
      icon: <GitCommit className="w-8 h-8 text-zairo-accent" />,
      title: "Intent–Execution Gap",
      desc: "Documentation says one thing. Execution does another. The gap persists until an incident forces it into view.",
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
            Modern systems ship changes quickly — often faster than teams can
            review, document, or communicate.
          </p>

          <p className="text-xl text-zairo-text leading-relaxed">
            Undisclosed updates and privileged admin actions create blind spots
            that compound over time.
          </p>

          <p className="text-xl text-zairo-muted leading-relaxed">
            When execution is separated from intent, you lose the ability to
            answer the only question that matters:
            <br />
            <em>What changed — who approved it — and when does it execute?</em>
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
            <p className="text-zairo-muted text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
