import React from "react";
import { Section } from "./ui/Section";
import { Check, X } from "lucide-react";

export const Definition: React.FC = () => {
  return (
    <Section
      id="definition"
      className="scroll-mt-24 bg-zairo-dark border-y border-white/5 text-zairo-text"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* What it is */}
        <div>
          <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3 text-white">
            <div className="w-8 h-8 bg-zairo-accent/20 text-zairo-accent rounded-full flex items-center justify-center border border-zairo-accent/20">
              <Check size={18} />
            </div>
            What Zairo Is
          </h3>

          <ul className="space-y-6">
            {[
              "A change-control layer between intent and execution.",
              "A public, tamper-resistant record of protocol changes.",
              "Mandatory timelocks for administrative actions.",
              "A thin integration layer for existing systems.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-lg font-medium border-b border-white/5 pb-5"
              >
                <span className="text-zairo-accent font-mono text-sm pt-1">
                  0{i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What it is not */}
        <div>
          <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3 text-zairo-muted">
            <div className="w-8 h-8 border border-white/10 text-zairo-muted rounded-full flex items-center justify-center">
              <X size={18} />
            </div>
            What Zairo Is Not
          </h3>

          <ul className="space-y-6">
            {[
              "A wallet, token, or custody product.",
              "A replacement for governance or security processes.",
              "A new chain or execution environment.",
              "A full control plane or operations dashboard.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-lg text-zairo-muted border-b border-white/5 pb-5"
              >
                <span className="text-zairo-muted/40 font-mono text-sm pt-1">
                  0{i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
