
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PaymentMethods = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'GPay',
      details: 'john.doe@gmail.com',
      isDefault: true,
      logo: '🟢'
    },
    {
      id: 2,
      type: 'PhonePe',
      details: '+91 9876543210',
      isDefault: false,
      logo: '🟣'
    }
  ]);

  const [newPayment, setNewPayment] = useState({
    type: 'GPay',
    details: ''
  });

  const handleAddPayment = () => {
    if (newPayment.details.trim()) {
      const newMethod = {
        id: Date.now(),
        type: newPayment.type,
        details: newPayment.details,
        isDefault: paymentMethods.length === 0,
        logo: newPayment.type === 'GPay' ? '🟢' : newPayment.type === 'PhonePe' ? '🟣' : '🔵'
      };
      setPaymentMethods([...paymentMethods, newMethod]);
      setNewPayment({ type: 'GPay', details: '' });
      setShowAddForm(false);
    }
  };

  const removePaymentMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const setDefaultPayment = (id: number) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-luxury-charcoal mb-2">Payment Methods</h1>
            <p className="text-luxury-stone">Manage your payment options</p>
          </div>

          <div className="space-y-6">
            {paymentMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{method.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-charcoal">{method.type}</h3>
                      <p className="text-luxury-stone">{method.details}</p>
                      {method.isDefault && (
                        <span className="inline-block bg-luxury-plum text-white px-3 py-1 rounded-full text-sm mt-1">
                          Default
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!method.isDefault && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setDefaultPayment(method.id)}
                      >
                        Set Default
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removePaymentMethod(method.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {!showAddForm && (
              <Button 
                onClick={() => setShowAddForm(true)}
                className="w-full bg-luxury-plum hover:bg-luxury-plum/90 text-white py-4 rounded-2xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Payment Method
              </Button>
            )}

            {showAddForm && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Add New Payment Method</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="paymentType" className="text-luxury-charcoal font-medium">Payment Type</Label>
                    <select
                      id="paymentType"
                      value={newPayment.type}
                      onChange={(e) => setNewPayment({...newPayment, type: e.target.value})}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-plum"
                    >
                      <option value="GPay">Google Pay</option>
                      <option value="PhonePe">PhonePe</option>
                      <option value="Paytm">Paytm</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="paymentDetails" className="text-luxury-charcoal font-medium">
                      {newPayment.type === 'GPay' ? 'Email Address' : 'Phone Number'}
                    </Label>
                    <Input
                      id="paymentDetails"
                      type={newPayment.type === 'GPay' ? 'email' : 'tel'}
                      placeholder={newPayment.type === 'GPay' ? 'your.email@gmail.com' : '+91 9876543210'}
                      value={newPayment.details}
                      onChange={(e) => setNewPayment({...newPayment, details: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <Button 
                    onClick={handleAddPayment}
                    className="bg-luxury-plum hover:bg-luxury-plum/90"
                  >
                    Add Payment Method
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
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

export default PaymentMethods;
