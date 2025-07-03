
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Plus, Edit, Trash2, Home, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddressManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      phone: '+91 9876543210',
      isDefault: true,
      icon: Home
    },
    {
      id: 2,
      type: 'Office',
      name: 'John Doe',
      address: '456 Business Park, Tower A, Floor 10',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400070',
      phone: '+91 9876543210',
      isDefault: false,
      icon: Building
    }
  ]);

  const [newAddress, setNewAddress] = useState({
    type: 'Home',
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.address && newAddress.city) {
      const address = {
        id: Date.now(),
        ...newAddress,
        isDefault: addresses.length === 0,
        icon: newAddress.type === 'Home' ? Home : Building
      };
      setAddresses([...addresses, address]);
      setNewAddress({
        type: 'Home',
        name: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: ''
      });
      setShowAddForm(false);
    }
  };

  const removeAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const setDefaultAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-luxury-charcoal mb-2">Manage Addresses</h1>
            <p className="text-luxury-stone">Add and manage your delivery addresses</p>
          </div>

          <div className="space-y-6">
            {addresses.map((address) => {
              const AddressIcon = address.icon;
              return (
                <div key={address.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-luxury-cream rounded-full">
                        <AddressIcon className="w-6 h-6 text-luxury-plum" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-luxury-charcoal">{address.type}</h3>
                          {address.isDefault && (
                            <span className="bg-luxury-plum text-white px-3 py-1 rounded-full text-sm">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="font-medium text-luxury-charcoal">{address.name}</p>
                        <p className="text-luxury-stone">{address.address}</p>
                        <p className="text-luxury-stone">{address.city}, {address.state} - {address.pincode}</p>
                        <p className="text-luxury-stone">{address.phone}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!address.isDefault && (
                        <Button 
                           
                          size="sm"
                          onClick={() => setDefaultAddress(address.id)}
                          className='text-white'
                        >
                          Set Default
                        </Button>
                      )}
                      <Button size="sm">
                        <Edit className="w-4 h-4 bg-luxury-plum text-white" />
                      </Button>
                      <Button 
                         
                        size="sm"
                        onClick={() => removeAddress(address.id)}
                        className='text-white bg-luxury-plum'
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

            {!showAddForm && (
              <Button 
                onClick={() => setShowAddForm(true)}
                className="w-full bg-luxury-plum hover:bg-luxury-plum/90 text-white py-4 rounded-2xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Address
              </Button>
            )}

            {showAddForm && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Add New Address</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="addressType" className="text-luxury-charcoal font-medium">Address Type</Label>
                    <select
                      id="addressType"
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-plum"
                    >
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="fullName" className="text-luxury-charcoal font-medium">Full Name</Label>
                    <Input
                      id="fullName"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="text-luxury-charcoal font-medium">Street Address</Label>
                    <Input
                      id="address"
                      value={newAddress.address}
                      onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city" className="text-luxury-charcoal font-medium">City</Label>
                    <Input
                      id="city"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state" className="text-luxury-charcoal font-medium">State</Label>
                    <Input
                      id="state"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="pincode" className="text-luxury-charcoal font-medium">Pincode</Label>
                    <Input
                      id="pincode"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-luxury-charcoal font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      value={newAddress.phone}
                      onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <Button 
                    onClick={handleAddAddress}
                    className="bg-luxury-plum hover:bg-luxury-plum/90 text-white"
                  >
                    Add Address
                  </Button>
                  <Button 
                    
                    onClick={() => setShowAddForm(false)}
                    className='bg-red-400 text-white'
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddressManager;
