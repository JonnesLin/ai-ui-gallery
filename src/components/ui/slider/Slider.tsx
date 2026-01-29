import { useState, useRef, useCallback } from 'react';
import { cn } from '../_shared/utils';
import type { SliderProps, SliderValue } from './Slider.types';

export function Slider({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  theme = 'minimalist',
  color = 'primary',
  disabled = false,
  showValue = false,
  marks,
  orientation = 'horizontal',
  className,
  label,
}: SliderProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<SliderValue>(defaultValue);
  const value = isControlled ? controlledValue : internalValue;

  const isRange = Array.isArray(value);
  const trackRef = useRef<HTMLDivElement>(null);

  const normalizeValue = useCallback(
    (val: number): number => {
      const stepped = Math.round((val - min) / step) * step + min;
      return Math.max(min, Math.min(max, stepped));
    },
    [min, max, step]
  );

  const valueToPercentage = useCallback(
    (val: number): number => {
      return ((val - min) / (max - min)) * 100;
    },
    [min, max]
  );

  const percentageToValue = useCallback(
    (percentage: number): number => {
      const val = (percentage / 100) * (max - min) + min;
      return normalizeValue(val);
    },
    [min, max, normalizeValue]
  );

  const updateValue = useCallback(
    (newValue: SliderValue) => {
      if (disabled) return;

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [disabled, isControlled, onChange]
  );

  const handleMouseDown = useCallback(
    (thumbIndex: number) => (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();

      const track = trackRef.current;
      if (!track) return;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const rect = track.getBoundingClientRect();
        const isHorizontal = orientation === 'horizontal';
        const size = isHorizontal ? rect.width : rect.height;
        const offset = isHorizontal ? moveEvent.clientX - rect.left : rect.bottom - moveEvent.clientY;

        const percentage = Math.max(0, Math.min(100, (offset / size) * 100));
        const newVal = percentageToValue(percentage);

        if (isRange && Array.isArray(value)) {
          const [start, end] = value;
          if (thumbIndex === 0) {
            const newStart = Math.min(newVal, end - step);
            updateValue([newStart, end]);
          } else {
            const newEnd = Math.max(newVal, start + step);
            updateValue([start, newEnd]);
          }
        } else {
          updateValue(newVal);
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [disabled, orientation, value, isRange, step, percentageToValue, updateValue]
  );

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const isHorizontal = orientation === 'horizontal';
      const size = isHorizontal ? rect.width : rect.height;
      const offset = isHorizontal ? e.clientX - rect.left : rect.bottom - e.clientY;

      const percentage = Math.max(0, Math.min(100, (offset / size) * 100));
      const newVal = percentageToValue(percentage);

      if (isRange && Array.isArray(value)) {
        const [start, end] = value;
        const midPoint = (start + end) / 2;
        if (newVal < midPoint) {
          updateValue([newVal, end]);
        } else {
          updateValue([start, newVal]);
        }
      } else {
        updateValue(newVal);
      }
    },
    [disabled, orientation, value, isRange, percentageToValue, updateValue]
  );

  const sizeConfig = {
    sm: { track: 'h-1', thumb: 'w-3 h-3' },
    md: { track: 'h-2', thumb: 'w-4 h-4' },
    lg: { track: 'h-3', thumb: 'w-5 h-5' },
  };

  const themeStyles = {
    minimalist: {
      trackBg: 'bg-gray-100',
      fill: 'bg-gray-900',
      thumb: 'bg-white border-2 border-gray-900',
      text: 'text-gray-600',
      textValue: 'text-gray-900',
      marks: 'text-gray-400',
    },
    dark: {
      trackBg: 'bg-gray-800',
      fill: 'bg-white',
      thumb: 'bg-white shadow-lg shadow-white/20',
      text: 'text-gray-400',
      textValue: 'text-white',
      marks: 'text-gray-600',
    },
    gradient: {
      trackBg: 'bg-slate-800',
      fill: 'bg-gradient-to-r from-purple-500 to-pink-500',
      thumb: 'bg-white shadow-lg',
      text: 'text-slate-300',
      textValue: 'text-white',
      marks: 'text-slate-500',
    },
    glassmorphism: {
      trackBg: 'bg-white/20',
      fill: 'bg-white/80',
      thumb: 'bg-white/90 backdrop-blur shadow-lg',
      text: 'text-white/80',
      textValue: 'text-white',
      marks: 'text-white/60',
    },
    neumorphism: {
      trackBg: 'bg-gray-200',
      fill: 'bg-gray-300',
      thumb: 'bg-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.8)]',
      text: 'text-gray-600',
      textValue: 'text-gray-900',
      marks: 'text-gray-400',
    },
    flat: {
      trackBg: 'bg-gray-200',
      fill: 'bg-blue-500',
      thumb: 'bg-white border-2 border-blue-500',
      text: 'text-gray-600',
      textValue: 'text-gray-900',
      marks: 'text-gray-400',
    },
    material: {
      trackBg: 'bg-gray-200',
      fill: 'bg-indigo-500',
      thumb: 'bg-white shadow-md',
      text: 'text-gray-600',
      textValue: 'text-gray-900',
      marks: 'text-gray-500',
    },
    luxury: {
      trackBg: 'bg-amber-100',
      fill: 'bg-amber-600',
      thumb: 'bg-white border-2 border-amber-600',
      text: 'text-amber-700',
      textValue: 'text-amber-900',
      marks: 'text-amber-500',
    },
    corporate: {
      trackBg: 'bg-blue-100',
      fill: 'bg-blue-600',
      thumb: 'bg-white border-2 border-blue-600',
      text: 'text-gray-700',
      textValue: 'text-gray-900',
      marks: 'text-gray-500',
    },
    cyberpunk: {
      trackBg: 'bg-gray-800',
      fill: 'bg-cyan-400',
      thumb: 'bg-cyan-400 shadow-lg shadow-cyan-400/50',
      text: 'text-cyan-300',
      textValue: 'text-cyan-400',
      marks: 'text-cyan-600',
    },
    pastel: {
      trackBg: 'bg-pink-100',
      fill: 'bg-pink-400',
      thumb: 'bg-white border-2 border-pink-400',
      text: 'text-pink-700',
      textValue: 'text-pink-900',
      marks: 'text-pink-400',
    },
    futuristic: {
      trackBg: 'bg-violet-900',
      fill: 'bg-violet-500',
      thumb: 'bg-violet-400 shadow-lg shadow-violet-400/50',
      text: 'text-violet-300',
      textValue: 'text-violet-200',
      marks: 'text-violet-500',
    },
    monochrome: {
      trackBg: 'bg-gray-200',
      fill: 'bg-gray-700',
      thumb: 'bg-white border-2 border-gray-700',
      text: 'text-gray-600',
      textValue: 'text-gray-900',
      marks: 'text-gray-400',
    },
    brutalist: {
      trackBg: 'bg-gray-300',
      fill: 'bg-black',
      thumb: 'bg-white border-4 border-black',
      text: 'text-gray-800',
      textValue: 'text-black',
      marks: 'text-gray-600',
    },
    retro: {
      trackBg: 'bg-amber-100',
      fill: 'bg-amber-600',
      thumb: 'bg-amber-50 border-2 border-amber-700',
      text: 'text-amber-700',
      textValue: 'text-amber-900',
      marks: 'text-amber-500',
    },
    playful: {
      trackBg: 'bg-purple-100',
      fill: 'bg-purple-500',
      thumb: 'bg-white border-2 border-purple-500 shadow-md',
      text: 'text-purple-700',
      textValue: 'text-purple-900',
      marks: 'text-purple-400',
    },
    nature: {
      trackBg: 'bg-green-100',
      fill: 'bg-green-600',
      thumb: 'bg-white border-2 border-green-600',
      text: 'text-green-700',
      textValue: 'text-green-900',
      marks: 'text-green-500',
    },
    sketch: {
      trackBg: 'bg-stone-200',
      fill: 'bg-stone-600',
      thumb: 'bg-white border-2 border-dashed border-stone-600',
      text: 'text-stone-700',
      textValue: 'text-stone-900',
      marks: 'text-stone-500',
    },
    neon: {
      trackBg: 'bg-gray-800',
      fill: 'bg-pink-500',
      thumb: 'bg-pink-400 shadow-lg shadow-pink-400/50',
      text: 'text-pink-300',
      textValue: 'text-pink-400',
      marks: 'text-pink-600',
    },
    '3d': {
      trackBg: 'bg-indigo-100',
      fill: 'bg-indigo-600',
      thumb: 'bg-white border-2 border-indigo-600 shadow-md',
      text: 'text-indigo-700',
      textValue: 'text-indigo-900',
      marks: 'text-indigo-500',
    },
  };

  const colorOverrides = {
    success: {
      minimalist: 'bg-green-600',
      dark: 'bg-green-500',
      gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
      glassmorphism: 'bg-green-400/80',
      neumorphism: 'bg-green-400',
      flat: 'bg-green-500',
      material: 'bg-green-600',
      luxury: 'bg-emerald-600',
      corporate: 'bg-green-600',
      cyberpunk: 'bg-green-400',
      pastel: 'bg-green-300',
      futuristic: 'bg-emerald-500',
      monochrome: 'bg-gray-600',
      brutalist: 'bg-green-700',
      retro: 'bg-green-600',
      playful: 'bg-green-500',
      nature: 'bg-green-600',
      sketch: 'bg-green-600',
      neon: 'bg-green-400',
      '3d': 'bg-green-600',
    },
    warning: {
      minimalist: 'bg-amber-600',
      dark: 'bg-amber-400',
      gradient: 'bg-gradient-to-r from-amber-400 to-orange-500',
      glassmorphism: 'bg-amber-400/80',
      neumorphism: 'bg-amber-400',
      flat: 'bg-amber-500',
      material: 'bg-amber-600',
      luxury: 'bg-yellow-600',
      corporate: 'bg-amber-600',
      cyberpunk: 'bg-amber-400',
      pastel: 'bg-amber-300',
      futuristic: 'bg-yellow-500',
      monochrome: 'bg-gray-500',
      brutalist: 'bg-amber-700',
      retro: 'bg-amber-600',
      playful: 'bg-amber-500',
      nature: 'bg-amber-600',
      sketch: 'bg-amber-600',
      neon: 'bg-amber-400',
      '3d': 'bg-amber-600',
    },
    error: {
      minimalist: 'bg-red-600',
      dark: 'bg-red-500',
      gradient: 'bg-gradient-to-r from-red-500 to-rose-500',
      glassmorphism: 'bg-red-400/80',
      neumorphism: 'bg-red-400',
      flat: 'bg-red-500',
      material: 'bg-red-600',
      luxury: 'bg-rose-600',
      corporate: 'bg-red-600',
      cyberpunk: 'bg-red-400',
      pastel: 'bg-red-300',
      futuristic: 'bg-rose-500',
      monochrome: 'bg-gray-700',
      brutalist: 'bg-red-700',
      retro: 'bg-red-600',
      playful: 'bg-red-500',
      nature: 'bg-red-600',
      sketch: 'bg-red-600',
      neon: 'bg-red-400',
      '3d': 'bg-red-600',
    },
  };

  const currentSize = sizeConfig[size];
  const currentTheme = themeStyles[theme];
  if (!currentTheme) {
    throw new Error(`Slider theme '${theme}' not found. Available themes: ${Object.keys(themeStyles).join(', ')}`);
  }
  const fillColor = color !== 'primary' && colorOverrides[color]?.[theme]
    ? colorOverrides[color][theme]
    : currentTheme.fill;

  const getCurrentValue = (): number | [number, number] => {
    if (isRange && Array.isArray(value)) {
      return value;
    }
    return typeof value === 'number' ? value : 0;
  };

  const currentValue = getCurrentValue();
  const percentage = isRange && Array.isArray(currentValue)
    ? [valueToPercentage(currentValue[0]), valueToPercentage(currentValue[1])]
    : valueToPercentage(currentValue as number);

  const isVertical = orientation === 'vertical';

  return (
    <div className={cn('space-y-3', isVertical && 'flex flex-col items-center', className)}>
      {label && showValue && (
        <div className="flex justify-between text-sm w-full">
          <span className={currentTheme.text}>{label}</span>
          <span className={cn('font-medium', currentTheme.textValue)}>
            {isRange && Array.isArray(currentValue) ? `${currentValue[0]} - ${currentValue[1]}` : currentValue}
          </span>
        </div>
      )}

      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className={cn(
          'relative rounded-full',
          currentTheme.trackBg,
          isVertical ? 'w-2 h-64' : currentSize.track,
          disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
        )}
      >
        {isRange && Array.isArray(percentage) ? (
          <div
            className={cn('absolute rounded-full transition-all', fillColor, isVertical ? 'w-full' : 'h-full')}
            style={
              isVertical
                ? { bottom: `${percentage[0]}%`, height: `${percentage[1] - percentage[0]}%` }
                : { left: `${percentage[0]}%`, width: `${percentage[1] - percentage[0]}%` }
            }
          />
        ) : (
          <div
            className={cn('absolute rounded-full transition-all', fillColor, isVertical ? 'w-full' : 'h-full')}
            style={isVertical ? { bottom: 0, height: `${percentage}%` } : { width: `${percentage}%` }}
          />
        )}

        {isRange && Array.isArray(percentage) ? (
          <>
            <div
              className={cn(
                'absolute rounded-full transition-all',
                currentTheme.thumb,
                currentSize.thumb,
                disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing',
                isVertical ? 'left-1/2' : 'top-1/2'
              )}
              style={
                isVertical
                  ? { bottom: `${percentage[0]}%`, transform: 'translateX(-50%)' }
                  : { left: `${percentage[0]}%`, transform: 'translateY(-50%)' }
              }
              onMouseDown={handleMouseDown(0)}
            />
            <div
              className={cn(
                'absolute rounded-full transition-all',
                currentTheme.thumb,
                currentSize.thumb,
                disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing',
                isVertical ? 'left-1/2' : 'top-1/2'
              )}
              style={
                isVertical
                  ? { bottom: `${percentage[1]}%`, transform: 'translateX(-50%)' }
                  : { left: `${percentage[1]}%`, transform: 'translateY(-50%)' }
              }
              onMouseDown={handleMouseDown(1)}
            />
          </>
        ) : (
          <div
            className={cn(
              'absolute rounded-full transition-all',
              currentTheme.thumb,
              currentSize.thumb,
              disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing',
              isVertical ? 'left-1/2' : 'top-1/2'
            )}
            style={
              isVertical
                ? { bottom: `${percentage}%`, transform: 'translateX(-50%)' }
                : { left: `${percentage}%`, transform: 'translateY(-50%)' }
            }
            onMouseDown={handleMouseDown(0)}
          />
        )}
      </div>

      {marks && (
        <div className={cn('flex justify-between text-xs w-full', currentTheme.marks)}>
          {marks.map((mark) => (
            <span key={mark.value}>{mark.label || mark.value}</span>
          ))}
        </div>
      )}
    </div>
  );
}
