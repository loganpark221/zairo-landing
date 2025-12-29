import React from "react";
import { Button } from "./ui/Button";
import { WAITLIST_URL } from "../constants";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-24 px-6 text-center bg-zairo-black border-t border-white/10">
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-zairo-accent/15 blur-[160px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          Nothing moves <br /> quietly.
        </h2>

        <p className="text-lg md:text-xl text-zairo-muted mb-10 leading-relaxed">
          Get early access to Zairo and follow the project as it ships in public.
        </p>

        {/* ✅ CTA는 외부 WAITLIST_URL로 "하나만" */}
        <div className="flex items-center justify-center">
          <Button
            href={WAITLIST_URL}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            withIcon={true}
            className="px-10 py-4"
          >
            Join the waitlist
          </Button>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-zairo-muted text-xs uppercase tracking-widest">
          <span>© {year} Zairo Systems</span>

          {/* 링크는 일단 placeholder. 나중에 실제 URL로 교체 */}
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="mailto:hello@zairo.xyz" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
