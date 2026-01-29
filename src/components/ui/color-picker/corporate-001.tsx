import { ColorPicker } from './ColorPicker';

export default function CorporateColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-50 min-h-screen">
      <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Corporate Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="corporate"
          label="Brand Color"
          description="Select your corporate brand color"
          value="#1E40AF"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
