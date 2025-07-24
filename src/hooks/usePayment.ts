import { useState } from 'react';
import { CartItem, Customer } from '../types';
import CashfreeService, { PaymentOrder } from '../services/cashfree';

interface UsePaymentProps {
  items: CartItem[];
  customer: Customer;
  total: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export const usePayment = ({ items, customer, total, onSuccess, onError }: UsePaymentProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const generateOrderId = () => {
    return `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const processPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Generate unique order ID
      const orderId = generateOrderId();
      
      // Prepare order data for Cashfree
      const orderData: PaymentOrder = {
        order_id: orderId,
        order_amount: total >= 999 ? total : total + 50, // Add delivery charge if needed
        order_currency: 'INR',
        customer_details: {
          customer_id: `CUST_${Date.now()}`,
          customer_name: customer.name,
          customer_email: customer.email,
          customer_phone: customer.phone,
        },
        order_meta: {
          return_url: `${window.location.origin}/payment-success?order_id=${orderId}`,
          notify_url: `${window.location.origin}/api/payment-webhook`, // Your webhook URL
        }
      };

      // Create order with Cashfree
      const orderResponse = await CashfreeService.createOrder(orderData);
      
      if (orderResponse && orderResponse.payment_session_id) {
        // Initiate payment
        const paymentResult = await CashfreeService.initiatePayment(
          orderResponse.payment_session_id,
          orderId
        );
        
        if (paymentResult.error) {
          throw new Error(paymentResult.error.message || 'Payment failed');
        }
        
        // Payment successful
        onSuccess();
      } else {
        throw new Error('Failed to create payment order');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      onError(error instanceof Error ? error.message : 'Payment processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processPayment,
    isProcessing
  };
};