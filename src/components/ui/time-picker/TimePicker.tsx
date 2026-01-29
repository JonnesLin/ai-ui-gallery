'use client';

import { useState, useCallback, useMemo } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { TimePickerProps, TimeValue, Period } from './TimePicker.types';

const getThemeStyles = (themeName: string) => {
  const styles: Record<string, {
    container: string;
    display: string;
    displayTime: string;
    displayPeriod: string;
    label: string;
    scrollContainer: string;
    optionBase: string;
    optionSelected: string;
    optionUnselected: string;
    periodButton: string;
    periodSelected: string;
    periodUnselected: string;
  }> = {
    minimalist: {
      container: 'w-full max-w-sm',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-light tracking-tight text-gray-900 mb-2',
      displayPeriod: 'text-sm font-medium text-gray-500 uppercase tracking-wider',
      label: 'block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-48 overflow-y-auto border border-gray-200 rounded-lg',
      optionBase: 'w-full py-3 text-sm transition-colors',
      optionSelected: 'bg-gray-900 text-white',
      optionUnselected: 'text-gray-700 hover:bg-gray-50',
      periodButton: 'py-6 rounded-lg text-sm font-medium transition-colors',
      periodSelected: 'bg-gray-900 text-white',
      periodUnselected: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
    },
    dark: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-white mb-2 tracking-tight',
      displayPeriod: 'text-base font-medium text-gray-400 uppercase tracking-widest',
      label: 'block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto bg-zinc-950 rounded-xl border border-zinc-800',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-blue-600 text-white',
      optionUnselected: 'text-gray-400 hover:bg-zinc-800 hover:text-white',
      periodButton: 'py-8 rounded-xl text-sm font-semibold transition-all',
      periodSelected: 'bg-blue-600 text-white',
      periodUnselected: 'bg-zinc-950 text-gray-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white',
    },
    glassmorphism: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-white mb-2 drop-shadow-lg',
      displayPeriod: 'text-lg font-semibold text-white/90',
      label: 'block text-xs font-semibold text-white/80 mb-2 uppercase',
      scrollContainer: 'h-52 overflow-y-auto backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-white/40 text-white shadow-lg',
      optionUnselected: 'text-white/70 hover:bg-white/20',
      periodButton: 'py-8 rounded-2xl text-sm font-semibold transition-all',
      periodSelected: 'bg-white/40 text-white shadow-lg',
      periodUnselected: 'backdrop-blur-lg bg-white/10 text-white/70 border border-white/20 hover:bg-white/20',
    },
    neumorphism: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-bold text-gray-600 mb-2',
      displayPeriod: 'text-base font-medium text-gray-500 uppercase tracking-wider',
      label: 'block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto rounded-xl shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-[#e0e5ec] text-gray-700 shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]',
      optionUnselected: 'text-gray-500 hover:text-gray-700',
      periodButton: 'py-8 rounded-xl text-sm font-semibold transition-all',
      periodSelected: 'shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-gray-700',
      periodUnselected: 'shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] text-gray-500 hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]',
    },
    gradient: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-white mb-2 drop-shadow-lg',
      displayPeriod: 'text-lg font-semibold text-white/80',
      label: 'block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg',
      optionUnselected: 'text-white/70 hover:bg-white/10',
      periodButton: 'py-8 rounded-2xl text-sm font-semibold transition-all',
      periodSelected: 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-purple-500/30',
      periodUnselected: 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10',
    },
    flat: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-bold text-slate-800 mb-2',
      displayPeriod: 'text-base font-semibold text-slate-600 uppercase',
      label: 'block text-xs font-bold text-slate-600 mb-2 uppercase',
      scrollContainer: 'h-52 overflow-y-auto bg-white border-4 border-slate-200',
      optionBase: 'w-full py-3 text-sm font-semibold transition-colors',
      optionSelected: 'bg-blue-500 text-white',
      optionUnselected: 'text-slate-700 hover:bg-slate-100',
      periodButton: 'py-8 text-sm font-bold transition-colors',
      periodSelected: 'bg-blue-500 text-white',
      periodUnselected: 'bg-white border-4 border-slate-200 text-slate-700 hover:bg-slate-100',
    },
    material: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-medium text-gray-900 mb-2',
      displayPeriod: 'text-base font-medium text-gray-600 uppercase tracking-wide',
      label: 'block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide',
      scrollContainer: 'h-52 overflow-y-auto bg-white rounded-lg shadow-md border border-gray-200',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-indigo-600 text-white',
      optionUnselected: 'text-gray-700 hover:bg-indigo-50',
      periodButton: 'py-8 rounded-lg text-sm font-medium transition-all shadow-sm',
      periodSelected: 'bg-indigo-600 text-white shadow-md',
      periodUnselected: 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:shadow-md',
    },
    luxury: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-amber-50 mb-2 drop-shadow-lg',
      displayPeriod: 'text-lg font-semibold text-amber-300/80',
      label: 'block text-xs font-semibold text-amber-300/70 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto bg-gray-900/80 rounded-xl border border-amber-900/50',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900',
      optionUnselected: 'text-amber-100 hover:bg-amber-900/30',
      periodButton: 'py-8 rounded-xl text-sm font-semibold transition-all',
      periodSelected: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 shadow-lg shadow-amber-500/30',
      periodUnselected: 'bg-gray-900/80 text-amber-100 border border-amber-900/50 hover:bg-amber-900/30',
    },
    corporate: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-semibold text-slate-800 mb-2',
      displayPeriod: 'text-base font-medium text-slate-600 uppercase tracking-wide',
      label: 'block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide',
      scrollContainer: 'h-52 overflow-y-auto bg-white rounded-md border border-slate-200 shadow-sm',
      optionBase: 'w-full py-3 text-sm font-medium transition-colors',
      optionSelected: 'bg-blue-700 text-white',
      optionUnselected: 'text-slate-700 hover:bg-slate-100',
      periodButton: 'py-8 rounded-md text-sm font-semibold transition-colors',
      periodSelected: 'bg-blue-700 text-white shadow-sm',
      periodUnselected: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100',
    },
    cyberpunk: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-cyan-300 mb-2 drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]',
      displayPeriod: 'text-lg font-bold text-fuchsia-400 uppercase tracking-widest',
      label: 'block text-xs font-bold text-cyan-400/70 mb-2 uppercase tracking-widest',
      scrollContainer: 'h-52 overflow-y-auto bg-[#0a0a0f] rounded border border-cyan-500/30',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50',
      optionUnselected: 'text-cyan-300 hover:bg-cyan-500/10',
      periodButton: 'py-8 rounded text-sm font-bold transition-all',
      periodSelected: 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50',
      periodUnselected: 'bg-[#0a0a0f] text-fuchsia-400 border border-fuchsia-500/50 hover:bg-fuchsia-500/10',
    },
    pastel: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-bold text-purple-600 mb-2',
      displayPeriod: 'text-base font-semibold text-purple-400 uppercase tracking-wider',
      label: 'block text-xs font-semibold text-purple-500 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto bg-white/70 rounded-2xl border border-purple-200 shadow-lg shadow-purple-100/50',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-purple-200 text-purple-700',
      optionUnselected: 'text-purple-500 hover:bg-purple-100',
      periodButton: 'py-8 rounded-full text-sm font-semibold transition-all',
      periodSelected: 'bg-purple-200 text-purple-700 shadow-lg shadow-purple-200/50',
      periodUnselected: 'bg-white/70 text-purple-500 border border-purple-200 hover:bg-purple-100',
    },
    futuristic: {
      container: 'w-full max-w-md',
      display: 'text-center mb-8',
      displayTime: 'text-7xl font-bold text-blue-100 mb-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]',
      displayPeriod: 'text-lg font-semibold text-violet-300 uppercase tracking-widest',
      label: 'block text-xs font-semibold text-blue-300/80 mb-2 uppercase tracking-wider',
      scrollContainer: 'h-52 overflow-y-auto bg-slate-800/80 backdrop-blur-sm rounded-lg border border-blue-400/30',
      optionBase: 'w-full py-3 text-sm font-medium transition-all',
      optionSelected: 'bg-blue-500 text-white shadow-lg shadow-blue-500/40',
      optionUnselected: 'text-blue-200 hover:bg-blue-500/10',
      periodButton: 'py-8 rounded-lg text-sm font-semibold transition-all',
      periodSelected: 'bg-blue-500 text-white shadow-lg shadow-blue-500/40',
      periodUnselected: 'bg-slate-800/80 text-violet-300 border border-violet-400/50 hover:bg-violet-500/10',
    },
    monochrome: {
      container: 'w-full max-w-sm',
      display: 'text-center mb-8',
      displayTime: 'text-6xl font-bold text-black mb-2',
      displayPeriod: 'text-sm font-bold text-gray-600 uppercase tracking-widest',
      label: 'block text-xs font-bold text-black mb-2 uppercase tracking-wider',
      scrollContainer: 'h-48 overflow-y-auto border border-black rounded-sm',
      optionBase: 'w-full py-3 text-sm font-medium transition-colors',
      optionSelected: 'bg-black text-white',
      optionUnselected: 'text-black hover:bg-gray-100',
      periodButton: 'py-6 rounded-sm text-sm font-bold transition-colors',
      periodSelected: 'bg-black text-white',
      periodUnselected: 'bg-white border border-black text-black hover:bg-black hover:text-white',
    },
  };

  const themeStyles = styles[themeName];
  if (!themeStyles) {
    throw new Error(`TimePicker: Theme "${themeName}" not found. Available themes: ${Object.keys(styles).join(', ')}`);
  }
  return themeStyles;
};

