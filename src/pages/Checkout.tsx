import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderConfirmation from '@/components/OrderConfirmation';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import GPay from "../Assets/gpay.png"
import PhonePe from "../Assets/phonepe.png"
import PayTm from "../Assets/paytm.png"

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

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
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateOrderNumber = () => {
    return 'ORD' + Date.now().toString().slice(-8);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);

    // Generate order number and show confirmation
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setShowOrderConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowOrderConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/cart">
              <Button size="sm" className='text-black bg-transparent hover:bg-transparent'>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              Secure <span className="text-luxury-rose">Checkout</span>
            </h1>
            <p className="text-lg text-luxury-stone max-w-2xl mx-auto">
              Complete your order with our secure payment process.
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              <Card className='bg-[#d4dbf5] border-none'>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-luxury-rose" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          First Name
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          Last Name
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Address
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main Street"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          City
                        </label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          State
                        </label>
                        <Input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          ZIP Code
                        </label>
                        <Input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className='flex gap-16 justify-center'>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          G-Pay
                        </label>
                        <img src={GPay} alt="G-Pay" className='h-14 w-14 rounded-lg' />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          PhonePe
                        </label>
                        <img src={PhonePe} alt="G-Pay" className='h-14 w-14 rounded-lg' />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          Paytm
                        </label>
                        <img src={PayTm} alt="G-Pay" className='h-14 w-14 rounded-lg' />
                      </div>

                    </div>

                    {/* <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          Expiry Date
                        </label>
                        <Input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          CVV
                        </label>
                        <Input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div> */}

                    {/* <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Name on Card
                      </label>
                      <Input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        required
                      />
                    </div> */}

                    <Button
                      type="submit"
                      className="w-full bg-luxury-rose hover:bg-luxury-rose/90 text-white py-3 text-lg"
                    >
                      Complete Order - ${total}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Security Features */}
              <div className="flex items-center justify-center space-x-8 text-sm text-luxury-stone">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-luxury-rose" />
                  SSL Encrypted
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-8">
              <Card className='bg-[#d4dbf5] border-none'>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-luxury-charcoal">{item.name}</h4>
                        <p className="text-sm text-luxury-stone">{item.color} | {item.size}</p>
                        <p className="text-sm text-luxury-stone">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-luxury-charcoal">${item.price * item.quantity}</p>
                    </div>
                  ))}

                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-luxury-stone">Subtotal</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-stone">Shipping</span>
                      <span className="font-semibold">${shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-stone">Tax</span>
                      <span className="font-semibold">${tax}</span>
                    </div>
                    <div className="flex justify-between text-xl border-t-blue-950 font-bold pt-2">
                      <span>Total</span>
                      <span className="text-luxury-rose">${total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Order Confirmation Modal */}
      <OrderConfirmation
        isOpen={showOrderConfirmation}
        onClose={handleCloseConfirmation}
        orderNumber={orderNumber}
        total={total}
      />

      <Footer />
    </div>
  );
};

export default Checkout;
