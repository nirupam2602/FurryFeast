import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import PolicyPages from './pages/PolicyPages';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <PolicyPages type="terms" />;
      case 'privacy':
        return <PolicyPages type="privacy" />;
      case 'refund':
        return <PolicyPages type="refund" />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer onPageChange={setCurrentPage} />
      </div>
    </CartProvider>
  );
}

export default App;