const getWrapperStyles = (themeName: string) => {
  const wrappers: Record<string, string> = {
    minimalist: 'bg-white p-4',
    dark: 'bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-2xl',
    glassmorphism: 'backdrop-blur-xl bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30',
    neumorphism: 'bg-[#e0e5ec] rounded-2xl p-8 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]',
    gradient: 'bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10',
    flat: 'bg-white p-8 border-4 border-slate-200',
    material: 'bg-white rounded-xl p-8 shadow-lg',
    luxury: 'bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-amber-900/50 shadow-lg shadow-amber-900/20',
    corporate: 'bg-white rounded-md p-8 border border-slate-200 shadow-sm',
    cyberpunk: 'bg-[#0a0a0f] rounded p-8 border border-cyan-500/30 shadow-lg shadow-cyan-500/20',
    pastel: 'bg-white/70 rounded-2xl p-8 border border-purple-200 shadow-lg shadow-purple-100/50',
    futuristic: 'bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30 shadow-lg shadow-blue-500/20',
    monochrome: 'bg-white p-8 border border-black',
  };
  const wrapperStyle = wrappers[themeName];
  if (!wrapperStyle) {
    throw new Error(`TimePicker: Wrapper style for theme "${themeName}" not found.`);
  }
  return wrapperStyle;
};

