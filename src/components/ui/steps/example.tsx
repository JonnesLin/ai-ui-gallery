import { useState } from 'react';
import { Steps, Step } from './index';

export default function StepsExample() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Horizontal Steps - Minimalist</h2>
          <Steps current={current} theme="minimalist" direction="horizontal" onChange={setCurrent}>
            <Step title="Account" description="Create your account" />
            <Step title="Profile" description="Add personal details" />
            <Step title="Verification" description="Verify your email" />
            <Step title="Complete" description="Start using the app" />
          </Steps>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Vertical Steps - Minimalist</h2>
          <div className="max-w-md">
            <Steps current={1} theme="minimalist" direction="vertical">
              <Step title="Order Placed" description="Your order has been received" />
              <Step title="Processing" description="Preparing your items" />
              <Step title="Shipped" description="On the way to you" />
              <Step title="Delivered" description="Enjoy your purchase" />
            </Steps>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Progress Dot Style</h2>
          <Steps current={1} theme="minimalist" direction="horizontal" progressDot>
            <Step title="Step 1" description="First step" />
            <Step title="Step 2" description="Second step" />
            <Step title="Step 3" description="Third step" />
            <Step title="Step 4" description="Fourth step" />
          </Steps>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Different Sizes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-gray-600 mb-4">Small</h3>
              <Steps current={1} theme="minimalist" size="sm">
                <Step title="Step 1" />
                <Step title="Step 2" />
                <Step title="Step 3" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm text-gray-600 mb-4">Medium</h3>
              <Steps current={1} theme="minimalist" size="md">
                <Step title="Step 1" />
                <Step title="Step 2" />
                <Step title="Step 3" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm text-gray-600 mb-4">Large</h3>
              <Steps current={1} theme="minimalist" size="lg">
                <Step title="Step 1" />
                <Step title="Step 2" />
                <Step title="Step 3" />
              </Steps>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Error State</h2>
          <Steps current={2} theme="minimalist">
            <Step title="Step 1" description="Completed" />
            <Step title="Step 2" description="Failed" status="error" />
            <Step title="Step 3" description="Waiting" />
          </Steps>
        </div>

        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Clickable Steps</h2>
          <Steps current={current} theme="minimalist" onChange={setCurrent}>
            <Step title="Account" description="Create your account" />
            <Step title="Profile" description="Add personal details" />
            <Step title="Verification" description="Verify your email" />
            <Step title="Complete" description="Start using the app" />
          </Steps>
          <div className="mt-4 text-sm text-gray-600">
            Current step: {current + 1}
          </div>
        </div>
      </div>
    </div>
  );
}
