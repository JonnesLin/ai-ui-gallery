import { forwardRef, useMemo } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ChartProps, ChartDataPoint } from './Chart.types';

// Theme-specific chart colors
const chartColors: Record<string, string[]> = {
  minimalist: ['#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563'],
  dark: ['#22d3ee', '#a855f7', '#f97316', '#22c55e', '#f43f5e'],
  glassmorphism: ['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.15)'],
  neumorphism: ['#a3bffa', '#93c5fd', '#7dd3fc', '#67e8f9', '#5eead4'],
  gradient: ['#f472b6', '#c084fc', '#818cf8', '#38bdf8', '#34d399'],
  flat: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  material: ['#2196f3', '#4caf50', '#ff9800', '#f44336', '#9c27b0'],
  luxury: ['#d4af37', '#b8860b', '#8b6914', '#6b4c00', '#4a3500'],
  corporate: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8'],
  cyberpunk: ['#06b6d4', '#ec4899', '#8b5cf6', '#f97316', '#22d3ee'],
  pastel: ['#fca5a5', '#93c5fd', '#86efac', '#fde68a', '#c4b5fd'],
  futuristic: ['#8b5cf6', '#a78bfa', '#7c3aed', '#6d28d9', '#c084fc'],
  monochrome: ['#374151', '#6b7280', '#9ca3af', '#d1d5db', '#4b5563'],
  brutalist: ['#000000', '#374151', '#6b7280', '#9ca3af', '#1f2937'],
  retro: ['#d97706', '#b45309', '#92400e', '#f59e0b', '#ea580c'],
  playful: ['#a855f7', '#ec4899', '#f97316', '#06b6d4', '#22c55e'],
  nature: ['#16a34a', '#22c55e', '#4ade80', '#15803d', '#166534'],
  sketch: ['#78716c', '#57534e', '#a8a29e', '#44403c', '#292524'],
  neon: ['#ec4899', '#f472b6', '#be185d', '#c026d3', '#d946ef'],
  '3d': ['#4f46e5', '#6366f1', '#818cf8', '#3730a3', '#312e81'],
};

// Theme-specific text colors for value display
const chartTextColors: Record<string, { primary: string; secondary: string; muted: string }> = {
  minimalist: { primary: 'text-gray-900', secondary: 'text-gray-600', muted: 'text-gray-400' },
  dark: { primary: 'text-white', secondary: 'text-gray-300', muted: 'text-gray-500' },
  glassmorphism: { primary: 'text-white', secondary: 'text-white/80', muted: 'text-white/60' },
  neumorphism: { primary: 'text-gray-700', secondary: 'text-gray-500', muted: 'text-gray-400' },
  gradient: { primary: 'text-white', secondary: 'text-white/90', muted: 'text-white/70' },
  flat: { primary: 'text-gray-900', secondary: 'text-gray-600', muted: 'text-gray-400' },
  material: { primary: 'text-gray-900', secondary: 'text-gray-600', muted: 'text-gray-500' },
  luxury: { primary: 'text-amber-900', secondary: 'text-amber-700', muted: 'text-amber-500' },
  corporate: { primary: 'text-gray-900', secondary: 'text-gray-700', muted: 'text-gray-500' },
  cyberpunk: { primary: 'text-cyan-400', secondary: 'text-cyan-300', muted: 'text-cyan-600' },
  pastel: { primary: 'text-pink-900', secondary: 'text-pink-700', muted: 'text-pink-400' },
  futuristic: { primary: 'text-violet-200', secondary: 'text-violet-300', muted: 'text-violet-500' },
  monochrome: { primary: 'text-gray-900', secondary: 'text-gray-600', muted: 'text-gray-400' },
  brutalist: { primary: 'text-black', secondary: 'text-gray-800', muted: 'text-gray-600' },
  retro: { primary: 'text-amber-900', secondary: 'text-amber-700', muted: 'text-amber-500' },
  playful: { primary: 'text-purple-900', secondary: 'text-purple-700', muted: 'text-purple-400' },
  nature: { primary: 'text-green-900', secondary: 'text-green-700', muted: 'text-green-500' },
  sketch: { primary: 'text-stone-900', secondary: 'text-stone-700', muted: 'text-stone-500' },
  neon: { primary: 'text-pink-400', secondary: 'text-pink-300', muted: 'text-pink-600' },
  '3d': { primary: 'text-indigo-900', secondary: 'text-indigo-700', muted: 'text-indigo-500' },
};

