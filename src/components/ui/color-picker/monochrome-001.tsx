import { ColorPicker } from './ColorPicker';

export default function MonochromeColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-neutral-100 min-h-screen">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Monochrome Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="monochrome"
          label="Select Shade"
          description="Choose a grayscale value"
          value="#737373"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
