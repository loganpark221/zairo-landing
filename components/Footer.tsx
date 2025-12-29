import React, { useState } from 'react';
import { Button } from './ui/Button';
import { WAITLIST_URL } from '../constants';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `${WAITLIST_URL}?prefill_Email=${encodeURIComponent(email)}`;
    } else {
      window.location.href = WAITLIST_URL;
    }
  };

  return (
    <footer id="join" className="relative py-32 px-6 flex flex-col items-center justify-center text-center bg-zairo-black border-t border-white/10">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zairo-accent/20 blur-[150px] rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
          Nothing moves <br/> quietly.
        </h2>
        <p className="text-xl text-zairo-muted mb-12">
          Join the waitlist to get early access to Zairo
          and follow the project as it develops in public.
        </p>
        
        <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
             <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-zairo-accent focus:bg-white/10 transition-all rounded-none"
             />
          </div>
          <Button type="submit" className="w-full bg-zairo-accent hover:bg-white hover:text-black border-none text-white">
            Join the Waitlist
          </Button>
        </form>

        <div className="mt-24 text-zairo-muted text-xs uppercase tracking-widest flex gap-8 justify-center">
           <span>© 2024 Zairo Systems</span>
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};