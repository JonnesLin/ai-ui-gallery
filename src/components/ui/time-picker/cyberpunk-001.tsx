import { TimePicker } from './TimePicker';

export default function CyberpunkTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Cyberpunk Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="cyberpunk" format="24h" minuteStep={5} />
      </div>
    </div>
  );
}
