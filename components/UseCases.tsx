import React from "react";
import { Section } from "./ui/Section";
import { ShieldCheck, RefreshCw, Terminal } from "lucide-react";

export const UseCases: React.FC = () => {
  return (
    <Section
      id="platform"
      className="scroll-mt-24 bg-zairo-gray/20 border-y border-white/5"
    >
      <div className="text-center mb-16">
        <span className="block text-zairo-accent font-mono text-sm mb-4 tracking-widest uppercase">
          /// 03 — Application
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Where Zairo works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 overflow-hidden rounded-lg border border-white/10">
        {/* Card 1 */}
        <div className="bg-zairo-black p-12 flex flex-col items-center text-center group hover:bg-zairo-gray transition-colors">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Governance
          </h3>
          <p className="text-zairo-muted leading-relaxed">
            Enforce a visible, verifiable step between decision and execution —
            so changes can’t move in silence.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zairo-black p-12 flex flex-col items-center text-center group hover:bg-zairo-gray transition-colors">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Upgrades
          </h3>
          <p className="text-zairo-muted leading-relaxed">
            Make upgrades observable and time-locked — with a clear window to
            intervene before execution.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zairo-black p-12 flex flex-col items-center text-center group hover:bg-zairo-gray transition-colors">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <Terminal className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Admin Actions
          </h3>
          <p className="text-zairo-muted leading-relaxed">
            Remove “god mode” risk — privileged actions are announced, logged,
            and accountable by default.
          </p>
        </div>
      </div>
    </Section>
  );
};
