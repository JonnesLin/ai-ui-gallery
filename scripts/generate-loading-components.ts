/**
 * 生成所有 loading 组件
 * 使用: npx tsx scripts/generate-loading-components.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const LOADING_DIR = path.join(__dirname, '../src/components/ui/loading')

// 确保目录存在
if (!fs.existsSync(LOADING_DIR)) {
  fs.mkdirSync(LOADING_DIR, { recursive: true })
}

// 风格配置
interface StyleConfig {
  name: string
  funcPrefix: string
  bgClass: string
  spinnerBorder: string
  dotBg: string
  progressBg: string
  progressTrack: string
  pulseBg: string
  skeletonBg: string
  cardBg: string
  cardShadow: string
}

const styles: StyleConfig[] = [
  {
    name: 'material',
    funcPrefix: 'Material',
    bgClass: '',
    spinnerBorder: 'border-blue-100 border-t-blue-600',
    dotBg: 'bg-blue-600',
    progressBg: 'bg-blue-600',
    progressTrack: 'bg-blue-100',
    pulseBg: 'bg-blue-600',
    skeletonBg: 'bg-gray-200',
    cardBg: 'bg-white',
    cardShadow: 'shadow-md',
  },
  {
    name: 'minimalist',
    funcPrefix: 'Minimalist',
    bgClass: '',
    spinnerBorder: 'border-gray-200 border-t-gray-900',
    dotBg: 'bg-gray-900',
    progressBg: 'bg-gray-900',
    progressTrack: 'bg-gray-200',
    pulseBg: 'bg-gray-900',
    skeletonBg: 'bg-gray-100',
    cardBg: 'bg-white',
    cardShadow: 'border border-gray-100',
  },
  {
    name: 'glassmorphism',
    funcPrefix: 'Glassmorphism',
    bgClass: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    spinnerBorder: 'border-white/30 border-t-white',
    dotBg: 'bg-white/80',
    progressBg: 'bg-white/80',
    progressTrack: 'bg-white/20',
    pulseBg: 'bg-white/60',
    skeletonBg: 'bg-white/20',
    cardBg: 'bg-white/10 backdrop-blur-lg',
    cardShadow: 'border border-white/20',
  },
  {
    name: 'neumorphism',
    funcPrefix: 'Neumorphism',
    bgClass: 'bg-gray-200',
    spinnerBorder: 'border-gray-200 border-t-gray-400',
    dotBg: 'bg-gray-300 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]',
    progressBg: 'bg-gray-300',
    progressTrack: 'bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]',
    pulseBg: 'bg-gray-300',
    skeletonBg: 'bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]',
    cardBg: 'bg-gray-200',
    cardShadow: 'shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]',
  },
  {
    name: 'dark',
    funcPrefix: 'Dark',
    bgClass: 'bg-gray-900',
    spinnerBorder: 'border-gray-700 border-t-white',
    dotBg: 'bg-white',
    progressBg: 'bg-white',
    progressTrack: 'bg-gray-700',
    pulseBg: 'bg-white',
    skeletonBg: 'bg-gray-700',
    cardBg: 'bg-gray-800',
    cardShadow: 'border border-gray-700',
  },
  {
    name: 'gradient',
    funcPrefix: 'Gradient',
    bgClass: '',
    spinnerBorder: 'border-pink-200 border-t-purple-600',
    dotBg: 'bg-gradient-to-r from-pink-500 to-purple-500',
    progressBg: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500',
    progressTrack: 'bg-gray-200',
    pulseBg: 'bg-gradient-to-br from-pink-500 to-purple-500',
    skeletonBg: 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200',
    cardBg: 'bg-white',
    cardShadow: 'shadow-lg',
  },
  {
    name: 'brutalist',
    funcPrefix: 'Brutalist',
    bgClass: '',
    spinnerBorder: 'border-black border-t-transparent border-4',
    dotBg: 'bg-black',
    progressBg: 'bg-black',
    progressTrack: 'bg-gray-300 border-2 border-black',
    pulseBg: 'bg-black',
    skeletonBg: 'bg-gray-300 border-2 border-black',
    cardBg: 'bg-white',
    cardShadow: 'border-4 border-black shadow-[4px_4px_0_0_black]',
  },
  {
    name: 'retro',
    funcPrefix: 'Retro',
    bgClass: 'bg-amber-50',
    spinnerBorder: 'border-amber-200 border-t-amber-600',
    dotBg: 'bg-amber-600',
    progressBg: 'bg-amber-600',
    progressTrack: 'bg-amber-200',
    pulseBg: 'bg-amber-500',
    skeletonBg: 'bg-amber-100',
    cardBg: 'bg-amber-50',
    cardShadow: 'border-2 border-amber-800',
  },
  {
    name: 'cyberpunk',
    funcPrefix: 'Cyberpunk',
    bgClass: 'bg-gray-900',
    spinnerBorder: 'border-cyan-500/30 border-t-cyan-400',
    dotBg: 'bg-cyan-400',
    progressBg: 'bg-gradient-to-r from-cyan-400 to-pink-500',
    progressTrack: 'bg-gray-800 border border-cyan-500/30',
    pulseBg: 'bg-cyan-400',
    skeletonBg: 'bg-gray-800 border border-cyan-500/20',
    cardBg: 'bg-gray-800',
    cardShadow: 'border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
  },
  {
    name: 'pastel',
    funcPrefix: 'Pastel',
    bgClass: 'bg-pink-50',
    spinnerBorder: 'border-pink-200 border-t-pink-400',
    dotBg: 'bg-pink-400',
    progressBg: 'bg-pink-400',
    progressTrack: 'bg-pink-100',
    pulseBg: 'bg-pink-300',
    skeletonBg: 'bg-pink-100',
    cardBg: 'bg-white',
    cardShadow: 'shadow-md border border-pink-100',
  },
  {
    name: 'corporate',
    funcPrefix: 'Corporate',
    bgClass: '',
    spinnerBorder: 'border-blue-100 border-t-blue-700',
    dotBg: 'bg-blue-700',
    progressBg: 'bg-blue-700',
    progressTrack: 'bg-blue-100',
    pulseBg: 'bg-blue-700',
    skeletonBg: 'bg-gray-200',
    cardBg: 'bg-white',
    cardShadow: 'shadow-lg border border-gray-100',
  },
  {
    name: 'playful',
    funcPrefix: 'Playful',
    bgClass: 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50',
    spinnerBorder: 'border-pink-300 border-t-purple-500',
    dotBg: 'bg-purple-400',
    progressBg: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400',
    progressTrack: 'bg-white',
    pulseBg: 'bg-pink-400',
    skeletonBg: 'bg-purple-100',
    cardBg: 'bg-white',
    cardShadow: 'shadow-xl border-2 border-purple-200 rounded-3xl',
  },
  {
    name: 'luxury',
    funcPrefix: 'Luxury',
    bgClass: 'bg-gray-900',
    spinnerBorder: 'border-amber-900/30 border-t-amber-500',
    dotBg: 'bg-amber-500',
    progressBg: 'bg-gradient-to-r from-amber-500 to-yellow-400',
    progressTrack: 'bg-amber-950',
    pulseBg: 'bg-amber-500',
    skeletonBg: 'bg-amber-950',
    cardBg: 'bg-gray-900',
    cardShadow: 'border border-amber-500/30',
  },
  {
    name: 'nature',
    funcPrefix: 'Nature',
    bgClass: 'bg-green-50',
    spinnerBorder: 'border-green-200 border-t-green-600',
    dotBg: 'bg-green-500',
    progressBg: 'bg-green-500',
    progressTrack: 'bg-green-100',
    pulseBg: 'bg-green-400',
    skeletonBg: 'bg-green-100',
    cardBg: 'bg-white',
    cardShadow: 'shadow-md border border-green-100',
  },
  {
    name: 'futuristic',
    funcPrefix: 'Futuristic',
    bgClass: 'bg-slate-900',
    spinnerBorder: 'border-violet-500/30 border-t-violet-400',
    dotBg: 'bg-violet-500',
    progressBg: 'bg-violet-500',
    progressTrack: 'bg-slate-800',
    pulseBg: 'bg-violet-500',
    skeletonBg: 'bg-slate-800',
    cardBg: 'bg-slate-800',
    cardShadow: 'border border-violet-500/30',
  },
  {
    name: 'sketch',
    funcPrefix: 'Sketch',
    bgClass: '',
    spinnerBorder: 'border-gray-400 border-t-gray-700 border-dashed',
    dotBg: 'bg-gray-600',
    progressBg: 'bg-gray-600',
    progressTrack: 'bg-gray-200 border border-dashed border-gray-400',
    pulseBg: 'bg-gray-500',
    skeletonBg: 'bg-gray-100 border border-dashed border-gray-300',
    cardBg: 'bg-white',
    cardShadow: 'border-2 border-dashed border-gray-400',
  },
  {
    name: 'monochrome',
    funcPrefix: 'Monochrome',
    bgClass: '',
    spinnerBorder: 'border-gray-300 border-t-gray-600',
    dotBg: 'bg-gray-600',
    progressBg: 'bg-gray-600',
    progressTrack: 'bg-gray-200',
    pulseBg: 'bg-gray-500',
    skeletonBg: 'bg-gray-200',
    cardBg: 'bg-white',
    cardShadow: 'shadow border border-gray-200',
  },
  {
    name: 'neon',
    funcPrefix: 'Neon',
    bgClass: 'bg-gray-900',
    spinnerBorder: 'border-pink-500/30 border-t-pink-500',
    dotBg: 'bg-pink-500',
    progressBg: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500',
    progressTrack: 'bg-gray-800 border border-pink-500/30',
    pulseBg: 'bg-pink-500',
    skeletonBg: 'bg-pink-500/20',
    cardBg: 'bg-gray-800',
    cardShadow: 'border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]',
  },
  {
    name: '3d',
    funcPrefix: 'ThreeD',
    bgClass: '',
    spinnerBorder: 'border-indigo-200 border-t-indigo-600',
    dotBg: 'bg-indigo-500 shadow-lg',
    progressBg: 'bg-indigo-500',
    progressTrack: 'bg-indigo-100 shadow-inner',
    pulseBg: 'bg-indigo-500 shadow-lg',
    skeletonBg: 'bg-gray-200 shadow-inner',
    cardBg: 'bg-white',
    cardShadow: 'shadow-2xl',
  },
  {
    name: 'flat',
    funcPrefix: 'Flat',
    bgClass: '',
    spinnerBorder: 'border-teal-200 border-t-teal-500',
    dotBg: 'bg-teal-500',
    progressBg: 'bg-teal-500',
    progressTrack: 'bg-teal-100',
    pulseBg: 'bg-teal-500',
    skeletonBg: 'bg-teal-100',
    cardBg: 'bg-teal-50',
    cardShadow: '',
  },
]

// 生成 Spinner 组件
function generateSpinner(style: StyleConfig): string {
  const needsDarkText = ['neon', 'dark', 'cyberpunk', 'luxury', 'futuristic'].includes(style.name)
  return `export default function ${style.funcPrefix}Spinner() {
  return (
    <div className="flex items-center gap-6 p-6 ${style.bgClass}">
      <div className="w-8 h-8 border-4 ${style.spinnerBorder} rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 ${style.spinnerBorder} rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 ${style.spinnerBorder} rounded-full animate-spin" />
    </div>
  );
}
`
}

// 生成 Dots 组件
function generateDots(style: StyleConfig): string {
  return `export default function ${style.funcPrefix}Dots() {
  return (
    <div className="flex gap-2 p-6 ${style.bgClass}">
      <div className="w-3 h-3 ${style.dotBg} rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 ${style.dotBg} rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 ${style.dotBg} rounded-full animate-bounce" />
    </div>
  );
}
`
}

// 生成 Progress 组件
function generateProgress(style: StyleConfig): string {
  const animName = `${style.name}-progress`
  return `export default function ${style.funcPrefix}Progress() {
  return (
    <div className="p-6 ${style.bgClass}">
      <div className="w-64 h-2 ${style.progressTrack} rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 ${style.progressBg} rounded-full"
          style={{ animation: "${animName} 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{\`
        @keyframes ${animName} {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      \`}</style>
    </div>
  );
}
`
}

// 生成 Pulse 组件
function generatePulse(style: StyleConfig): string {
  return `export default function ${style.funcPrefix}Pulse() {
  return (
    <div className="flex gap-6 p-6 ${style.bgClass}">
      <div className="relative">
        <div className="w-4 h-4 ${style.pulseBg} rounded-full" />
        <div className="absolute inset-0 ${style.pulseBg} rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 ${style.pulseBg} rounded-lg animate-pulse" />
    </div>
  );
}
`
}

// 生成 Bars 组件
function generateBars(style: StyleConfig): string {
  const animName = `${style.name}-bars`
  return `export default function ${style.funcPrefix}Bars() {
  return (
    <div className="p-6 ${style.bgClass}">
      <div className="flex items-end gap-1 h-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-2 ${style.dotBg} rounded-t-sm"
            style={{
              animation: "${animName} 1s ease-in-out infinite",
              animationDelay: \`\${i * 0.1}s\`,
            }}
          />
        ))}
      </div>
      <style>{\`
        @keyframes ${animName} {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      \`}</style>
    </div>
  );
}
`
}

// 生成 Skeleton 组件
function generateSkeleton(style: StyleConfig): string {
  return `export default function ${style.funcPrefix}Skeleton() {
  return (
    <div className="space-y-3 p-6 ${style.bgClass}">
      <div className="h-4 ${style.skeletonBg} rounded animate-pulse w-3/4" />
      <div className="h-4 ${style.skeletonBg} rounded animate-pulse w-1/2" />
      <div className="h-4 ${style.skeletonBg} rounded animate-pulse w-5/6" />
    </div>
  );
}
`
}

// 生成 Card Skeleton 组件
function generateCardSkeleton(style: StyleConfig): string {
  return `export default function ${style.funcPrefix}CardSkeleton() {
  return (
    <div className="p-6 ${style.bgClass}">
      <div className="w-72 p-6 ${style.cardBg} rounded-lg ${style.cardShadow}">
        <div className="h-40 ${style.skeletonBg} animate-pulse rounded mb-4" />
        <div className="h-4 ${style.skeletonBg} animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 ${style.skeletonBg} animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
`
}

// 组件类型映射
const componentTypes = [
  { suffix: 'spinner', generator: generateSpinner },
  { suffix: 'dots', generator: generateDots },
  { suffix: 'progress', generator: generateProgress },
  { suffix: 'pulse', generator: generatePulse },
  { suffix: 'bars', generator: generateBars },
  { suffix: 'skeleton', generator: generateSkeleton },
  { suffix: 'card-skeleton', generator: generateCardSkeleton },
]

// 主函数
function main() {
  console.log('Generating loading components...\n')

  let count = 0
  for (const style of styles) {
    for (const { suffix, generator } of componentTypes) {
      const fileName = `${style.name}-${suffix}-001.tsx`
      const filePath = path.join(LOADING_DIR, fileName)
      const content = generator(style)

      fs.writeFileSync(filePath, content)
      count++
    }
    console.log(`Generated: ${style.name} (${componentTypes.length} components)`)
  }

  console.log(`\nTotal: ${count} components generated`)
  console.log('\nRun `npx tsx scripts/generate-registry.ts` to update the registry.')
}

main()
