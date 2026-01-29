import { TimePicker } from './TimePicker';

export default function NeumorphismTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-[#e0e5ec] min-h-screen">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Neumorphism Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="neumorphism" format="12h" minuteStep={5} />
      </div>
    </div>
  );
}
