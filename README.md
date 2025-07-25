# FurryFeast - Pet Store eCommerce Website

A modern, mobile-responsive eCommerce website for FurryFeast pet store in Bhopal, India. Built with React, TypeScript, and Tailwind CSS, featuring Cashfree Payment Gateway integration.

## Features

- 🛒 Complete eCommerce functionality with shopping cart
- 💳 Cashfree Payment Gateway integration
- 📱 Mobile-first responsive design
- 🔍 Product search and filtering
- 👤 Customer testimonials and reviews
- 📧 Newsletter subscription
- 🗺️ Google Maps integration for store location
- 📄 Policy pages (Terms, Privacy, Refund)

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Payment**: Cashfree Payment Gateway
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd furryfeast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your Cashfree credentials:
   - Get your App ID and Secret Key from [Cashfree Dashboard](https://merchant.cashfree.com/)
   - For testing, use sandbox credentials
   - For production, use live credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Cashfree Payment Integration

### Setup Instructions

1. **Create Cashfree Account**
   - Sign up at [Cashfree](https://www.cashfree.com/)
   - Complete KYC verification
   - Get your App ID and Secret Key from the dashboard

2. **Configure Environment Variables**
   ```env
   VITE_CASHFREE_APP_ID=your_app_id
   VITE_CASHFREE_SECRET_KEY=your_secret_key
   ```

3. **Test Payment Flow**
   - Use sandbox credentials for testing
   - Test with different payment methods
   - Verify webhook integration (if implemented)

### Payment Flow

1. Customer adds items to cart
2. Customer fills checkout form
3. Order is created with Cashfree
4. Customer is redirected to Cashfree payment page
5. After payment, customer is redirected to success page
6. Payment status is verified with Cashfree API

## Store Information

- **Owner**: Nirupam Kumar
- **Phone**: 7783878734
- **Email**: nirupamkumar52@gmail.com
- **Address**: 294, Aradhana Nagar, 462003, Bhopal, Madhya Pradesh

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context for state management
├── data/               # Static data (products, testimonials)
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services (Cashfree integration)
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

## Deployment

### Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `VITE_CASHFREE_APP_ID`
- `VITE_CASHFREE_SECRET_KEY`
- `VITE_ENVIRONMENT=production`

## Security Notes

⚠️ **Important**: Never expose your Cashfree Secret Key in frontend code. In a production environment:

1. Create a backend API to handle Cashfree order creation
2. Store sensitive credentials on the server
3. Implement proper webhook verification
4. Add rate limiting and security headers

## Support

For technical support or questions about the payment integration:
- Email: nirupamkumar52@gmail.com
- Phone: 7783878734

## License

© 2025 NIRUPAM KUMAR. All Rights Reserved.
