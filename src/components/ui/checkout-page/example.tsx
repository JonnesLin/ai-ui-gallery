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
    name: 'Premium Headphones',
    description: 'Wireless / Noise Cancelling',
    price: 299.99,
    quantity: 1,
  },
  {
    id: '2',
    name: 'USB-C Cable',
    description: '2m / Fast Charging',
    price: 19.99,
    quantity: 2,
  },
];

export default function CheckoutPageExample() {
  return (
    <CheckoutPage theme="dark">
      <div className="space-y-8">
        <CheckoutSteps steps={steps} currentStep={0} theme="dark" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CheckoutForm sections={formSections} theme="dark" />
            <CheckoutPayment
              theme="dark"
              onMethodChange={(methodId) => console.log('Payment method:', methodId)}
              onSubmit={() => console.log('Submit order')}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <CheckoutCart
                items={cartItems}
                subtotal={339.97}
                tax={27.2}
                shipping={15.0}
                total={382.17}
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
