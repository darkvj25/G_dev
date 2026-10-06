import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Team from './components/Team';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Team />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
