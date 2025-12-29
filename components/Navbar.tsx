import React from 'react';
import { WAITLIST_URL } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-zairo-black/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-tighter">
          ZAIRO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-zairo-muted">
          <a href="#mission" className="hover:text-white transition-colors">Mission</a>
          <a href="#gap" className="hover:text-white transition-colors">Why</a>
          <a href="#application" className="hover:text-white transition-colors">Platform</a>
        </div>
        <a 
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all"
        >
          Waitlist
        </a>
      </div>
    </nav>
  );
};