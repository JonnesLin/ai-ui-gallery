import { TimePicker } from './TimePicker';

export default function MinimalistTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Minimalist Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="minimalist" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
