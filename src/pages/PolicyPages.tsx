import React from 'react';
import { Shield, FileText, RotateCcw } from 'lucide-react';

interface PolicyPageProps {
  type: 'terms' | 'privacy' | 'refund';
}

const PolicyPages: React.FC<PolicyPageProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'terms':
        return <FileText className="w-8 h-8 text-blue-600" />;
      case 'privacy':
        return <Shield className="w-8 h-8 text-green-600" />;
      case 'refund':
        return <RotateCcw className="w-8 h-8 text-orange-600" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms & Conditions';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Return, Refund & Cancellation Policy';
    }
  };

  const getLastUpdated = () => {
    return 'January 1, 2025';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {getIcon()}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{getTitle()}</h1>
          <p className="text-gray-600">Last updated: {getLastUpdated()}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {type === 'terms' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-6">
                Welcome to FurryFeast ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website and services operated by Nirupam Kumar.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold mb-4">3. Products and Services</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We sell pet food and toys through our online platform</li>
                <li>All product descriptions, prices, and availability are subject to change without notice</li>
                <li>We reserve the right to limit quantities or refuse service</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. Ordering and Payment</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Orders are subject to acceptance and availability</li>
                <li>Payment must be completed before order processing</li>
                <li>We use secure payment processing through Cashfree</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">5. Delivery</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We deliver within Bhopal and surrounding areas</li>
                <li>Delivery times are estimates and may vary</li>
                <li>Free delivery on orders above ₹999</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
              <p className="mb-6">
                For any questions regarding these terms, please contact us at:
                <br />Email: nirupamkumar52@gmail.com
                <br />Phone: 7783878734
                <br />Address: 294, Aradhana Nagar, 462003, Bhopal
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-6">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders</li>
                <li>To provide customer support</li>
                <li>To send promotional communications (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy, please contact us at:
                <br />Email: nirupamkumar52@gmail.com
                <br />Phone: 7783878734
              </p>
            </div>
          )}

          {type === 'refund' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Return Policy</h2>
              <p className="mb-6">
                We want you and your pets to be completely satisfied with your purchase. If you're not happy with your order, we offer returns within 7 days of delivery.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. Eligible Items</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Items must be unopened and in original packaging</li>
                <li>Pet food items must be within expiry date</li>
                <li>Toys must be unused and in original condition</li>
                <li>Custom or personalized items are not eligible for return</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">3. Return Process</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li>Contact us within 7 days of delivery</li>
                <li>Provide order number and reason for return</li>
                <li>We'll arrange pickup or provide return instructions</li>
                <li>Items will be inspected upon receipt</li>
              </ol>

              <h2 className="text-2xl font-semibold mb-4">4. Refund Policy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Refunds will be processed within 5-7 business days</li>
                <li>Refunds will be credited to the original payment method</li>
                <li>Shipping charges are non-refundable unless item is defective</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">5. Cancellation Policy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Orders can be cancelled within 1 hour of placing</li>
                <li>Once shipped, orders cannot be cancelled</li>
                <li>Full refund for cancelled orders before shipping</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">6. Damaged or Defective Items</h2>
              <p className="mb-6">
                If you receive damaged or defective items, please contact us immediately. We'll provide a replacement or full refund including shipping charges.
              </p>

              <h2 className="text-2xl font-semibold mb-4">7. Contact for Returns</h2>
              <p className="mb-6">
                For returns and refunds, contact us at:
                <br />Email: nirupamkumar52@gmail.com
                <br />Phone: 7783878734
                <br />Address: 294, Aradhana Nagar, 462003, Bhopal
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyPages;