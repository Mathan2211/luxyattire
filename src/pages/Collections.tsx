
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Leaf, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Essential Collection',
      description: 'Timeless basics for every professional',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Star,
      itemCount: 24,
      priceRange: '79 - $99',
      link: '/collections/essential'
    },
    {
      id: 2,
      name: 'Premium Series',
      description: 'Luxury fabrics and exclusive designs',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Award,
      itemCount: 18,
      priceRange: '119 - $159',
      link: '/collections/premium'
    },
    {
      id: 3,
      name: 'Limited Edition',
      description: 'Seasonal drops and collaborations',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
      itemCount: 12,
      priceRange: '139 - $199',
      link: '/collections'
    },
    {
      id: 4,
      name: 'Sustainable Line',
      description: 'Eco-conscious fashion choices',
      image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Leaf,
      itemCount: 16,
      priceRange: '89 - $129',
      link: '/collections'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              Our <span className="text-luxury-pink">Collections</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collections, each designed to meet the unique needs 
              of modern professionals seeking style, comfort, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => {
              const IconComponent = collection.icon;
              return (
                <div key={collection.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-luxury-pink" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-luxury-charcoal mb-2">{collection.name}</h3>
                        <p className="text-luxury-stone">{collection.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm text-luxury-stone">
                        <p>{collection.itemCount} items</p>
                        <p className="font-semibold text-luxury-charcoal">₹{collection.priceRange}</p>
                      </div>
                    </div>
                    
                    <Link to={collection.link}>
                      <Button className="w-full bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white group-hover:bg-luxury-pink group-hover:hover:bg-luxury-pink/90 transition-all duration-300">
                        Explore Collection
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-luxury-charcoal">Featured Products</h2>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto">
              Handpicked favorites from across all our collections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-luxury-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1521572163474-6864f9cf17ab' : item === 2 ? '1586790170083-2f9ceadc732d' : '1618354691373-d851c5c3a990'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`Featured Product ${item}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Premium Professional Tee</h3>
                  <p className="text-2xl font-bold text-luxury-pink mb-4">$129</p>
                  <Button className="w-full bg-luxury-pink hover:bg-luxury-pink/90 text-white">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
