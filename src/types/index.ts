export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'food' | 'toys';
  description: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: Customer;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  petName?: string;
}