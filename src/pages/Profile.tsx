
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Settings, Package, Heart, CreditCard, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              My <span className="text-luxury-pink">Profile</span>
            </h1>
            <p className="text-xl text-luxury-stone max-w-2xl mx-auto leading-relaxed">
              Manage your account, view order history, and update your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="text-center space-y-4 mb-8">
                  <div className="w-24 h-24 bg-luxury-pink rounded-full flex items-center justify-center mx-auto">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-luxury-charcoal">John Doe</h3>
                  <p className="text-luxury-stone">john.doe@example.com</p>
                </div>
                
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="w-5 h-5 mr-3" />
                    Account Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Package className="w-5 h-5 mr-3" />
                    Order History
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="w-5 h-5 mr-3" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="w-5 h-5 mr-3" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MapPin className="w-5 h-5 mr-3" />
                    Addresses
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-luxury-charcoal mb-8">Account Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-luxury-cream rounded-2xl">
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Recent Orders</h3>
                    <p className="text-luxury-stone mb-4">You have 3 recent orders</p>
                    <Button variant="outline">View All Orders</Button>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl">
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Wishlist Items</h3>
                    <p className="text-luxury-stone mb-4">5 items saved for later</p>
                    <Button variant="outline">View Wishlist</Button>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl">
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Loyalty Points</h3>
                    <p className="text-luxury-stone mb-4">You have 1,250 points</p>
                    <Button variant="outline">Redeem Points</Button>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl">
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Membership</h3>
                    <p className="text-luxury-stone mb-4">Premium Member</p>
                    <Button variant="outline">View Benefits</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
