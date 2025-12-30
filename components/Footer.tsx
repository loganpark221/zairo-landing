import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-24 px-6 text-center bg-zairo-black border-t border-white/10">
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-zairo-accent/15 blur-[160px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-zairo-muted text-xs uppercase tracking-widest">
          <span>© {year} Zairo Systems</span>

          {/* 링크는 일단 placeholder. 나중에 실제 URL로 교체 */}
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a
            href="mailto:hello@zairo.xyz"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
