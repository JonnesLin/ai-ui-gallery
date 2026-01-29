/**
 * 拆分 loading showcase 文件为独立组件
 * 使用: npx tsx scripts/split-loading-components.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const LOADING_DIR = path.join(__dirname, '../src/components/ui/loading')

// 组件模板
const templates: Record<string, (style: string, content: string) => string> = {
  spinner: (style, content) => `export default function ${toPascalCase(style)}Spinner() {
  return (
    <div className="flex items-center gap-8 p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}
    </div>
  )
}
`,
  dots: (style, content) => `export default function ${toPascalCase(style)}Dots() {
  return (
    <div className="flex gap-2 p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}
    </div>
  )
}
`,
  progress: (style, content, styleTag) => `export default function ${toPascalCase(style)}Progress() {
  return (
    <div className="space-y-4 p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}${styleTag ? `\n      <style>{\`${styleTag}\`}</style>` : ''}
    </div>
  )
}
`,
  pulse: (style, content) => `export default function ${toPascalCase(style)}Pulse() {
  return (
    <div className="flex gap-8 p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}
    </div>
  )
}
`,
  bars: (style, content, styleTag) => `export default function ${toPascalCase(style)}Bars() {
  return (
    <div className="p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}${styleTag ? `\n      <style>{\`${styleTag}\`}</style>` : ''}
    </div>
  )
}
`,
  skeleton: (style, content) => `export default function ${toPascalCase(style)}Skeleton() {
  return (
    <div className="space-y-3 p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}
    </div>
  )
}
`,
  'card-skeleton': (style, content) => `export default function ${toPascalCase(style)}CardSkeleton() {
  return (
    <div className="p-6${content.includes('bg-') ? '' : ' bg-white'}">
${content}
    </div>
  )
}
`,
}

function toPascalCase(str: string): string {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

// 从文件内容中提取各个组件部分
function extractComponents(content: string): Record<string, { content: string; styleTag?: string }> {
  const result: Record<string, { content: string; styleTag?: string }> = {}

  // 匹配 {/* Comment */} 开头的区块
  const sectionPattern = /\{\/\*\s*(Spinners?|Dots|Line\s*Progress?|Rainbow\s*Progress|Linear\s*Progress|Pulse|Bars|Dancing\s*Bars|With\s*Text|Skeleton|Card\s*Skeleton|Material\s*Circular|Indeterminate|Query\s*Progress|Ripple|Content\s*Placeholder|Card\s*Placeholder|Refresh\s*Indicator|Bouncing|Hearts?)\s*\*\/\}/gi

  const sections = content.split(sectionPattern)

  // 简化处理：直接解析整个文件找特定标记
  const patterns: [string, RegExp][] = [
    ['spinner', /Spinners?|Circular/i],
    ['dots', /Dots|Bouncing|Indeterminate/i],
    ['progress', /Progress|Line|Rainbow|Linear/i],
    ['pulse', /Pulse|Ripple|Hearts?/i],
    ['bars', /Bars|Dancing|Query/i],
    ['skeleton', /(?<!Card\s)Skeleton|Placeholder(?!\s*\})/i],
    ['card-skeleton', /Card\s*Skeleton|Card\s*Placeholder/i],
  ]

  // 找每个 section 的内容
  const lines = content.split('\n')
  let currentSection: string | null = null
  let currentContent: string[] = []
  let sectionDepth = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // 检查是否是新 section 的开始
    const commentMatch = line.match(/\{\/\*\s*(.+?)\s*\*\/\}/)
    if (commentMatch) {
      const comment = commentMatch[1]

      // 保存之前的 section
      if (currentSection && currentContent.length > 0) {
        result[currentSection] = { content: currentContent.join('\n') }
      }

      // 确定新 section 类型
      currentSection = null
      for (const [type, pattern] of patterns) {
        if (pattern.test(comment)) {
          currentSection = type
          currentContent = []
          sectionDepth = 0
          break
        }
      }
      continue
    }

    // 收集当前 section 的内容
    if (currentSection) {
      // 跳过 h3 标题行
      if (line.includes('<h3')) continue

      // 跳过包裹的 div
      if (line.match(/^\s*<div className="space-y-4">/)) continue
      if (line.match(/^\s*<\/div>\s*$/) && sectionDepth === 0) {
        // 这是 section 的结束 div
        if (currentContent.length > 0) {
          result[currentSection] = { content: currentContent.join('\n') }
        }
        currentSection = null
        currentContent = []
        continue
      }

      currentContent.push(line)
    }
  }

  // 保存最后一个 section
  if (currentSection && currentContent.length > 0) {
    result[currentSection] = { content: currentContent.join('\n') }
  }

  return result
}

