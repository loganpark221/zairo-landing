import React, { useState } from "react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { WAITLIST_URL } from "../constants";

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Section id="waitlist" className="scroll-mt-24 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 -z-10 bg-zairo-accent/10 blur-[120px] rounded-full" />

        <span className="block text-zairo-accent font-mono text-sm mb-4 tracking-widest uppercase">
          /// 05 — Access
        </span>

        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Request access.
        </h2>

        <p className="text-zairo-muted text-lg md:text-xl leading-relaxed mb-10">
          Early access for teams evaluating enforced intent disclosure and execution delays.
        </p>

        <div className="mx-auto max-w-xl flex flex-col sm:flex-row gap-3 items-stretch">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Work email"
            className="w-full px-5 py-4 bg-zairo-black/60 border border-white/10 rounded-lg text-white placeholder:text-white/30 outline-none focus:border-zairo-accent/60 focus:ring-2 focus:ring-zairo-accent/20"
          />

          <Button
            href={WAITLIST_URL}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            withIcon={true}
            className="rounded-lg justify-center"
          >
            Request access
          </Button>
        </div>

        <p className="mt-6 text-xs text-zairo-muted/70">
          No marketing. We only reach out when access is available.
        </p>
      </div>
    </Section>
  );
};
