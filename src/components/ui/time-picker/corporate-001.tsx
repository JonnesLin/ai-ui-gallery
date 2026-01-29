import { TimePicker } from './TimePicker';

export default function CorporateTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-50 min-h-screen">
      <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Corporate Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="corporate" format="12h" minuteStep={15} />
      </div>
    </div>
  );
}
