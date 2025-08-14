import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;