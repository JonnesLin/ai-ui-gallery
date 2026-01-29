import { CheckoutPage, CheckoutForm, CheckoutCart, CheckoutPayment } from './index';
import type { FormSection, CartItem } from './types';

const formSections: FormSection[] = [
  {
    id: 'shipping',
    title: 'Shipping Information',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'address', label: 'Address', type: 'text', placeholder: '123 Main Street', required: true },
      { name: 'city', label: 'City', type: 'text', placeholder: 'New York', required: true },
      { name: 'state', label: 'State', type: 'text', placeholder: 'NY', required: true },
      { name: 'zip', label: 'ZIP', type: 'text', placeholder: '10001', required: true },
    ],
  },
  {
    id: 'payment',
    title: 'Payment Information',
    fields: [
      { name: 'cardNumber', label: 'Card Number', type: 'text', placeholder: '1234 5678 9012 3456', required: true },
      { name: 'expiry', label: 'Expiry Date', type: 'text', placeholder: 'MM/YY', required: true },
      { name: 'cvc', label: 'CVC', type: 'text', placeholder: '123', required: true },
      { name: 'cardName', label: 'Name on Card', type: 'text', placeholder: 'John Doe', required: true },
    ],
  },
];

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Minimal Chair',
    description: 'Black / Standard',
    price: 299.0,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Desk Lamp',
    description: 'White',
    price: 89.0,
    quantity: 2,
  },
];

export default function MinimalistCheckoutPage() {
  return (
    <CheckoutPage theme="minimalist">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-8">
          <CheckoutForm sections={formSections} theme="minimalist" />
          <CheckoutPayment theme="minimalist" />
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-8">
            <CheckoutCart
              items={cartItems}
              subtotal={477.0}
              tax={39.36}
              shipping={15.0}
              total={531.36}
              theme="minimalist"
              onApplyPromo={(code) => console.log('Promo code:', code)}
            />
          </div>
        </div>
      </div>
    </CheckoutPage>
  );
}
