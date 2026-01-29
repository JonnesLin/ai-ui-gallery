import { Steps, Step } from './index';

export default function DarkSteps() {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Horizontal Steps</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <Steps current={1} theme="dark" direction="horizontal">
              <Step title="Initialize" description="Setup environment" />
              <Step title="Configure" description="Set parameters" />
              <Step title="Deploy" description="Launch application" />
              <Step title="Monitor" description="Track performance" />
            </Steps>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Vertical Steps</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md">
            <Steps current={1} theme="dark" direction="vertical">
              <Step title="Authenticate" description="Verify credentials" />
              <Step title="Authorize" description="Grant permissions" />
              <Step title="Access" description="Enter system" />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
