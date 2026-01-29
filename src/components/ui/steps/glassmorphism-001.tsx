import { Steps, Step } from './index';

export default function GlassmorphismSteps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Horizontal Steps</h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <Steps current={1} theme="glassmorphism" direction="horizontal">
              <Step title="Choose Plan" description="Select your subscription" />
              <Step title="Payment" description="Enter payment details" />
              <Step title="Confirm" description="Review and confirm" />
              <Step title="Activate" description="Start your journey" />
            </Steps>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Vertical Steps</h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md">
            <Steps current={1} theme="glassmorphism" direction="vertical">
              <Step title="Registration" description="Create new account" />
              <Step title="Preferences" description="Set your preferences" />
              <Step title="Integration" description="Connect your tools" />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
