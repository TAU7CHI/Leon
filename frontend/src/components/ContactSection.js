import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-AUDIO",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@sonicsetups.com",
      subtext: "24/7 Support"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Audio Street, Sound City",
      subtext: "SC 12345"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 Hours",
      subtext: "Guaranteed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Create Something
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to elevate your audio experience? Get in touch with our team of experts 
            and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300">
                        <IconComponent size={24} className="text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-teal-400 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-400 mt-1">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  Get Your Free Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <Input
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                        placeholder="e.g., Event Audio, Venue Install"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 resize-none"
                      placeholder="Tell us about your project, venue size, expected audience, special requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 group"
                  >
                    Send Message
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;