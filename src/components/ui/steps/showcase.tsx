import { useState } from 'react';
import { Steps, Step } from './index';

export default function StepsShowcase() {
  const [horizontalCurrent, setHorizontalCurrent] = useState(1);
  const [verticalCurrent, setVerticalCurrent] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Steps Component Showcase</h1>
          <p className="text-gray-600">A comprehensive demonstration of all variations</p>
        </div>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Horizontal - Interactive</h2>
          <Steps
            current={horizontalCurrent}
            theme="minimalist"
            direction="horizontal"
            onChange={setHorizontalCurrent}
          >
            <Step title="Account" description="Create your account" />
            <Step title="Profile" description="Add personal details" />
            <Step title="Verification" description="Verify your email" />
            <Step title="Complete" description="Start using the app" />
          </Steps>
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setHorizontalCurrent(Math.max(0, horizontalCurrent - 1))}
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800"
              disabled={horizontalCurrent === 0}
            >
              Previous
            </button>
            <button
              onClick={() => setHorizontalCurrent(Math.min(3, horizontalCurrent + 1))}
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800"
              disabled={horizontalCurrent === 3}
            >
              Next
            </button>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Vertical - Interactive</h2>
          <div className="max-w-md">
            <Steps
              current={verticalCurrent}
              theme="minimalist"
              direction="vertical"
              onChange={setVerticalCurrent}
            >
              <Step title="Order Placed" description="Your order has been received" />
              <Step title="Processing" description="Preparing your items" />
              <Step title="Shipped" description="On the way to you" />
              <Step title="Delivered" description="Enjoy your purchase" />
            </Steps>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Progress Dot Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Horizontal</h3>
              <Steps current={1} theme="minimalist" progressDot>
                <Step title="Step 1" description="First step" />
                <Step title="Step 2" description="Second step" />
                <Step title="Step 3" description="Third step" />
                <Step title="Step 4" description="Fourth step" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Vertical</h3>
              <Steps current={1} theme="minimalist" direction="vertical" progressDot>
                <Step title="Step 1" description="First step" />
                <Step title="Step 2" description="Second step" />
                <Step title="Step 3" description="Third step" />
              </Steps>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Different Sizes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Small</h3>
              <Steps current={1} theme="minimalist" size="sm">
                <Step title="Step 1" description="Description" />
                <Step title="Step 2" description="Description" />
                <Step title="Step 3" description="Description" />
                <Step title="Step 4" description="Description" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Medium (Default)</h3>
              <Steps current={1} theme="minimalist" size="md">
                <Step title="Step 1" description="Description" />
                <Step title="Step 2" description="Description" />
                <Step title="Step 3" description="Description" />
                <Step title="Step 4" description="Description" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Large</h3>
              <Steps current={1} theme="minimalist" size="lg">
                <Step title="Step 1" description="Description" />
                <Step title="Step 2" description="Description" />
                <Step title="Step 3" description="Description" />
                <Step title="Step 4" description="Description" />
              </Steps>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Status Variants</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Normal Flow</h3>
              <Steps current={1} theme="minimalist">
                <Step title="Completed" description="This step is done" />
                <Step title="Current" description="Working on this" />
                <Step title="Waiting" description="Not started yet" />
                <Step title="Waiting" description="Not started yet" />
              </Steps>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">With Error</h3>
              <Steps current={2} theme="minimalist">
                <Step title="Completed" description="This step is done" />
                <Step title="Failed" description="Something went wrong" status="error" />
                <Step title="Waiting" description="Not started yet" />
                <Step title="Waiting" description="Not started yet" />
              </Steps>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-6">Dark Theme</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-4">Horizontal</h3>
              <Steps current={1} theme="dark">
                <Step title="Initialize" description="Setup environment" />
                <Step title="Configure" description="Set parameters" />
                <Step title="Deploy" description="Launch application" />
                <Step title="Monitor" description="Track performance" />
              </Steps>
            </div>
            <div className="max-w-md">
              <h3 className="text-sm font-medium text-gray-300 mb-4">Vertical</h3>
              <Steps current={1} theme="dark" direction="vertical">
                <Step title="Authenticate" description="Verify credentials" />
                <Step title="Authorize" description="Grant permissions" />
                <Step title="Access" description="Enter system" />
              </Steps>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Without Descriptions</h2>
          <Steps current={1} theme="minimalist">
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
          </Steps>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Disabled Steps</h2>
          <Steps current={1} theme="minimalist">
            <Step title="Step 1" description="Completed" />
            <Step title="Step 2" description="Current" />
            <Step title="Step 3" description="Coming soon" disabled />
            <Step title="Step 4" description="Coming soon" disabled />
          </Steps>
        </section>
      </div>
    </div>
  );
}
