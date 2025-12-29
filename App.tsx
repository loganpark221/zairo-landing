import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Problem } from './components/Problem';
import { UseCases } from './components/UseCases';
import { Integration } from './components/Integration';
import { Definition } from './components/Definition';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Waitlist } from './components/Waitlist';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zairo-black text-zairo-text font-sans selection:bg-zairo-accent selection:text-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Mission />
        <Problem />
        <UseCases />
        <Integration />
        <Definition />
        <Waitlist /> 
      </main>

      <Footer />
    </div>
  );
}