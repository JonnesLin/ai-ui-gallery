import { Steps, Step } from './index';

/**
 * Basic test file to verify Steps component functionality
 * This is not a unit test - just a visual test component
 */
export default function StepsBasicTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-gray-900">Steps Component Tests</h1>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Basic Horizontal</h2>
          <Steps current={1} theme="minimalist">
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. With Descriptions</h2>
          <Steps current={0} theme="minimalist">
            <Step title="First" description="The beginning" />
            <Step title="Second" description="The middle" />
            <Step title="Third" description="The end" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Vertical Layout</h2>
          <div className="max-w-md">
            <Steps current={1} theme="minimalist" direction="vertical">
              <Step title="Step 1" description="First step" />
              <Step title="Step 2" description="Second step" />
              <Step title="Step 3" description="Third step" />
            </Steps>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Small Size</h2>
          <Steps current={1} theme="minimalist" size="sm">
            <Step title="Step 1" description="Small" />
            <Step title="Step 2" description="Size" />
            <Step title="Step 3" description="Test" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Large Size</h2>
          <Steps current={1} theme="minimalist" size="lg">
            <Step title="Step 1" description="Large" />
            <Step title="Step 2" description="Size" />
            <Step title="Step 3" description="Test" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Progress Dot</h2>
          <Steps current={2} theme="minimalist" progressDot>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
            <Step title="Step 4" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Error Status</h2>
          <Steps current={1} theme="minimalist">
            <Step title="Success" description="Completed" />
            <Step title="Error" description="Failed" status="error" />
            <Step title="Waiting" description="Not started" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Dark Theme</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <Steps current={1} theme="dark">
              <Step title="Step 1" description="First" />
              <Step title="Step 2" description="Second" />
              <Step title="Step 3" description="Third" />
            </Steps>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">9. All Complete</h2>
          <Steps current={3} theme="minimalist">
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
          </Steps>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">10. None Complete</h2>
          <Steps current={0} theme="minimalist">
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
          </Steps>
        </section>
      </div>
    </div>
  );
}
