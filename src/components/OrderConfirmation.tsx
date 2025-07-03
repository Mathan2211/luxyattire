
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  total: number;
}

const OrderConfirmation = ({ isOpen, onClose, orderNumber, total }: OrderConfirmationProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white border-luxury-charcoal/20">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-luxury-plum/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-luxury-plum" />
            </div>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-luxury-charcoal">
            Thank You!
          </DialogTitle>
          
          <div className="space-y-3 text-center">
            <p className="text-lg text-luxury-stone">
              Your order has been confirmed
            </p>
            <div className="bg-luxury-cream p-4 rounded-lg">
              <p className="text-sm text-luxury-stone mb-1">Order Number</p>
              <p className="font-bold text-luxury-charcoal text-lg">#{orderNumber}</p>
            </div>
            <p className="text-xl font-semibold text-luxury-rose">
              Total: ₹{total}
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Order Status Steps */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-luxury-plum rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-luxury-charcoal">Order Confirmed</p>
                <p className="text-sm text-luxury-stone">We've received your order</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-luxury-stone/30 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-luxury-stone" />
              </div>
              <div>
                <p className="font-semibold text-luxury-charcoal">Processing</p>
                <p className="text-sm text-luxury-stone">Your order is being prepared</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-luxury-stone/30 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-luxury-stone" />
              </div>
              <div>
                <p className="font-semibold text-luxury-charcoal">Shipping</p>
                <p className="text-sm text-luxury-stone">Expected delivery in 3-5 days</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link to="/order-history" className="w-full">
              <Button 
                className="w-full bg-luxury-plum hover:bg-luxury-plum/90 text-white"
                onClick={onClose}
              >
                Track Your Order
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link to="/collections" className="w-full">
                <Button 

                  className="w-full bg-black text-white hover:bg-white hover:text-black"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </Link>
              
              <Link to="/wishlist" className="w-full">
                <Button 

                  className="w-full bg-black text-white hover:bg-white hover:text-black"
                  onClick={onClose}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
              </Link>
            </div>
          </div>

          {/* Brand Message */}
          <div className="text-center pt-4 border-t border-luxury-stone/20">
            <p className="text-sm text-luxury-stone">
              Thank you for choosing our premium collection
            </p>
            <p className="text-xs text-luxury-stone/70 mt-1">
              We'll send you updates via email
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmation;
