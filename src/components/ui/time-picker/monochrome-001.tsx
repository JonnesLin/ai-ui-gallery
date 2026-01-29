import { TimePicker } from './TimePicker';

export default function MonochromeTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-neutral-100 min-h-screen">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Monochrome Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="monochrome" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
