import React from 'react';
import { mockData } from '../mock';

const StatsSection = () => {
  return (
    <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-teal-400 font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
                {/* Animated underline */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;