function processFile(filePath: string) {
  const fileName = path.basename(filePath, '.tsx')
  const match = fileName.match(/^([a-z0-9]+)-(\d+)$/)
  if (!match) {
    console.log(`Skipping: ${fileName} (already split or invalid format)`)
    return
  }

  const [, style, variant] = match
  const content = fs.readFileSync(filePath, 'utf-8')

  console.log(`Processing: ${fileName}`)

  // 直接手动解析更可靠
  const componentTypes = ['spinner', 'dots', 'progress', 'pulse', 'bars', 'skeleton', 'card-skeleton']

  for (const type of componentTypes) {
    const newFileName = `${style}-${type}-${variant}.tsx`
    const newFilePath = path.join(LOADING_DIR, newFileName)

    // 根据 style 生成对应的组件
    const componentContent = generateComponent(style, type, content)
    if (componentContent) {
      fs.writeFileSync(newFilePath, componentContent)
      console.log(`  Created: ${newFileName}`)
    }
  }

  // 删除原文件
  fs.unlinkSync(filePath)
  console.log(`  Deleted: ${fileName}.tsx`)
}

function generateComponent(style: string, type: string, originalContent: string): string | null {
  const stylePascal = toPascalCase(style)
  const typePascal = toPascalCase(type)

  // 提取 @keyframes
  const keyframesMatch = originalContent.match(/@keyframes\s+[\w-]+\s*\{[^}]+\}/g)
  const keyframes = keyframesMatch ? keyframesMatch.join('\n        ') : ''

  // 根据类型生成组件
  switch (type) {
    case 'spinner':
      return generateSpinner(style, stylePascal, originalContent)
    case 'dots':
      return generateDots(style, stylePascal, originalContent)
    case 'progress':
      return generateProgress(style, stylePascal, originalContent, keyframes)
    case 'pulse':
      return generatePulse(style, stylePascal, originalContent)
    case 'bars':
      return generateBars(style, stylePascal, originalContent, keyframes)
    case 'skeleton':
      return generateSkeleton(style, stylePascal, originalContent)
    case 'card-skeleton':
      return generateCardSkeleton(style, stylePascal, originalContent)
    default:
      return null
  }
}

function generateSpinner(style: string, stylePascal: string, content: string): string {
  // 从原文件提取 spinner 相关的 div
  const spinnerSection = extractSection(content, /Spinners?|Circular/i)
  if (!spinnerSection) return generateDefaultSpinner(style, stylePascal)

  return `export default function ${stylePascal}Spinner() {
  return (
    <div className="flex items-center gap-8 p-6">
${spinnerSection}
    </div>
  )
}
`
}

function generateDots(style: string, stylePascal: string, content: string): string {
  const section = extractSection(content, /Dots|Bouncing|Indeterminate/i)
  if (!section) return generateDefaultDots(style, stylePascal)

  return `export default function ${stylePascal}Dots() {
  return (
    <div className="flex gap-2 p-6">
${section}
    </div>
  )
}
`
}

function generateProgress(style: string, stylePascal: string, content: string, keyframes: string): string {
  const section = extractSection(content, /Progress|Line|Rainbow|Linear/i)
  if (!section) return generateDefaultProgress(style, stylePascal)

  const styleTag = keyframes ? `
      <style>{\`
        ${keyframes}
      \`}</style>` : ''

  return `export default function ${stylePascal}Progress() {
  return (
    <div className="space-y-4 p-6">
${section}${styleTag}
    </div>
  )
}
`
}

function generatePulse(style: string, stylePascal: string, content: string): string {
  const section = extractSection(content, /Pulse|Ripple|Hearts/i)
  if (!section) return generateDefaultPulse(style, stylePascal)

  return `export default function ${stylePascal}Pulse() {
  return (
    <div className="flex gap-8 p-6">
${section}
    </div>
  )
}
`
}

function generateBars(style: string, stylePascal: string, content: string, keyframes: string): string {
  const section = extractSection(content, /Bars|Dancing|Query/i)
  if (!section) return generateDefaultBars(style, stylePascal)

  // 提取 bars 相关的 keyframes
  const barsKeyframes = content.match(/@keyframes\s+(dance|rise|bar)[^}]+\{[^}]+\}/gi)
  const styleTag = barsKeyframes ? `
      <style>{\`
        ${barsKeyframes.join('\n        ')}
      \`}</style>` : ''

  return `export default function ${stylePascal}Bars() {
  return (
    <div className="p-6">
${section}${styleTag}
    </div>
  )
}
`
}

