import React from "react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { WAITLIST_URL } from "../constants";

export const Mission: React.FC = () => {
  return (
    <Section
      id="mission"
      className="scroll-mt-24 min-h-[80vh] flex flex-col justify-center border-b border-white/5"
    >
      <div className="max-w-4xl">
        <span className="block text-zairo-accent font-mono text-sm mb-6 tracking-widest uppercase">
          /// 01 — Mission
        </span>

        <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
          ZAIRO
        </h1>

        <h2 className="text-3xl md:text-5xl font-light text-white mb-12 leading-tight">
          Nothing moves{" "}
          <span className="text-zairo-muted italic font-serif">quietly</span>.
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
          <div className="text-lg md:text-xl text-zairo-muted max-w-lg leading-relaxed space-y-6">
            <p>
              Zairo makes critical protocol changes observable{" "}
              <span className="text-white/90">before they execute</span>.
            </p>

            <p>
              In complex systems, decisions drift away from execution. Zairo
              reconnects them — introducing{" "}
              <span className="text-white/90">visibility</span>,{" "}
              <span className="text-white/90">delay</span>, and{" "}
              <span className="text-white/90">verification</span> at the moment it
              matters most.
            </p>

            <p>Changes don’t disappear into logs. They happen in the open.</p>
          </div>

          <Button
            href={WAITLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="min-w-[220px] justify-center"
          >
            Join the waitlist
          </Button>
        </div>
      </div>
    </Section>
  );
};
