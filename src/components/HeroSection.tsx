
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-cream via-white to-luxury-cream">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-luxury-rose/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-luxury-plum/15 rounded-full blur-3xl animate-bounce-subtle"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-luxury-maroon/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-luxury-rose animate-glow" />
                <p className="text-luxury-rose font-semibold tracking-wider uppercase text-sm">
                  Premium Fashion Forward
                </p>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-shadow-luxury">
                <span className="text-luxury-charcoal">Luxe</span>
                <span className="block text-luxury-plum bg-clip-text bg-gradient-to-r from-luxury-plum to-luxury-maroon">T-Shirts</span>
                <span className="block text-3xl lg:text-5xl font-light text-luxury-stone mt-4">
                  Redefining Professional Style
                </span>
              </h1>
              <p className="text-xl text-luxury-stone max-w-xl leading-relaxed">
                Discover our exclusive collection of premium t-shirts crafted for modern professionals who demand both comfort and sophistication in their wardrobe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="rose-gradient hover:plum-gradient text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Brand Story
              </Button>
            </div>

            {/* Enhanced social proof */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-bold text-luxury-rose text-3xl">50K+</div>
                <div className="text-luxury-stone text-sm">Happy Customers</div>
              </div>
              <div className="p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-bold text-luxury-plum text-3xl">4.9★</div>
                <div className="text-luxury-stone text-sm">Average Rating</div>
              </div>
              <div className="p-4 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-bold text-luxury-maroon text-3xl">100%</div>
                <div className="text-luxury-stone text-sm">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced Hero image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main product image with real t-shirt image */}
              <div className="aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Premium T-Shirt Collection"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl animate-scale-in border border-luxury-rose/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-luxury-rose">$89</div>
                  <div className="text-sm text-luxury-stone">Premium Quality</div>
                  <div className="text-xs text-luxury-rose font-medium">Limited Edition</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 plum-gradient rounded-2xl p-6 shadow-xl animate-scale-in">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">NEW</div>
                  <div className="text-sm">2024 Collection</div>
                  <div className="text-xs opacity-90">Just Arrived</div>
                </div>
              </div>

              {/* Additional floating badge */}
              <div className="absolute top-6 left-6 bg-luxury-rose text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-subtle">
                Best Seller
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