// Theme-specific grid/line colors
const chartGridColors: Record<string, string> = {
  minimalist: '#f3f4f6',
  dark: '#374151',
  glassmorphism: 'rgba(255,255,255,0.1)',
  neumorphism: '#e5e7eb',
  gradient: 'rgba(255,255,255,0.15)',
  flat: '#e5e7eb',
  material: '#e0e0e0',
  luxury: '#fef3c7',
  corporate: '#dbeafe',
  cyberpunk: '#164e63',
  pastel: '#fce7f3',
  futuristic: '#4c1d95',
  monochrome: '#e5e7eb',
  brutalist: '#d1d5db',
  retro: '#fef3c7',
  playful: '#f3e8ff',
  nature: '#dcfce7',
  sketch: '#e7e5e4',
  neon: '#831843',
  '3d': '#e0e7ff',
};

function getChartColor(themeName: string, index: number, customColor?: string): string {
  if (customColor) return customColor;
  const colors = chartColors[themeName];
  if (!colors) {
    throw new Error(`Chart theme '${themeName}' not found. Available themes: ${Object.keys(chartColors).join(', ')}`);
  }
  return colors[index % colors.length];
}

// Bar Chart Component
function BarChart({
  data,
  themeName,
  showGrid,
  showLabels,
  height
}: {
  data: ChartDataPoint[];
  themeName: string;
  showGrid?: boolean;
  showLabels?: boolean;
  height: number;
}) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const textColors = chartTextColors[themeName];
  if (!textColors) {
    throw new Error(`Chart text colors for theme '${themeName}' not found. Available themes: ${Object.keys(chartTextColors).join(', ')}`);
  }
  const gridColor = chartGridColors[themeName];
  if (!gridColor) {
    throw new Error(`Chart grid color for theme '${themeName}' not found. Available themes: ${Object.keys(chartGridColors).join(', ')}`);
  }

  return (
    <div className="space-y-2">
      <div className="relative" style={{ height }}>
        {showGrid && (
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full border-t" style={{ borderColor: gridColor }} />
            ))}
          </div>
        )}
        <div className="relative h-full flex items-end justify-between gap-2 pb-6">
          {data.map((point, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full transition-all duration-500 hover:opacity-80"
                style={{
                  height: `${maxValue > 0 ? (point.value / maxValue) * 100 : 0}%`,
                  backgroundColor: getChartColor(themeName, i, point.color),
                  minHeight: 4
                }}
              />
              {showLabels && (
                <span className={cn('text-xs truncate max-w-full', textColors.muted)}>
                  {point.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Line Chart Component
function LineChart({
  data,
  themeName,
  showGrid,
  height
}: {
  data: ChartDataPoint[];
  themeName: string;
  showGrid?: boolean;
  height: number;
}) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const textColors = chartTextColors[themeName];
  if (!textColors) {
    throw new Error(`Chart text colors for theme '${themeName}' not found. Available themes: ${Object.keys(chartTextColors).join(', ')}`);
  }
  const gridColor = chartGridColors[themeName];
  if (!gridColor) {
    throw new Error(`Chart grid color for theme '${themeName}' not found. Available themes: ${Object.keys(chartGridColors).join(', ')}`);
  }
  const lineColor = getChartColor(themeName, 0);

  const points = data.map((point, i) => ({
    x: (i / Math.max(data.length - 1, 1)) * 100,
    y: 100 - (point.value / maxValue) * 100,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <div className="space-y-2">
      <div className="relative" style={{ height }}>
        {showGrid && (
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full border-t" style={{ borderColor: gridColor }} />
            ))}
          </div>
        )}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`line-gradient-${themeName}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={areaD}
            fill={`url(#line-gradient-${themeName})`}
          />
          <path
            d={pathD}
            fill="none"
            stroke={lineColor}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3"
              fill={themeName === 'dark' ? '#111827' : '#ffffff'}
              stroke={lineColor}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      <div className="flex justify-between">
        {data.map((point, i) => (
          <span key={i} className={cn('text-xs', textColors.muted)}>{point.label}</span>
        ))}
      </div>
    </div>
  );
}

// Pie/Donut Chart Component
function PieChart({
  data,
  themeName,
  isDonut = false
}: {
  data: ChartDataPoint[];
  themeName: string;
  isDonut?: boolean;
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (data.length === 0 || total === 0) return null;

  const textColors = chartTextColors[themeName];
  if (!textColors) {
    throw new Error(`Chart text colors for theme '${themeName}' not found. Available themes: ${Object.keys(chartTextColors).join(', ')}`);
  }

  const segments = useMemo(() => {
    let offset = 0;
    return data.map((point, i) => {
      const percentage = (point.value / total) * 100;
      const segment = {
        ...point,
        percentage,
        offset,
        color: getChartColor(themeName, i, point.color),
      };
      offset += percentage;
      return segment;
    });
  }, [data, total, themeName]);

  const strokeWidth = isDonut ? 16 : 40;
  const radius = 40;

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-32 h-32 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {segments.map((segment, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segment.percentage * 2.51} 251`}
              strokeDashoffset={-segment.offset * 2.51}
              className="transition-all duration-300 hover:opacity-80"
            />
          ))}
        </svg>
        {isDonut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn('text-lg font-semibold', textColors.primary)}>{total}</span>
          </div>
        )}
      </div>
      <div className="space-y-2">
        {segments.map((segment, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: segment.color }}
            />
            <span className={cn('text-sm', textColors.secondary)}>{segment.label}</span>
            <span className={cn('text-sm', textColors.muted)}>
              {segment.percentage.toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Horizontal Bar Chart Component
function HorizontalBarChart({
  data,
  themeName
}: {
  data: ChartDataPoint[];
  themeName: string;
}) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const textColors = chartTextColors[themeName];
  if (!textColors) {
    throw new Error(`Chart text colors for theme '${themeName}' not found. Available themes: ${Object.keys(chartTextColors).join(', ')}`);
  }
  const gridColor = chartGridColors[themeName];
  if (!gridColor) {
    throw new Error(`Chart grid color for theme '${themeName}' not found. Available themes: ${Object.keys(chartGridColors).join(', ')}`);
  }

  return (
    <div className="space-y-3">
      {data.map((point, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className={cn('text-sm', textColors.secondary)}>{point.label}</span>
            <span className={cn('text-sm', textColors.muted)}>{point.value}</span>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: gridColor }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(point.value / maxValue) * 100}%`,
                backgroundColor: getChartColor(themeName, i, point.color)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      theme: themeName,
      type,
      data,
      title,
      subtitle,
      showLegend = false,
      showGrid = true,
      showLabels = true,
      height = 200,
      className,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);
    const textColors = chartTextColors[themeName];
    if (!textColors) {
      throw new Error(`Chart text colors for theme '${themeName}' not found. Available themes: ${Object.keys(chartTextColors).join(', ')}`);
    }

    const containerClasses = cn(
      theme.base.background,
      theme.base.border,
      theme.base.shadow,
      theme.base.radius,
      'p-6',
      className
    );

    const renderChart = () => {
      switch (type) {
        case 'bar':
          return (
            <BarChart
              data={data}
              themeName={themeName}
              showGrid={showGrid}
              showLabels={showLabels}
              height={height}
            />
          );
        case 'line':
          return (
            <LineChart
              data={data}
              themeName={themeName}
              showGrid={showGrid}
              height={height}
            />
          );
        case 'pie':
          return <PieChart data={data} themeName={themeName} />;
        case 'donut':
          return <PieChart data={data} themeName={themeName} isDonut />;
        case 'horizontalBar':
          return <HorizontalBarChart data={data} themeName={themeName} />;
        default:
          return null;
      }
    };

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className={cn('font-semibold', textColors.primary)}>{title}</h3>
            )}
            {subtitle && (
              <p className={cn('text-sm mt-1', textColors.muted)}>{subtitle}</p>
            )}
          </div>
        )}
        {renderChart()}
        {showLegend && type !== 'pie' && type !== 'donut' && (
          <div className="mt-4 flex flex-wrap gap-4">
            {data.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getChartColor(themeName, i, point.color) }}
                />
                <span className={cn('text-sm', textColors.secondary)}>{point.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Chart.displayName = 'Chart';
