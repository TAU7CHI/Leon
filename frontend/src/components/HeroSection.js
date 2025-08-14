import React from 'react';
import { ArrowRight, Play, Volume2, Waves } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Animated Sound Waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-full animate-pulse opacity-30"
                style={{
                  height: `${Math.random() * 100 + 50}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium backdrop-blur-sm">
            <Volume2 size={16} className="mr-2" />
            Professional Audio Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Elevate Your</span>
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Audio Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premier sound system installation for events, venues, and professional spaces. 
            We deliver crystal-clear audio solutions that captivate audiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={() => scrollToSection('#services')}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 group"
            >
              Explore Services
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#gallery')}
              variant="outline"
              size="lg"
              className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-1/2 left-10 text-teal-500/30 animate-bounce delay-300">
            <Waves size={32} />
          </div>
          <div className="absolute top-1/3 right-10 text-teal-500/30 animate-bounce delay-700">
            <Volume2 size={28} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;