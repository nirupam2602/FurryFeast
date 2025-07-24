import { Cashfree } from '@cashfreepayments/cashfree-js';

// Initialize Cashfree
const cashfree = Cashfree({
  mode: 'sandbox' // Change to 'production' for live environment
});

export interface PaymentOrder {
  order_id: string;
  order_amount: number;
  order_currency: string;
  customer_details: {
    customer_id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
  };
  order_meta?: {
    return_url?: string;
    notify_url?: string;
  };
}

export interface CashfreeConfig {
  appId: string;
  secretKey: string;
}

// This would typically come from environment variables
const CASHFREE_CONFIG: CashfreeConfig = {
  appId: process.env.REACT_APP_CASHFREE_APP_ID || 'TEST_APP_ID',
  secretKey: process.env.REACT_APP_CASHFREE_SECRET_KEY || 'TEST_SECRET_KEY'
};

export class CashfreeService {
  private static instance: CashfreeService;
  
  private constructor() {}
  
  public static getInstance(): CashfreeService {
    if (!CashfreeService.instance) {
      CashfreeService.instance = new CashfreeService();
    }
    return CashfreeService.instance;
  }

  // Create order on Cashfree
  async createOrder(orderData: PaymentOrder): Promise<any> {
    try {
      // In a real application, this should be done on your backend server
      // This is a simplified version for demonstration
      const response = await fetch('https://sandbox.cashfree.com/pg/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': CASHFREE_CONFIG.appId,
          'x-client-secret': CASHFREE_CONFIG.secretKey,
          'x-api-version': '2023-08-01'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error creating Cashfree order:', error);
      throw error;
    }
  }

  // Initialize payment
  async initiatePayment(sessionId: string, orderId: string): Promise<any> {
    try {
      const checkoutOptions = {
        paymentSessionId: sessionId,
        returnUrl: `${window.location.origin}/payment-success?order_id=${orderId}`,
      };

      const result = await cashfree.checkout(checkoutOptions);
      return result;
    } catch (error) {
      console.error('Error initiating payment:', error);
      throw error;
    }
  }

  // Verify payment status
  async verifyPayment(orderId: string): Promise<any> {
    try {
      const response = await fetch(`https://sandbox.cashfree.com/pg/orders/${orderId}`, {
        method: 'GET',
        headers: {
          'x-client-id': CASHFREE_CONFIG.appId,
          'x-client-secret': CASHFREE_CONFIG.secretKey,
          'x-api-version': '2023-08-01'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }
}

export default CashfreeService.getInstance();