
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Award, ShoppingBag, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Premium = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Silk Shirt',
      price: 159,
      colors: ['Pearl White', 'Champagne', 'Midnight Blue'],
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      exclusive: true
    },
    {
      id: 2,
      name: 'Luxury Cashmere Blazer',
      price: 299,
      colors: ['Charcoal', 'Navy', 'Camel'],
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      exclusive: true
    },
    {
      id: 3,
      name: 'Executive Wool Suit',
      price: 399,
      colors: ['Charcoal Gray', 'Navy Blue', 'Black'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      exclusive: true
    },
    {
      id: 4,
      name: 'Premium Leather Shoes',
      price: 249,
      colors: ['Black', 'Brown', 'Burgundy'],
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Luxury Timepiece',
      price: 599,
      colors: ['Silver', 'Gold', 'Rose Gold'],
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      exclusive: true
    },
    {
      id: 6,
      name: 'Italian Leather Briefcase',
      price: 349,
      colors: ['Black', 'Cognac', 'Dark Brown'],
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7
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
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Collections
              </Button>
            </Link>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              Premium <span className="text-luxury-pink">Series</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto leading-relaxed">
              Luxury fabrics and exclusive designs for discerning professionals. 
              Each piece is meticulously crafted using the finest materials and techniques.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-luxury-stone">
              <span>18 Items</span>
              <span>•</span>
              <span>$159 - $599</span>
              <span>•</span>
              <span>Luxury Quality</span>
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
                      <Award className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  {product.exclusive && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        EXCLUSIVE
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-luxury-pink mb-4">${product.price}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-luxury-stone mb-2">Premium Options:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className="text-xs bg-gradient-to-r from-luxury-cream to-gray-100 px-3 py-1 rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-charcoal mb-4">Premium Excellence</h2>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto">
              Experience the pinnacle of luxury fashion with our Premium Series.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Luxury Materials</h3>
              <p className="text-luxury-stone">
                Silk, cashmere, and premium wool sourced from the world's finest mills.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Master Craftsmanship</h3>
              <p className="text-luxury-stone">
                Hand-finished details and construction by skilled artisans.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Exclusive Access</h3>
              <p className="text-luxury-stone">
                Limited quantities and early access to new arrivals for premium members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Premium;
