import { TimePicker } from './TimePicker';

export default function PastelTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-pink-50 min-h-screen">
      <h2 className="text-sm font-medium text-pink-400 uppercase tracking-widest">Pastel Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="pastel" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
