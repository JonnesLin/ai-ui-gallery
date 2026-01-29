import { TimePicker } from './TimePicker';

export default function DarkTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-900 min-h-screen">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Dark Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="dark" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
