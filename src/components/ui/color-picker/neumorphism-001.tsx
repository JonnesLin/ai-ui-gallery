import { ColorPicker } from './ColorPicker';

export default function NeumorphismColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-[#e0e5ec] min-h-screen">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Neumorphism Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="neumorphism"
          label="Select Color"
          description="Choose a color for your design"
          value="#A3BFFA"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
