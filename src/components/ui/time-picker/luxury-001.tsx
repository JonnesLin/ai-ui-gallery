import { TimePicker } from './TimePicker';

export default function LuxuryTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-stone-900 min-h-screen">
      <h2 className="text-sm font-light text-amber-400 uppercase tracking-[0.3em]">Luxury Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="luxury" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
