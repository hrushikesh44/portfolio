'use client'

import FloatingDock from "@/components/floating-dock";
import Hero from "@/components/hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

useEffect(() => {
  AOS.init({
    duration: 400, 
    once: true,    
  });
}, []);

  return (
    <div>
      <Hero />
      <div className="hidden sm:block">
        <FloatingDock />
      </div>
    </div>
  );
}
