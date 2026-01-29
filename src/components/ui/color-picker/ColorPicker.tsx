import { forwardRef, useState, useCallback, useMemo } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ColorPickerProps, RgbaColor, HsvaColor } from './ColorPicker.types';

const DEFAULT_PRESET_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F8B500', '#00CED1', '#FF69B4', '#32CD32', '#FF4500',
];

// Color conversion utilities
function hexToRgba(hex: string): RgbaColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return { r: 0, g: 0, b: 0, a: 100 };
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 100,
  };
}

function rgbaToHex(rgba: RgbaColor): string {
  const toHex = (n: number) => {
    const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(rgba.r)}${toHex(rgba.g)}${toHex(rgba.b)}`.toUpperCase();
}

function rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
}

function hsvToRgb(h: number, s: number, v: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  v /= 100;

  let r = 0, g = 0, b = 0;

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function getHueColor(hue: number): string {
  const { r, g, b } = hsvToRgb(hue, 100, 100);
  return `rgb(${r}, ${g}, ${b})`;
}

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      theme: themeName,
      value = '#3B82F6',
      onChange,
      presetColors = DEFAULT_PRESET_COLORS,
      showOpacity = true,
      showRgbInputs = true,
      showSwatches = true,
      label,
      description,
      className,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);

    const initialRgba = useMemo(() => hexToRgba(value), [value]);
    const initialHsv = useMemo(() => rgbToHsv(initialRgba.r, initialRgba.g, initialRgba.b), [initialRgba]);

    const [hsva, setHsva] = useState<HsvaColor>({
      h: initialHsv.h,
      s: initialHsv.s,
      v: initialHsv.v,
      a: initialRgba.a,
    });

    const [hexInput, setHexInput] = useState(value);

    const currentRgb = useMemo(() => hsvToRgb(hsva.h, hsva.s, hsva.v), [hsva.h, hsva.s, hsva.v]);
    const currentHex = useMemo(() => rgbaToHex({ ...currentRgb, a: hsva.a }), [currentRgb, hsva.a]);
    const hueColor = useMemo(() => getHueColor(hsva.h), [hsva.h]);

    const updateColor = useCallback((newHsva: HsvaColor) => {
      setHsva(newHsva);
      const rgb = hsvToRgb(newHsva.h, newHsva.s, newHsva.v);
      const hex = rgbaToHex({ ...rgb, a: newHsva.a });
      setHexInput(hex);
      onChange?.(hex);
    }, [onChange]);

    const handleSpectrumClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      updateColor({ ...hsva, s: x * 100, v: (1 - y) * 100 });
    }, [hsva, updateColor]);

    const handleHueClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      updateColor({ ...hsva, h: x * 360 });
    }, [hsva, updateColor]);

    const handleOpacityClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      updateColor({ ...hsva, a: Math.round(x * 100) });
    }, [hsva, updateColor]);

    const handleHexChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newHex = e.target.value;
      setHexInput(newHex);
      if (/^#[0-9A-Fa-f]{6}$/.test(newHex)) {
        const rgba = hexToRgba(newHex);
        const hsv = rgbToHsv(rgba.r, rgba.g, rgba.b);
        updateColor({ ...hsv, a: hsva.a });
      }
    }, [hsva.a, updateColor]);

    const handleRgbChange = useCallback((channel: 'r' | 'g' | 'b', value: string) => {
      const num = Math.max(0, Math.min(255, parseInt(value) || 0));
      const newRgb = { ...currentRgb, [channel]: num };
      const hsv = rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
      updateColor({ ...hsv, a: hsva.a });
    }, [currentRgb, hsva.a, updateColor]);

    const handleOpacityInputChange = useCallback((value: string) => {
      const num = Math.max(0, Math.min(100, parseInt(value) || 0));
      updateColor({ ...hsva, a: num });
    }, [hsva, updateColor]);

    const handleSwatchClick = useCallback((color: string) => {
      const rgba = hexToRgba(color);
      const hsv = rgbToHsv(rgba.r, rgba.g, rgba.b);
      setHexInput(color);
      updateColor({ ...hsv, a: 100 });
    }, [updateColor]);

    // Theme-specific styles
    const containerStyles = cn(
      'flex flex-col gap-6 p-6 max-w-sm',
      theme.base.background,
      theme.base.border,
      theme.base.shadow,
      theme.base.radius,
      theme.states.hover,
      className
    );

    const labelStyles = cn(
      'text-xs font-medium tracking-wide uppercase',
      themeName === 'minimalist' && 'text-gray-500',
      themeName === 'dark' && 'text-gray-100 font-semibold normal-case',
      themeName === 'glassmorphism' && 'text-white normal-case font-medium',
      themeName === 'neumorphism' && 'text-gray-600',
      themeName === 'gradient' && 'text-white/90',
      themeName === 'flat' && 'text-slate-800 font-bold',
      themeName === 'material' && 'text-gray-900 font-medium',
    );

    const descriptionStyles = cn(
      'text-xs',
      themeName === 'minimalist' && 'text-gray-400',
      themeName === 'dark' && 'text-gray-500',
      themeName === 'glassmorphism' && 'text-white/60',
      themeName === 'neumorphism' && 'text-gray-500',
      themeName === 'gradient' && 'text-white/60',
      themeName === 'flat' && 'text-slate-600',
      themeName === 'material' && 'text-gray-600',
    );

    const spectrumStyles = cn(
      'w-full h-40 cursor-crosshair relative',
      themeName === 'minimalist' && 'rounded',
      themeName === 'dark' && 'rounded-xl border border-gray-800',
      themeName === 'glassmorphism' && 'rounded-2xl overflow-hidden',
      themeName === 'neumorphism' && 'rounded-xl',
      themeName === 'gradient' && 'rounded-2xl',
      themeName === 'flat' && 'rounded-none border-4 border-slate-300',
      themeName === 'material' && 'rounded-lg shadow-md',
    );

    const sliderTrackStyles = cn(
      'w-full cursor-pointer relative',
      themeName === 'minimalist' && 'h-2 rounded-full',
      themeName === 'dark' && 'h-3 rounded-full bg-gray-800 p-0.5',
      themeName === 'glassmorphism' && 'h-4 rounded-full shadow-inner',
      themeName === 'neumorphism' && 'h-3 rounded-full',
      themeName === 'gradient' && 'h-3 rounded-full',
      themeName === 'flat' && 'h-4 rounded-none',
      themeName === 'material' && 'h-3 rounded-full',
    );

    const sliderThumbStyles = cn(
      'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full cursor-pointer',
      themeName === 'minimalist' && 'w-3 h-3 bg-white border border-gray-200 shadow-sm',
      themeName === 'dark' && 'w-4 h-4 bg-gray-900 border-2 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]',
      themeName === 'glassmorphism' && 'w-5 h-5 bg-white shadow-lg border-2 border-white/50',
      themeName === 'neumorphism' && 'w-4 h-4 bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]',
      themeName === 'gradient' && 'w-4 h-4 bg-white shadow-lg',
      themeName === 'flat' && 'w-5 h-5 bg-white border-4 border-slate-800',
      themeName === 'material' && 'w-4 h-4 bg-white shadow-md border-2 border-indigo-600',
    );

    const inputContainerStyles = cn(
      'flex items-center gap-4',
    );

    const colorPreviewStyles = cn(
      themeName === 'minimalist' && 'w-12 h-12 rounded border border-gray-200',
      themeName === 'dark' && 'w-14 h-14 rounded-xl border border-gray-700',
      themeName === 'glassmorphism' && 'w-16 h-16 rounded-2xl shadow-lg border-2 border-white/30',
      themeName === 'neumorphism' && 'w-14 h-14 rounded-xl shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]',
      themeName === 'gradient' && 'w-14 h-14 rounded-2xl shadow-lg',
      themeName === 'flat' && 'w-14 h-14 rounded-none border-4 border-slate-300',
      themeName === 'material' && 'w-14 h-14 rounded-lg shadow-md',
    );

    const hexInputStyles = cn(
      'w-full font-mono text-sm focus:outline-none',
      themeName === 'minimalist' && 'px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 transition-colors',
      themeName === 'dark' && 'bg-gray-800 rounded-lg border border-gray-700 px-3 py-2 text-cyan-400',
      themeName === 'glassmorphism' && 'backdrop-blur bg-white/10 rounded-xl px-4 py-3 border border-white/20 text-white placeholder-white/50',
      themeName === 'neumorphism' && 'bg-[#e0e5ec] rounded-lg px-3 py-2 text-gray-600 shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]',
      themeName === 'gradient' && 'bg-white/10 rounded-xl px-3 py-2 border border-white/20 text-white',
      themeName === 'flat' && 'bg-white px-3 py-2 border-4 border-slate-300 text-slate-800',
      themeName === 'material' && 'bg-white rounded-lg px-3 py-2 border-2 border-gray-300 text-gray-900 focus:border-indigo-600',
    );

    const rgbInputContainerStyles = cn(
      'grid grid-cols-4 gap-2',
    );

    const rgbInputWrapperStyles = cn(
      themeName === 'minimalist' && 'flex flex-col gap-1',
      themeName === 'dark' && 'bg-gray-800 rounded-lg border border-gray-700 p-2',
      themeName === 'glassmorphism' && 'backdrop-blur bg-white/10 rounded-xl p-2 border border-white/20',
      themeName === 'neumorphism' && 'bg-[#e0e5ec] rounded-lg p-2 shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]',
      themeName === 'gradient' && 'bg-white/10 rounded-xl p-2 border border-white/20',
      themeName === 'flat' && 'bg-white p-2 border-4 border-slate-300',
      themeName === 'material' && 'bg-gray-50 rounded-lg p-2',
    );

    const rgbLabelStyles = cn(
      'block text-xs text-center mb-1',
      themeName === 'minimalist' && 'text-gray-400',
      themeName === 'dark' && 'text-gray-500',
      themeName === 'glassmorphism' && 'text-white/60',
      themeName === 'neumorphism' && 'text-gray-500',
      themeName === 'gradient' && 'text-white/60',
      themeName === 'flat' && 'text-slate-600 font-bold',
      themeName === 'material' && 'text-gray-600',
    );

    const rgbInputStyles = cn(
      'w-full bg-transparent text-sm text-center focus:outline-none',
      themeName === 'minimalist' && 'px-0 py-2 text-gray-900 border-0 border-b border-gray-200 focus:border-gray-900 transition-colors',
      themeName === 'dark' && 'text-gray-200',
      themeName === 'glassmorphism' && 'text-white',
      themeName === 'neumorphism' && 'text-gray-600',
      themeName === 'gradient' && 'text-white',
      themeName === 'flat' && 'text-slate-800',
      themeName === 'material' && 'text-gray-900',
    );

    const swatchSectionStyles = cn(
      'flex flex-col gap-3',
    );

    const swatchLabelStyles = cn(
      'text-xs uppercase tracking-wider',
      themeName === 'minimalist' && 'font-medium text-gray-500',
      themeName === 'dark' && 'text-gray-500',
      themeName === 'glassmorphism' && 'text-white/60',
      themeName === 'neumorphism' && 'text-gray-500',
      themeName === 'gradient' && 'text-white/60',
      themeName === 'flat' && 'font-bold text-slate-600',
      themeName === 'material' && 'text-gray-600 font-medium',
    );

    const swatchButtonStyles = cn(
      'w-full aspect-square cursor-pointer transition-transform hover:scale-110',
      themeName === 'minimalist' && 'rounded border border-gray-200',
      themeName === 'dark' && 'rounded-lg border border-gray-700 hover:border-gray-500',
      themeName === 'glassmorphism' && 'rounded-xl border-2 border-white/20 hover:border-white/50 shadow-lg',
      themeName === 'neumorphism' && 'rounded-lg shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]',
      themeName === 'gradient' && 'rounded-xl shadow-md',
      themeName === 'flat' && 'rounded-none border-4 border-slate-300',
      themeName === 'material' && 'rounded-lg shadow-sm hover:shadow-md',
    );

    const spectrumPointerStyles = cn(
      'absolute rounded-full pointer-events-none',
      themeName === 'minimalist' && 'w-3 h-3 border-2 border-white shadow-sm',
      themeName === 'dark' && 'w-4 h-4 border-2 border-white shadow-[0_0_10px_rgba(6,182,212,0.5)]',
      themeName === 'glassmorphism' && 'w-5 h-5 border-3 border-white shadow-lg backdrop-blur',
      themeName === 'neumorphism' && 'w-4 h-4 border-2 border-white shadow-md',
      themeName === 'gradient' && 'w-4 h-4 border-2 border-white shadow-lg',
      themeName === 'flat' && 'w-4 h-4 border-4 border-white',
      themeName === 'material' && 'w-4 h-4 border-2 border-white shadow-md',
    );

    return (
      <div ref={ref} className={containerStyles} {...props}>
        {/* Header */}
        {(label || description) && (
          <div className="flex flex-col gap-1">
            {label && <h3 className={labelStyles}>{label}</h3>}
            {description && <p className={descriptionStyles}>{description}</p>}
          </div>
        )}

        {/* Color Spectrum */}
        <div className="flex flex-col gap-4">
          <div
            className={spectrumStyles}
            onClick={handleSpectrumClick}
            style={{
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, ${hueColor})`,
            }}
          >
            <div
              className={spectrumPointerStyles}
              style={{
                left: `${hsva.s}%`,
                top: `${100 - hsva.v}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Hue Slider */}
          <div
            className={sliderTrackStyles}
            onClick={handleHueClick}
            style={{
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
            }}
          >
            <div
              className={sliderThumbStyles}
              style={{ left: `${(hsva.h / 360) * 100}%` }}
            />
          </div>

          {/* Opacity Slider */}
          {showOpacity && (
            <div
              className={sliderTrackStyles}
              onClick={handleOpacityClick}
              style={{
                background: `linear-gradient(to right, transparent, ${currentHex}), repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%) 50% / 8px 8px`,
              }}
            >
              <div
                className={sliderThumbStyles}
                style={{ left: `${hsva.a}%` }}
              />
            </div>
          )}
        </div>

        {/* Color Preview & Hex Input */}
        <div className={inputContainerStyles}>
          <div
            className={colorPreviewStyles}
            style={{ backgroundColor: currentHex }}
          />
          <div className="flex-1">
            <input
              type="text"
              value={hexInput}
              onChange={handleHexChange}
              className={hexInputStyles}
            />
          </div>
        </div>

        {/* RGBA Inputs */}
        {showRgbInputs && (
          <div className={rgbInputContainerStyles}>
            {[
              { label: 'R', value: currentRgb.r, onChange: (v: string) => handleRgbChange('r', v) },
              { label: 'G', value: currentRgb.g, onChange: (v: string) => handleRgbChange('g', v) },
              { label: 'B', value: currentRgb.b, onChange: (v: string) => handleRgbChange('b', v) },
              ...(showOpacity ? [{ label: 'A', value: hsva.a, onChange: handleOpacityInputChange }] : []),
            ].map((item) => (
              <div key={item.label} className={rgbInputWrapperStyles}>
                <label className={rgbLabelStyles}>{item.label}</label>
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => item.onChange(e.target.value)}
                  className={rgbInputStyles}
                  min={item.label === 'A' ? 0 : 0}
                  max={item.label === 'A' ? 100 : 255}
                />
              </div>
            ))}
          </div>
        )}

        {/* Preset Swatches */}
        {showSwatches && (
          <div className={swatchSectionStyles}>
            <span className={swatchLabelStyles}>Swatches</span>
            <div className="grid grid-cols-5 gap-2">
              {presetColors.map((color, index) => (
                <button
                  key={index}
                  type="button"
                  className={swatchButtonStyles}
                  style={{ backgroundColor: color }}
                  onClick={() => handleSwatchClick(color)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';
