import React from "react";
import { Section } from "./ui/Section";

export const Integration: React.FC = () => {
  return (
    <Section id="integration" className="scroll-mt-24 py-32">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Abstract Representation of Integration */}
            <div className="absolute inset-0 bg-zairo-accent/20 blur-[100px] rounded-full" />
            <div className="relative border border-white/10 bg-zairo-black/50 backdrop-blur-sm p-8 rounded-xl space-y-4">
              <div className="flex items-center gap-4 text-zairo-muted border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-mono ml-auto">
                  existing_stack.config
                </span>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-gray-500">01</span>
                  <span className="text-purple-400">source</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">"input_stream"</span>
                </div>

                <div className="flex gap-4 bg-zairo-accent/10 -mx-8 px-8 border-l-2 border-zairo-accent">
                  <span className="text-zairo-accent">02</span>
                  <span className="text-zairo-accent font-bold">
                    + zairo_bridge.enforce()
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="text-gray-500">03</span>
                  <span className="text-purple-400">execute</span>
                  <span className="text-white">()</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="block text-zairo-accent font-mono text-sm mb-6 tracking-widest uppercase">
            /// 04 — Integration
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
            Integrates without migration.
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-zairo-muted leading-relaxed">
              Zairo does not replace your stack. It sits between intent and
              execution.
            </p>

            <p className="text-lg text-zairo-text leading-relaxed">
              Integrate with existing governance flows, deployment pipelines,
              and execution points — then enforce disclosure and delays where
              changes matter.
            </p>

            <p className="text-lg text-zairo-text leading-relaxed">
              Keep your tooling. Zairo adds a public record and a mandatory
              execution window.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
