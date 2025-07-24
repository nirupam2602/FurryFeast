import React, { useEffect, useState } from 'react';
import { CheckCircle, Package, Home, Phone } from 'lucide-react';
import CashfreeService from '../services/cashfree';

interface PaymentSuccessPageProps {
  onPageChange: (page: string) => void;
}

const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({ onPageChange }) => {
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order_id');

    if (orderId) {
      verifyPayment(orderId);
    } else {
      setOrderStatus('failed');
    }
  }, []);

  const verifyPayment = async (orderId: string) => {
    try {
      const result = await CashfreeService.verifyPayment(orderId);
      
      if (result && result.order_status === 'PAID') {
        setOrderStatus('success');
        setOrderDetails(result);
      } else {
        setOrderStatus('failed');
      }
    } catch (error) {
      console.error('Payment verification failed:', error);
      setOrderStatus('failed');
    }
  };

  if (orderStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (orderStatus === 'failed') {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Failed</h1>
            <p className="text-gray-600 mb-8">
              We couldn't process your payment. Please try again or contact us for assistance.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => onPageChange('cart')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
            <p className="text-gray-600">
              Thank you for your order. Your payment has been processed successfully.
            </p>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">{orderDetails.order_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-semibold">₹{orderDetails.order_amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold">{orderDetails.payment_method || 'Online'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-semibold">{orderDetails.cf_payment_id || 'N/A'}</span>
                </div>
              </div>
            </div>
          )}

          {/* What's Next */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Package className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-blue-800">Order Processing</p>
                  <p className="text-blue-600 text-sm">We'll prepare your order within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-blue-800">Delivery Confirmation</p>
                  <p className="text-blue-600 text-sm">We'll call you to confirm delivery details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Phone:</strong> 7783878734
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> nirupamkumar52@gmail.com
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 294, Aradhana Nagar, 462003, Bhopal
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onPageChange('home')}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Continue Shopping
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;