import React from "react";
import { Button } from "./ui/Button";
import { WAITLIST_URL } from "../constants";

export const Navbar: React.FC<{ isScrolled?: boolean }> = ({ isScrolled }) => {
  const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const bg = isScrolled
    ? "bg-zairo-black/80 backdrop-blur border-b border-white/10"
    : "bg-transparent";

  const link =
    "text-xs md:text-sm uppercase tracking-widest text-zairo-muted hover:text-white transition-colors";

  return (
    <header className={`${base} ${bg}`}>
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#mission"
          className="font-display tracking-widest text-white py-2"
        >
          ZAIRO
        </a>

        {/* Center: Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <a className={link} href="#mission">
            Mission
          </a>
          <a className={link} href="#why">
            Why
          </a>
          <a className={link} href="#platform">
            Platform
          </a>
          <a className={link} href="#integration">
            Integration
          </a>
          <a className={link} href="#definition">
            Definition
          </a>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-4">
          {/* Mobile quick-jump (가볍게 2개만) */}
          <nav className="flex md:hidden items-center gap-4">
            <a className={link} href="#why">
              Why
            </a>
            <a className={link} href="#platform">
              Platform
            </a>
          </nav>

          <Button
            href={WAITLIST_URL}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            withIcon={false}
            className="px-5 py-2"
          >
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};
