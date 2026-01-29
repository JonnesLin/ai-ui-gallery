import { Steps, Step } from './index';

export default function NeumorphismSteps() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#4a5568] mb-8">Horizontal Steps</h2>
          <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#b8bdc5,-8px_-8px_16px_#ffffff]">
            <Steps current={1} theme="neumorphism" direction="horizontal">
              <Step title="Upload" description="Add your files" />
              <Step title="Process" description="AI processing data" />
              <Step title="Review" description="Check results" />
              <Step title="Export" description="Download output" />
            </Steps>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#4a5568] mb-8">Vertical Steps</h2>
          <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#b8bdc5,-8px_-8px_16px_#ffffff] max-w-md">
            <Steps current={1} theme="neumorphism" direction="vertical">
              <Step title="Connect" description="Link your account" />
              <Step title="Configure" description="Setup preferences" />
              <Step title="Launch" description="Go live" />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
