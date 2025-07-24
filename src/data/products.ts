import { Product } from '../types';

export const products: Product[] = [
  // Pet Food
  {
    id: '1',
    name: 'Royal Canin Adult Dog Food',
    price: 2499,
    image: 'https://images.pexels.com/photos/4498182/pexels-photo-4498182.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'food',
    description: 'Premium nutrition for adult dogs with balanced proteins and vitamins.',
    inStock: true
  },
  {
    id: '2',
    name: 'Whiskas Cat Food Tuna Flavor',
    price: 899,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'food',
    description: 'Delicious tuna flavored cat food with essential nutrients.',
    inStock: true
  },
  {
    id: '3',
    name: 'Pedigree Puppy Food',
    price: 1299,
    image: 'https://images.pexels.com/photos/4498182/pexels-photo-4498182.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'food',
    description: 'Complete nutrition for growing puppies with DHA and calcium.',
    inStock: true
  },
  {
    id: '4',
    name: 'Hill\'s Science Diet Cat Food',
    price: 3299,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'food',
    description: 'Scientifically formulated cat food for optimal health.',
    inStock: true
  },
  // Toys
  {
    id: '5',
    name: 'Interactive Puzzle Toy',
    price: 699,
    image: 'https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    description: 'Mental stimulation puzzle toy to keep your pet engaged.',
    inStock: true
  },
  {
    id: '6',
    name: 'Rope Chew Toy',
    price: 399,
    image: 'https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    description: 'Durable rope toy perfect for chewing and playing.',
    inStock: true
  },
  {
    id: '7',
    name: 'Squeaky Ball Set',
    price: 599,
    image: 'https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    description: 'Set of 3 colorful squeaky balls for endless fun.',
    inStock: true
  },
  {
    id: '8',
    name: 'Cat Feather Wand',
    price: 299,
    image: 'https://images.pexels.com/photos/4498141/pexels-photo-4498141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    description: 'Interactive feather wand to keep cats active and entertained.',
    inStock: true
  }
];