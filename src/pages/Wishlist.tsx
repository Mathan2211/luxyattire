
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: '₹1,299',
      originalPrice: '₹1,599',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      inStock: true
    },
    {
      id: 2,
      name: 'Business Casual Polo',
      price: '₹1,899',
      originalPrice: '₹2,199',
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400',
      inStock: true
    },
    {
      id: 3,
      name: 'Executive Dress Shirt',
      price: '₹2,499',
      originalPrice: '₹2,999',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
      inStock: false
    }
  ];

  const removeFromWishlist = (id: number) => {
    console.log('Removing item from wishlist:', id);
    // Add remove logic here
  };

  const addToCart = (id: number) => {
    console.log('Adding item to cart:', id);
    // Add to cart logic here
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-luxury-charcoal mb-2">My Wishlist</h1>
            <p className="text-luxury-stone">Items you've saved for later</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <X className="w-4 h-4 text-luxury-charcoal" />
                  </Button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-luxury-charcoal font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{item.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-luxury-plum">{item.price}</span>
                    <span className="text-luxury-stone line-through">{item.originalPrice}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-luxury-plum hover:bg-luxury-plum/90"
                      disabled={!item.inStock}
                      onClick={() => addToCart(item.id)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {wishlistItems.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-luxury-stone mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Your wishlist is empty</h3>
              <p className="text-luxury-stone mb-6">Save items you love for later</p>
              <Button className="bg-luxury-plum hover:bg-luxury-plum/90">
                Start Shopping
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
