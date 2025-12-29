import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { WAITLIST_URL } from '../constants';

export const Mission: React.FC = () => {
  return (
    <Section id="mission" className="min-h-[80vh] flex flex-col justify-center border-b border-white/5">
      <div className="max-w-4xl">
        <span className="block text-zairo-accent font-mono text-sm mb-6 tracking-widest uppercase">
          /// 01 — Mission
        </span>
        <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
          ZAIRO
        </h1>
        <h2 className="text-3xl md:text-5xl font-light text-white mb-12 leading-tight">
          Nothing moves <span className="text-zairo-muted italic font-serif">quietly</span>.
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
          <p className="text-lg md:text-xl text-zairo-muted max-w-lg leading-relaxed">
            Zairo exists to make critical changes observable before they happen.
            <br/><br/>
            In complex systems, decisions are often separated from execution.
            Zairo reconnects them — introducing visibility, delay, and verification
            at the moment it matters most.
            <br/><br/>
            Changes don’t disappear into logs.
            They happen in the open.
          </p>
          <Button onClick={() => window.open(WAITLIST_URL, '_blank')}>
            Join the waitlist
          </Button>
        </div>
      </div>
    </Section>
  );
};