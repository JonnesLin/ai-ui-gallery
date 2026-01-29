import { TimePicker } from './TimePicker';

export default function FlatTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-100 min-h-screen">
      <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Flat Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="flat" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
