
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream via-white to-luxury-cream"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-luxury-charcoal/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-luxury-gold font-medium tracking-wider uppercase text-sm">
                Redefining Professional Style
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-luxury-charcoal leading-tight text-shadow-luxury">
                Elevated
                <span className="block text-luxury-gold">T-Shirts</span>
                <span className="block text-3xl lg:text-4xl font-light text-luxury-stone mt-2">
                  for Modern Professionals
                </span>
              </h1>
              <p className="text-xl text-luxury-stone max-w-xl">
                Discover our curated collection of premium t-shirts designed specifically for young professionals who value both comfort and sophistication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white font-medium px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white font-medium px-8 py-4 rounded-md transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-8 text-sm text-luxury-stone justify-center lg:justify-start">
              <div className="text-center">
                <div className="font-bold text-luxury-charcoal text-2xl">25K+</div>
                <div>Happy Professionals</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-luxury-charcoal text-2xl">4.9★</div>
                <div>Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-luxury-charcoal text-2xl">100%</div>
                <div>Sustainable Materials</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main product image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl hover-lift">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-luxury-charcoal/5 to-luxury-gold/5 flex items-center justify-center">
                  <div className="text-center text-luxury-stone">
                    <div className="text-6xl mb-4">👔</div>
                    <p className="text-lg font-medium">Premium T-Shirt</p>
                    <p className="text-sm">Professional Collection</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-scale-in">
                <div className="text-center">
                  <div className="text-luxury-gold font-bold">$89</div>
                  <div className="text-xs text-luxury-stone">Premium Quality</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-luxury-gold rounded-full p-4 shadow-lg animate-scale-in">
                <div className="text-center text-white">
                  <div className="font-bold">NEW</div>
                  <div className="text-xs">Collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
