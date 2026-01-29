import type { ProductData } from './types';

export const demoProductData: ProductData = {
  name: 'Premium Wireless Headphones',
  price: 299,
  originalPrice: 399,
  currency: '$',
  rating: 4.5,
  reviewCount: 128,
  description:
    'Experience premium sound quality with advanced noise cancellation. Perfect for music lovers and professionals who demand the best audio experience.',
  badge: 'Best Seller',
  inStock: true,
  variants: [
    {
      name: 'Color',
      options: [
        { id: 'black', label: 'Matte Black', value: '#000000' },
        { id: 'silver', label: 'Silver', value: '#C0C0C0' },
        { id: 'blue', label: 'Ocean Blue', value: '#0066CC' },
      ],
    },
    {
      name: 'Size',
      options: [
        { id: 'standard', label: 'Standard', value: 'standard' },
        { id: 'large', label: 'Large', value: 'large' },
      ],
    },
  ],
  features: [
    {
      icon: '🎵',
      title: 'Premium Sound',
      description: 'High-fidelity audio with deep bass and crystal clear highs',
    },
    {
      icon: '🔇',
      title: 'Noise Cancellation',
      description: 'Advanced ANC technology blocks out ambient noise',
    },
    {
      icon: '🔋',
      title: 'Long Battery',
      description: 'Up to 30 hours of continuous playback on a single charge',
    },
  ],
  specifications: {
    'Driver Size': '40mm dynamic drivers',
    'Frequency Response': '20Hz - 20kHz',
    'Bluetooth Version': '5.3',
    'Battery Life': '30 hours (ANC on)',
    'Charging Time': '2 hours via USB-C',
    'Weight': '250g',
  },
  relatedProducts: [
    { id: '1', name: 'Carrying Case', price: 49 },
    { id: '2', name: 'USB-C Cable', price: 19 },
    { id: '3', name: 'Ear Cushions', price: 29 },
    { id: '4', name: 'Audio Adapter', price: 39 },
  ],
};

export const backpackProductData: ProductData = {
  name: 'Flat Design Backpack',
  price: 79,
  currency: '$',
  rating: 4.8,
  reviewCount: 243,
  description:
    'Clean, modern design with practical functionality. Perfect for daily commute and travel.',
  badge: 'Best Seller',
  inStock: true,
  variants: [
    {
      name: 'Color',
      options: [
        { id: 'blue', label: 'Blue', value: '#3B82F6' },
        { id: 'red', label: 'Red', value: '#EF4444' },
        { id: 'green', label: 'Green', value: '#10B981' },
        { id: 'yellow', label: 'Yellow', value: '#F59E0B' },
        { id: 'purple', label: 'Purple', value: '#8B5CF6' },
      ],
    },
    {
      name: 'Size',
      options: [
        { id: 'small', label: 'Small', value: 'small' },
        { id: 'medium', label: 'Medium', value: 'medium' },
        { id: 'large', label: 'Large', value: 'large' },
      ],
    },
  ],
  features: [
    {
      icon: '💪',
      title: 'Durable Material',
      description: 'Made from high-quality water-resistant nylon',
    },
    {
      icon: '📱',
      title: 'Tech Compartment',
      description: 'Dedicated padded laptop sleeve up to 15 inches',
    },
    {
      icon: '🎒',
      title: 'Ergonomic Design',
      description: 'Comfortable padded shoulder straps for all-day wear',
    },
  ],
  relatedProducts: [
    { id: '1', name: 'Travel Bag', price: 99 },
    { id: '2', name: 'Laptop Sleeve', price: 29 },
    { id: '3', name: 'Water Bottle', price: 19 },
    { id: '4', name: 'Organizer', price: 39 },
  ],
};

export const phoneProductData: ProductData = {
  name: 'Material Design Phone',
  price: 699,
  currency: '$',
  rating: 4.6,
  reviewCount: 47,
  description:
    'Inspired by Google\'s Material Design principles. Clean interface with purposeful motion and tactile feedback.',
  badge: 'Premium Quality',
  inStock: true,
  variants: [
    {
      name: 'Storage',
      options: [
        { id: '64gb', label: '64GB', value: '64gb' },
        { id: '128gb', label: '128GB', value: '128gb' },
        { id: '256gb', label: '256GB', value: '256gb' },
      ],
    },
    {
      name: 'Color',
      options: [
        { id: 'blue', label: 'Blue', value: '#2563EB' },
        { id: 'red', label: 'Red', value: '#DC2626' },
        { id: 'green', label: 'Green', value: '#059669' },
        { id: 'black', label: 'Black', value: '#1F2937' },
      ],
    },
  ],
  features: [
    {
      icon: '⚡',
      title: 'Fast Charging',
      description: '30W fast charging gets you to 50% in just 30 minutes',
    },
    {
      icon: '🔋',
      title: 'All-Day Battery',
      description: '4500mAh battery lasts over 24 hours on a single charge',
    },
    {
      icon: '📷',
      title: 'Pro Camera',
      description: 'Triple camera system with advanced AI photography',
    },
  ],
  specifications: {
    Display: '6.1" OLED',
    Connectivity: '5G',
    'Main Camera': '48MP',
    'Battery Capacity': '4500mAh',
    'Charging Power': '30W',
  },
  relatedProducts: [
    { id: '1', name: 'Phone Case', price: 29 },
    { id: '2', name: 'Screen Protector', price: 15 },
    { id: '3', name: 'Wireless Charger', price: 39 },
    { id: '4', name: 'USB-C Cable', price: 19 },
  ],
};
