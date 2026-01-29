import { TimePicker } from './TimePicker';

export default function FuturisticTimePicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-950 min-h-screen">
      <h2 className="text-sm font-light text-cyan-300 uppercase tracking-[0.2em]">Futuristic Time Picker</h2>

      <div className="max-w-md">
        <TimePicker theme="futuristic" format="24h" minuteStep={5} />
      </div>
    </div>
  );
}
