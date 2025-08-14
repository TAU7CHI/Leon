import React from 'react';
import { Music, Building, Users, Mic, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

const ServicesSection = () => {
  const iconMap = {
    music: Music,
    building: Building,
    users: Users,
    mic: Mic
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Audio 
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            From intimate venues to massive festivals, we deliver professional audio experiences 
            that elevate every event and space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card key={service.id} className="group bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300">
                      <IconComponent size={32} className="text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-teal-500 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 group/btn"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl border border-teal-500/20 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to Transform Your Audio Experience?
              </h3>
              <p className="text-gray-300">
                Contact us for a custom quote tailored to your specific needs.
              </p>
            </div>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 whitespace-nowrap"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;