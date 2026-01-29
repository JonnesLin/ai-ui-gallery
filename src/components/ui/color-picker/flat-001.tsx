import { ColorPicker } from './ColorPicker';

export default function FlatColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-100 min-h-screen">
      <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Flat Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="flat"
          label="Select Color"
          description="Choose a color for your design"
          value="#3B82F6"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
