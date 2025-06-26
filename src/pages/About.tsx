
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              About <span className="text-luxury-pink">LuxyAttire</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto leading-relaxed">
              We're redefining professional style with premium t-shirts designed for the modern workplace. 
              Our mission is to create comfortable, sophisticated clothing that empowers professionals to look and feel their best.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-luxury-charcoal">Our Story</h2>
              <p className="text-luxury-stone leading-relaxed">
                Founded in 2020, LuxyAttire began with a simple vision: to create premium t-shirts that bridge the gap between comfort and professionalism. We noticed that modern workplaces were evolving, but professional attire wasn't keeping pace.
              </p>
              <p className="text-luxury-stone leading-relaxed">
                Our team of designers and fashion experts worked tirelessly to develop fabrics and cuts that feel like weekend wear but look sophisticated enough for the boardroom. Today, we're proud to serve over 50,000 professionals worldwide.
              </p>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our design studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-luxury-charcoal">Our Values</h2>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-luxury-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal">Quality</h3>
              <p className="text-luxury-stone">We use only the finest materials and craftsmanship in every piece we create.</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-luxury-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-luxury-teal rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal">Sustainability</h3>
              <p className="text-luxury-stone">Committed to eco-friendly practices and responsible manufacturing processes.</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-luxury-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-luxury-navy rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal">Community</h3>
              <p className="text-luxury-stone">Building a community of professionals who value style, comfort, and authenticity.</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-luxury-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal">Passion</h3>
              <p className="text-luxury-stone">Every design is crafted with love and attention to detail that shows.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