export function TimePicker({
  theme: themeName,
  value,
  onChange,
  format = '12h',
  minuteStep = 5,
  disabled = false,
  className,
}: TimePickerProps) {
  const theme = getTheme(themeName);
  const styles = getThemeStyles(themeName);

  const [internalHour, setInternalHour] = useState(value?.hour ?? 12);
  const [internalMinute, setInternalMinute] = useState(value?.minute ?? 0);
  const [internalPeriod, setInternalPeriod] = useState<Period>(value?.period ?? 'AM');

  const hour = value?.hour ?? internalHour;
  const minute = value?.minute ?? internalMinute;
  const period = value?.period ?? internalPeriod;

  const hours = useMemo(() => {
    if (format === '24h') {
      return Array.from({ length: 24 }, (_, i) => i);
    }
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }, [format]);

  const minutes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => i).filter((m) => m % minuteStep === 0);
  }, [minuteStep]);

  const handleHourChange = useCallback(
    (newHour: number) => {
      if (disabled) return;
      if (value === undefined) {
        setInternalHour(newHour);
      }
      onChange?.({ hour: newHour, minute, period });
    },
    [disabled, value, minute, period, onChange]
  );

  const handleMinuteChange = useCallback(
    (newMinute: number) => {
      if (disabled) return;
      if (value === undefined) {
        setInternalMinute(newMinute);
      }
      onChange?.({ hour, minute: newMinute, period });
    },
    [disabled, value, hour, period, onChange]
  );

  const handlePeriodChange = useCallback(
    (newPeriod: Period) => {
      if (disabled) return;
      if (value === undefined) {
        setInternalPeriod(newPeriod);
      }
      onChange?.({ hour, minute, period: newPeriod });
    },
    [disabled, value, hour, minute, onChange]
  );

  return (
    <div className={cn(styles.container, className)}>
      <div className={getWrapperStyles(themeName)}>
        <div className={styles.display}>
          <div className={styles.displayTime}>
            {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
          </div>
          {format === '12h' && <div className={styles.displayPeriod}>{period}</div>}
        </div>

        <div className={cn('grid gap-3', format === '12h' ? 'grid-cols-3' : 'grid-cols-2')}>
          <div>
            <label className={styles.label}>Hour</label>
            <div className={styles.scrollContainer}>
              {hours.map((h) => (
                <button
                  key={h}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleHourChange(h)}
                  className={cn(
                    styles.optionBase,
                    hour === h ? styles.optionSelected : styles.optionUnselected,
                    disabled && theme.states.disabled
                  )}
                >
                  {h.toString().padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={styles.label}>Minute</label>
            <div className={styles.scrollContainer}>
              {minutes.map((m) => (
                <button
                  key={m}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleMinuteChange(m)}
                  className={cn(
                    styles.optionBase,
                    minute === m ? styles.optionSelected : styles.optionUnselected,
                    disabled && theme.states.disabled
                  )}
                >
                  {m.toString().padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          {format === '12h' && (
            <div>
              <label className={styles.label}>Period</label>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => handlePeriodChange('AM')}
                  className={cn(
                    styles.periodButton,
                    period === 'AM' ? styles.periodSelected : styles.periodUnselected,
                    disabled && theme.states.disabled
                  )}
                >
                  AM
                </button>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => handlePeriodChange('PM')}
                  className={cn(
                    styles.periodButton,
                    period === 'PM' ? styles.periodSelected : styles.periodUnselected,
                    disabled && theme.states.disabled
                  )}
                >
                  PM
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

TimePicker.displayName = 'TimePicker';
