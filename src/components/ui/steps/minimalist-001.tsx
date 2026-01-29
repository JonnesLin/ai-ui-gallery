import { Steps, Step } from './index';

export default function MinimalistSteps() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Horizontal Steps</h2>
          <Steps current={1} theme="minimalist" direction="horizontal">
            <Step title="Account" description="Create your account" />
            <Step title="Profile" description="Add personal details" />
            <Step title="Verification" description="Verify your email" />
            <Step title="Complete" description="Start using the app" />
          </Steps>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Vertical Steps</h2>
          <div className="max-w-md">
            <Steps current={1} theme="minimalist" direction="vertical">
              <Step title="Order Placed" description="Your order has been received" />
              <Step title="Processing" description="Preparing your items" />
              <Step title="Shipped" description="On the way to you" />
              <Step title="Delivered" description="Enjoy your purchase" />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
