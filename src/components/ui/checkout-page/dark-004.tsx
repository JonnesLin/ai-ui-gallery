import { CheckoutPage, CheckoutSteps, CheckoutForm, CheckoutCart, CheckoutPayment } from './index';
import type { CheckoutStep, FormSection, CartItem } from './types';

const steps: CheckoutStep[] = [
  { id: 'shipping', title: 'Shipping', number: 1 },
  { id: 'payment', title: 'Payment', number: 2 },
  { id: 'review', title: 'Review', number: 3 },
];

const formSections: FormSection[] = [
  {
    id: 'shipping',
    title: 'Shipping Information',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
      { name: 'address', label: 'Address', type: 'text', placeholder: '123 Main Street, Apt 4B', required: true },
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
      { name: 'cardName', label: 'Name on Card', type: 'text', placeholder: 'John Doe', required: true },
    ],
  },
];

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Mechanical Keyboard',
    description: 'RGB / Cherry MX Blue',
    price: 159.99,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Gaming Mouse',
    description: 'Wireless / 16000 DPI',
    price: 79.99,
    quantity: 1,
  },
  {
    id: '3',
    name: 'Mouse Pad',
    description: 'Extended / Black',
    price: 29.99,
    quantity: 1,
  },
];

export default function DarkCheckoutPage() {
  return (
    <CheckoutPage theme="dark">
      <div className="space-y-8">
        <CheckoutSteps steps={steps} currentStep={1} theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <CheckoutForm sections={formSections} theme="dark" />
            <CheckoutPayment
              theme="dark"
              onMethodChange={(methodId) => console.log('Payment method:', methodId)}
              onSubmit={() => console.log('Complete purchase')}
            />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <CheckoutCart
                items={cartItems}
                subtotal={269.97}
                tax={21.6}
                shipping={12.0}
                total={303.57}
                theme="dark"
                onApplyPromo={(code) => console.log('Promo code:', code)}
              />
            </div>
          </div>
        </div>
      </div>
    </CheckoutPage>
  );
}
