
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, Truck, CheckCircle, Clock, Link, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '₹2,499',
      items: 2,
      statusColor: 'text-green-600',
      icon: CheckCircle
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'In Transit',
      total: '₹1,899',
      items: 1,
      statusColor: 'text-blue-600',
      icon: Truck
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-25',
      status: 'Processing',
      total: '₹3,299',
      items: 3,
      statusColor: 'text-orange-600',
      icon: Clock
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />


      <section className="py-20">
        <div className="flex items-center space-x-7 mb-8 ml-24">

          <Button variant="ghost" size="sm" onClick={() => navigate(`/profile`)} className='bg-transparent text-black hover:bg-transparent hover:text-black'>
            <ArrowLeft className="w-4 h-4 mr-2 " />
            Back to profile
          </Button>

        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-luxury-charcoal mb-2">Order History</h1>
            <p className="text-luxury-stone">Track your past and current orders</p>
          </div>

          <div className="space-y-6">
            {orders.map((order) => {
              const StatusIcon = order.icon;
              return (
                <div key={order.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-luxury-cream rounded-full">
                        <Package className="w-6 h-6 text-luxury-plum" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-luxury-charcoal">{order.id}</h3>
                        <p className="text-luxury-stone">Ordered on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-luxury-charcoal">{order.total}</p>
                      <p className="text-luxury-stone">{order.items} item{order.items > 1 ? 's' : ''}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-5 h-5 ${order.statusColor}`} />
                      <span className={`font-medium ${order.statusColor}`}>{order.status}</span>
                    </div>
                    <div className="space-x-3">
                      <Button size="sm" className='text-white bg-black hover:bg-white hover:text-black'>
                        View Details
                      </Button>
                      <Button size="sm" className='text-white bg-black hover:bg-white hover:text-black'>
                        Track Order
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-luxury-stone mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">No orders yet</h3>
              <p className="text-luxury-stone mb-6">Start shopping to see your orders here</p>
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

export default OrderHistory;
