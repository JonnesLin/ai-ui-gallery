import { TimePicker } from './TimePicker';

export default function MaterialTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 min-h-screen">
      <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Material Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="material" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
