
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search as SearchIcon, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const searchResults = [
    {
      id: 1,
      name: 'Essential Professional Tee',
      price: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Essential Collection'
    },
    {
      id: 2,
      name: 'Premium Series Polo',
      price: 129,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Premium Series'
    },
    {
      id: 3,
      name: 'Limited Edition Henley',
      price: 149,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Limited Edition'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Search Header */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              Search <span className="text-luxury-pink">Products</span>
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-stone w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-luxury-stone/20 focus:border-luxury-pink"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-luxury-pink hover:bg-luxury-pink/90 rounded-full">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <span className="text-luxury-stone">
                Showing {searchResults.length} results
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Grid */}
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {searchResults.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-luxury-pink font-medium mb-2">{product.category}</p>
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-luxury-pink mb-4">${product.price}</p>
                  <Button className="w-full bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white">
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

export default Search;
