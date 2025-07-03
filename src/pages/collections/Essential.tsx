
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Star, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Essential = () => {
  const products = [
    {
      id: 1,
      name: 'Essential Professional Tee',
      price: 89,
      colors: ['Navy Blue', 'Charcoal Gray', 'White'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Classic Business Shirt',
      price: 99,
      colors: ['White', 'Light Blue', 'Gray'],
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Essential Blazer',
      price: 199,
      colors: ['Navy', 'Charcoal', 'Black'],
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Professional Chinos',
      price: 129,
      colors: ['Khaki', 'Navy', 'Gray'],
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Essential Dress Shirt',
      price: 89,
      colors: ['White', 'Blue', 'Pink'],
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Classic Polo',
      price: 79,
      colors: ['Navy', 'White', 'Gray'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/collections">
              <Button variant="ghost" size="sm" className='bg-transparent text-black hover:bg-transparent hover:text-black'>
                <ArrowLeft className="w-4 h-4 mr-2 " />
                Back to Collections
              </Button>
            </Link>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              Essential <span className="text-luxury-pink">Collection</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto leading-relaxed">
              Timeless basics for every professional. These versatile pieces form the foundation 
              of a sophisticated wardrobe, designed to mix and match effortlessly.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-luxury-stone">
              <span>24 Items</span>
              <span>•</span>
              <span>₹79 - $199</span>
              <span>•</span>
              <span>Free Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-luxury-pink mb-4">₹{product.price}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-luxury-stone mb-2">Available Colors:</p>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className="text-xs bg-luxury-cream px-2 py-1 rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white group-hover:bg-luxury-pink group-hover:hover:bg-luxury-pink/90 transition-all duration-300">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-charcoal mb-4">Why Choose Essential?</h2>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto">
              Built for professionals who value quality, comfort, and timeless style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Premium Materials</h3>
              <p className="text-luxury-stone">
                Crafted from the finest fabrics for lasting comfort and durability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Versatile Design</h3>
              <p className="text-luxury-stone">
                Mix and match pieces that work from office to evening events.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Perfect Fit</h3>
              <p className="text-luxury-stone">
                Tailored cuts designed for the modern professional silhouette.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Essential;
