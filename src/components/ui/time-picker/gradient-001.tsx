import { TimePicker } from './TimePicker';

export default function GradientTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Gradient Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="gradient" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
