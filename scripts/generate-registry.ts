/**
 * 自动扫描 src/components/ui 目录，生成组件注册表
 *
 * 使用: npx tsx scripts/generate-registry.ts
 *
 * 组件文件命名规范:
 * - 基础格式: {style}-{variant}.tsx (例: glassmorphism-001.tsx)
 * - 子类型格式: {style}-{subtype}-{variant}.tsx (例: material-spinner-001.tsx)
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const UI_DIR = path.join(__dirname, '../src/components/ui')
const REGISTRY_FILE = path.join(__dirname, '../src/registry.ts')

interface ComponentInfo {
  id: string
  type: string
  style: string
  subtype: string | null
  variant: number
  name: string
  path: string
}

// 将 kebab-case 转换为 Title Case
function toTitleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// 扫描组件目录
function scanComponents(): ComponentInfo[] {
  const components: ComponentInfo[] = []

  if (!fs.existsSync(UI_DIR)) {
    console.log('UI directory not found:', UI_DIR)
    return components
  }

  const typeDirs = fs.readdirSync(UI_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  for (const typeDir of typeDirs) {
    const typePath = path.join(UI_DIR, typeDir)
    const files = fs.readdirSync(typePath)
      .filter(f => f.endsWith('.tsx') && !f.startsWith('index'))

    for (const file of files) {
      // 解析文件名: {style}-{subtype}-{variant}.tsx 或 {style}-{variant}.tsx
      const subtypeMatch = file.match(/^([a-z0-9]+)-([a-z-]+)-(\d+)\.tsx$/)
      const basicMatch = file.match(/^([a-z0-9]+)-(\d+)\.tsx$/)

      let style: string
      let subtype: string | null = null
      let variantStr: string

      if (subtypeMatch) {
        // 带子类型: material-spinner-001.tsx
        ;[, style, subtype, variantStr] = subtypeMatch
      } else if (basicMatch) {
        // 基础格式: material-001.tsx
        ;[, style, variantStr] = basicMatch
      } else {
        console.warn(`Skipping invalid filename: ${typeDir}/${file}`)
        continue
      }

      const variant = parseInt(variantStr, 10)
      const fileBaseName = subtype
        ? `${style}-${subtype}-${variantStr.padStart(3, '0')}`
        : `${style}-${variantStr.padStart(3, '0')}`
      const id = `${typeDir}-${fileBaseName}`
      const name = subtype
        ? `${toTitleCase(style)} ${toTitleCase(subtype)} ${variant}`
        : `${toTitleCase(style)} ${toTitleCase(typeDir)} ${variant}`

      components.push({
        id,
        type: typeDir,
        style,
        subtype,
        variant,
        name,
        path: `./components/ui/${typeDir}/${fileBaseName}`,
      })
    }
  }

  return components
}

// 生成注册表代码
function generateRegistryCode(components: ComponentInfo[]): string {
  const imports = `import { lazy } from 'react'
import type { ComponentType as ReactComponentType } from 'react'
import type { ComponentEntry, ComponentType, VisualStyle } from './types'
`

  const registryEntries = components.map(c => `  {
    id: '${c.id}',
    type: '${c.type}' as ComponentType,
    style: '${c.style}' as VisualStyle,
    variant: ${c.variant},
    name: '${c.name}',
    path: '${c.path}',
  }`).join(',\n')

  const code = `${imports}
// 组件注册表 - 由 scripts/generate-registry.ts 自动生成
// 生成时间: ${new Date().toISOString()}
// 组件数量: ${components.length}

const componentData: Omit<ComponentEntry, 'component'>[] = [
${registryEntries}
]

const componentModules = import.meta.glob<{ default: ReactComponentType<unknown> }>('./components/ui/**/*.tsx')

// 构建注册表（懒加载组件）
const registry: Record<string, ComponentEntry> = {}

componentData.forEach(entry => {
  registry[entry.id] = {
    ...entry,
    component: lazy(() => {
      const importer = componentModules[\`\${entry.path}.tsx\`]
      if (!importer) {
        return Promise.reject(new Error(\`Unknown component module: \${entry.path}.tsx\`))
      }
      return importer()
    }),
  }
})

// ============================================
// 查询函数
// ============================================

// 获取所有组件
export function getAllComponents(): ComponentEntry[] {
  return Object.values(registry)
}

// 按类型筛选
export function getComponentsByType(type: ComponentType): ComponentEntry[] {
  return Object.values(registry).filter(c => c.type === type)
}

// 按风格筛选
export function getComponentsByStyle(style: VisualStyle): ComponentEntry[] {
  return Object.values(registry).filter(c => c.style === style)
}

// 按类型和风格筛选
export function getComponentsByTypeAndStyle(type: ComponentType, style: VisualStyle): ComponentEntry[] {
  return Object.values(registry).filter(c => c.type === type && c.style === style)
}

// 搜索组件
export function searchComponents(query: string): ComponentEntry[] {
  const lowerQuery = query.toLowerCase()
  return Object.values(registry).filter(c =>
    c.name.toLowerCase().includes(lowerQuery) ||
    c.type.toLowerCase().includes(lowerQuery) ||
    c.style.toLowerCase().includes(lowerQuery) ||
    c.tags?.some(t => t.toLowerCase().includes(lowerQuery))
  )
}

// 高级筛选
export function filterComponents(options: {
  types?: ComponentType[]
  styles?: VisualStyle[]
  search?: string
  category?: string
}): ComponentEntry[] {
  let results = Object.values(registry)

  if (options.types && options.types.length > 0) {
    results = results.filter(c => options.types!.includes(c.type))
  }

  if (options.styles && options.styles.length > 0) {
    results = results.filter(c => options.styles!.includes(c.style))
  }

  if (options.search) {
    const query = options.search.toLowerCase()
    results = results.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.type.toLowerCase().includes(query) ||
      c.style.toLowerCase().includes(query)
    )
  }

  return results
}

// 获取统计信息
export function getStats() {
  const components = Object.values(registry)
  const byType: Record<string, number> = {}
  const byStyle: Record<string, number> = {}

  components.forEach(c => {
    byType[c.type] = (byType[c.type] || 0) + 1
    byStyle[c.style] = (byStyle[c.style] || 0) + 1
  })

  return {
    total: components.length,
    byType,
    byStyle,
  }
}

// 获取单个组件
export function getComponent(id: string): ComponentEntry | undefined {
  return registry[id]
}

export default registry
`

  return code
}

// 主函数
function main() {
  console.log('Scanning components...')
  const components = scanComponents()
  console.log(`Found ${components.length} components`)

  if (components.length === 0) {
    console.log('No components found. Registry will be empty.')
  }

  console.log('Generating registry...')
  const code = generateRegistryCode(components)

  fs.writeFileSync(REGISTRY_FILE, code)
  console.log(`Registry written to ${REGISTRY_FILE}`)

  // 输出统计
  const byType: Record<string, number> = {}
  const byStyle: Record<string, number> = {}
  components.forEach(c => {
    byType[c.type] = (byType[c.type] || 0) + 1
    byStyle[c.style] = (byStyle[c.style] || 0) + 1
  })

  console.log('\nBy Type:')
  Object.entries(byType).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`)
  })

  console.log('\nBy Style:')
  Object.entries(byStyle).sort((a, b) => b[1] - a[1]).forEach(([style, count]) => {
    console.log(`  ${style}: ${count}`)
  })
}

main()