function generateSkeleton(style: string, stylePascal: string, content: string): string {
  const section = extractSection(content, /(?<!Card\s)Skeleton|Content\s*Placeholder/i)
  if (!section) return generateDefaultSkeleton(style, stylePascal)

  return `export default function ${stylePascal}Skeleton() {
  return (
    <div className="space-y-3 p-6">
${section}
    </div>
  )
}
`
}

function generateCardSkeleton(style: string, stylePascal: string, content: string): string {
  const section = extractSection(content, /Card\s*Skeleton|Card\s*Placeholder/i)
  if (!section) return generateDefaultCardSkeleton(style, stylePascal)

  return `export default function ${stylePascal}CardSkeleton() {
  return (
    <div className="p-6">
${section}
    </div>
  )
}
`
}

function extractSection(content: string, pattern: RegExp): string | null {
  const lines = content.split('\n')
  let inSection = false
  let depth = 0
  let sectionLines: string[] = []
  let foundStart = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // 检查是否是目标 section 的开始
    if (line.match(/\{\/\*/) && pattern.test(line)) {
      inSection = true
      foundStart = false
      depth = 0
      sectionLines = []
      continue
    }

    // 检查是否是其他 section 的开始（结束当前 section）
    if (inSection && line.match(/\{\/\*/) && !pattern.test(line)) {
      break
    }

    if (inSection) {
      // 跳过 h3 和外层包裹 div
      if (line.includes('<h3')) continue
      if (line.match(/^\s*<div className="space-y-\d+">/)) {
        foundStart = true
        continue
      }

      if (foundStart) {
        // 计算 div 深度来找到正确的结束点
        const opens = (line.match(/<div/g) || []).length
        const closes = (line.match(/<\/div>/g) || []).length

        if (depth === 0 && closes > opens && sectionLines.length > 0) {
          // 到达 section 的结束
          break
        }

        depth += opens - closes
        sectionLines.push(line)
      }
    }
  }

  if (sectionLines.length === 0) return null

  // 清理和格式化
  const result = sectionLines
    .filter(l => l.trim())
    .map(l => '      ' + l.trim())
    .join('\n')

  return result || null
}

// 默认组件模板（当无法从原文件提取时使用）
function generateDefaultSpinner(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Spinner() {
  return (
    <div className="flex items-center gap-8 p-6">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
    </div>
  )
}
`
}

function generateDefaultDots(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Dots() {
  return (
    <div className="flex gap-2 p-6">
      <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce" />
    </div>
  )
}
`
}

function generateDefaultProgress(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Progress() {
  return (
    <div className="space-y-4 p-6">
      <div className="w-64 h-1 bg-gray-200 overflow-hidden rounded-full">
        <div
          className="h-full w-1/3 bg-gray-600 rounded-full"
          style={{ animation: 'progress-slide 1.5s ease-in-out infinite' }}
        />
      </div>
      <style>{\`
        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      \`}</style>
    </div>
  )
}
`
}

function generateDefaultPulse(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Pulse() {
  return (
    <div className="flex gap-8 p-6">
      <div className="relative">
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
        <div className="absolute inset-0 bg-gray-600 rounded-full animate-ping opacity-30" />
      </div>
    </div>
  )
}
`
}

function generateDefaultBars(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Bars() {
  return (
    <div className="p-6">
      <div className="flex items-end gap-1 h-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-2 bg-gray-600 rounded-t-sm"
            style={{
              animation: 'bars-rise 1.2s ease-in-out infinite',
              animationDelay: \`\${i * 0.15}s\`
            }}
          />
        ))}
      </div>
      <style>{\`
        @keyframes bars-rise {
          0%, 100% { height: 20%; opacity: 0.6; }
          50% { height: 100%; opacity: 1; }
        }
      \`}</style>
    </div>
  )
}
`
}

function generateDefaultSkeleton(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}Skeleton() {
  return (
    <div className="space-y-3 p-6">
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
    </div>
  )
}
`
}

function generateDefaultCardSkeleton(style: string, stylePascal: string): string {
  return `export default function ${stylePascal}CardSkeleton() {
  return (
    <div className="p-6">
      <div className="w-80 p-6 bg-white rounded-lg shadow">
        <div className="h-48 bg-gray-200 animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2" />
      </div>
    </div>
  )
}
`
}

// 主函数
function main() {
  const files = fs.readdirSync(LOADING_DIR)
    .filter(f => f.endsWith('.tsx'))
    .filter(f => f.match(/^[a-z0-9]+-\d+\.tsx$/)) // 只处理 {style}-{variant}.tsx 格式

  console.log(`Found ${files.length} showcase files to split\n`)

  for (const file of files) {
    processFile(path.join(LOADING_DIR, file))
    console.log('')
  }

  console.log('Done! Run `npx tsx scripts/generate-registry.ts` to update the registry.')
}

main()
