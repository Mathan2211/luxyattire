
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Essential Professional Tee',
      color: 'Navy Blue',
      size: 'M',
      price: 89,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Premium Series Polo',
      color: 'Charcoal Gray',
      size: 'L',
      price: 129,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              Shopping <span className="text-luxury-pink">Cart</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto leading-relaxed">
              Review your selected items and proceed to checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-2xl"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-luxury-charcoal">{item.name}</h3>
                      <p className="text-luxury-stone">Color: {item.color} | Size: {item.size}</p>
                      <p className="text-2xl font-bold text-luxury-pink mt-2">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-xl font-semibold px-4">{item.quantity}</span>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
                <h2 className="text-2xl font-bold text-luxury-charcoal mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-luxury-stone">Subtotal</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-stone">Shipping</span>
                    <span className="font-semibold">${shipping}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-luxury-pink">${total}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-luxury-pink hover:bg-luxury-pink/90 text-white font-semibold py-3 text-lg">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <p className="text-sm text-luxury-stone text-center mt-4">
                  Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
