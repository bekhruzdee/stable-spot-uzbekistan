
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UpcomingCompetitions from '@/components/UpcomingCompetitions';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UpcomingCompetitions />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
