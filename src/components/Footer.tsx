
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay in Style</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and professional style tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-luxury-pink hover:bg-luxury-pink/90 text-white font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <Link to="/">
                <h2 className="text-2xl font-bold tracking-tight">
                  Luxy<span className="text-luxury-pink">Attire</span>
                </h2>
              </Link>
              <p className="text-gray-300 mt-4">
                Redefining professional style with premium t-shirts designed for the modern workplace.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-luxury-pink">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-luxury-pink">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-luxury-pink">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Essential Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Premium Series</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Limited Edition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Sustainable Line</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Best Sellers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">FAQ</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-luxury-pink transition-colors duration-200">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-luxury-pink" />
                <span className="text-gray-300">hello@luxyattire.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-luxury-pink" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-luxury-pink mt-1" />
                <span className="text-gray-300">
                  123 Fashion District<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 LuxyAttire. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-luxury-pink transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-luxury-pink transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-luxury-pink transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
