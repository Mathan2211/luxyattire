
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Settings, Package, Heart, CreditCard, MapPin, ChevronRight, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Account Overview', icon: User, path: '/profile' },
    { id: 'settings', label: 'Account Settings', icon: Settings, path: '/account-settings' },
    { id: 'orders', label: 'Order History', icon: Package, path: '/order-history' },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, path: '/wishlist' },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard, path: '/payment-methods' },
    { id: 'addresses', label: 'Addresses', icon: MapPin, path: '/address-manager' }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-luxury-charcoal">
              My <span className="text-luxury-rose">Profile</span>
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
                  <div className="w-24 h-24 bg-luxury-rose rounded-full flex items-center justify-center mx-auto">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-luxury-charcoal">John Doe</h3>
                  <p className="text-luxury-stone">john.doe@example.com</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-luxury-stone">Premium Member</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-luxury-cream transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-luxury-plum group-hover:text-luxury-rose transition-colors" />
                          <span className="text-luxury-charcoal group-hover:text-luxury-rose transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-luxury-stone group-hover:text-luxury-rose transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content - Account Overview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-luxury-charcoal mb-8">Account Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-luxury-cream rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Package className="w-8 h-8 text-luxury-plum" />
                      <span className="text-2xl font-bold text-luxury-charcoal">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Recent Orders</h3>
                    <p className="text-luxury-stone mb-4">Your recent purchases</p>
                    <Link to="/order-history">
                      <Button variant="outline" className="w-full">View All Orders</Button>
                    </Link>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Heart className="w-8 h-8 text-luxury-rose" />
                      <span className="text-2xl font-bold text-luxury-charcoal">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Wishlist Items</h3>
                    <p className="text-luxury-stone mb-4">Items saved for later</p>
                    <Link to="/wishlist">
                      <Button variant="outline" className="w-full">View Wishlist</Button>
                    </Link>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Gift className="w-8 h-8 text-luxury-plum" />
                      <span className="text-2xl font-bold text-luxury-charcoal">1,250</span>
                    </div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Loyalty Points</h3>
                    <p className="text-luxury-stone mb-4">Available to redeem</p>
                    <Button variant="outline" className="w-full">Redeem Points</Button>
                  </div>
                  
                  <div className="p-6 bg-luxury-cream rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Star className="w-8 h-8 text-yellow-500" />
                      <span className="text-lg font-bold text-luxury-charcoal">Premium</span>
                    </div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Membership</h3>
                    <p className="text-luxury-stone mb-4">Enjoy exclusive benefits</p>
                    <Button variant="outline" className="w-full">View Benefits</Button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/order-history">
                      <Button variant="outline" className="w-full p-4 h-auto flex flex-col items-center space-y-2">
                        <Package className="w-6 h-6" />
                        <span className="text-sm">Track Order</span>
                      </Button>
                    </Link>
                    <Link to="/address-manager">
                      <Button variant="outline" className="w-full p-4 h-auto flex flex-col items-center space-y-2">
                        <MapPin className="w-6 h-6" />
                        <span className="text-sm">Add Address</span>
                      </Button>
                    </Link>
                    <Link to="/payment-methods">
                      <Button variant="outline" className="w-full p-4 h-auto flex flex-col items-center space-y-2">
                        <CreditCard className="w-6 h-6" />
                        <span className="text-sm">Payment</span>
                      </Button>
                    </Link>
                    <Link to="/account-settings">
                      <Button variant="outline" className="w-full p-4 h-auto flex flex-col items-center space-y-2">
                        <Settings className="w-6 h-6" />
                        <span className="text-sm">Settings</span>
                      </Button>
                    </Link>
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
