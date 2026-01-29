import { CheckoutPage, CheckoutForm, CheckoutCart, CheckoutPayment } from './index';
import type { FormSection, CartItem } from './types';

const formSections: FormSection[] = [
  {
    id: 'shipping',
    title: 'Shipping Information',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'address', label: 'Street Address', type: 'text', placeholder: '123 Main Street, Apt 4B', required: true },
      { name: 'city', label: 'City', type: 'text', placeholder: 'New York', required: true },
      { name: 'state', label: 'State', type: 'text', placeholder: 'NY', required: true },
      { name: 'zip', label: 'ZIP', type: 'text', placeholder: '10001', required: true },
    ],
  },
  {
    id: 'payment',
    title: 'Payment Details',
    fields: [
      { name: 'cardNumber', label: 'Card Number', type: 'text', placeholder: '1234 5678 9012 3456', required: true },
      { name: 'expiry', label: 'Expiry Date', type: 'text', placeholder: 'MM/YY', required: true },
      { name: 'cvc', label: 'CVC', type: 'text', placeholder: '123', required: true },
      { name: 'cardName', label: 'Cardholder Name', type: 'text', placeholder: 'John Doe', required: true },
    ],
  },
];

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Black / Premium',
    price: 199.0,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Phone Case',
    description: 'Clear / iPhone 15',
    price: 58.0,
    quantity: 2,
  },
];

export default function GlassmorphismCheckoutPage() {
  return (
    <CheckoutPage theme="glassmorphism">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CheckoutForm sections={formSections} theme="glassmorphism" />
          <CheckoutPayment theme="glassmorphism" />
        </div>

        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8">
            <CheckoutCart
              items={cartItems}
              subtotal={257.0}
              tax={21.52}
              shipping={12.0}
              total={290.52}
              theme="glassmorphism"
              onApplyPromo={(code) => console.log('Promo code:', code)}
            />
          </div>
        </div>
      </div>
    </CheckoutPage>
  );
}
