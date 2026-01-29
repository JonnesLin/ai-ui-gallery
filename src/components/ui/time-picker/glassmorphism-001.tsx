import { TimePicker } from './TimePicker';

export default function GlassmorphismTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="glassmorphism" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
