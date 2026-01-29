import { Suspense, useState, useEffect, useCallback } from 'react'
import type { ComponentEntry } from '../types'
import { STYLE_METADATA } from '../types'
import { PortalContainerContext } from '../components/ui/modal/PortalContainerContext'

// 使用 import.meta.glob 预加载所有组件源代码
const codeModules = import.meta.glob('../components/ui/**/*.tsx', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

interface ComponentPreviewProps {
  entry: ComponentEntry | null
  onClose: () => void
}

export function ComponentPreview({ entry, onClose }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const [codeContent, setCodeContent] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null)
  const portalContainerRef = useCallback((node: HTMLDivElement | null) => {
    setPortalContainer(node)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Load code content when showing code
  useEffect(() => {
    if (showCode && entry) {
      // 转换 path 格式: ./components/ui/xxx -> ../components/ui/xxx.tsx
      const modulePath = entry.path.replace('./', '../') + '.tsx'
      const loader = codeModules[modulePath]
      if (loader) {
        loader().then(setCodeContent)
      } else {
        setCodeContent(`// 无法加载源代码: ${entry.path}.tsx`)
      }
    }
  }, [showCode, entry])

  const copyCode = async () => {
    await navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!entry) return null

  const styleMeta = STYLE_METADATA[entry.style]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[95vw] h-[90vh] bg-[#0f0f0f] rounded-2xl border border-white/10 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-white">{entry.name}</h2>
            <span className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
              {entry.type}
            </span>
            <span
              className="px-2 py-1 text-xs rounded flex items-center gap-1"
              style={{
                backgroundColor: `${styleMeta.color}20`,
                color: styleMeta.color,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: styleMeta.color }}
              />
              {styleMeta.label}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Code toggle */}
            <button
              onClick={() => setShowCode(!showCode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                showCode
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Code
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Preview */}
          <div className={`flex-1 overflow-auto p-8 ${showCode ? 'border-r border-white/10' : ''}`}>
            <div
              ref={portalContainerRef}
              className="relative mx-auto bg-white rounded-lg overflow-hidden"
              style={{ width: '100%', minHeight: '400px', transform: 'scale(0.6)', transformOrigin: 'top center' }}
            >
              <PortalContainerContext.Provider value={portalContainer}>
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                      <div className="w-10 h-10 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                    </div>
                  }
                >
                  <div className="p-6">
                    <entry.component />
                  </div>
                </Suspense>
              </PortalContainerContext.Provider>
            </div>
          </div>

          {/* Code panel */}
          {showCode && (
            <div className="w-[500px] flex flex-col bg-[#1a1a1a]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-sm text-white/70">{entry.path}.tsx</span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="flex-1 overflow-auto p-4 text-sm text-white/80 font-mono">
                {codeContent}
              </pre>
            </div>
          )}
        </div>

        {/* Footer with component info */}
        <div className="px-6 py-3 border-t border-white/10 flex items-center gap-6 text-sm text-white/50">
          <span>ID: {entry.id}</span>
          <span>Variant: {entry.variant}</span>
          {entry.responsive && <span className="text-green-400">Responsive</span>}
          {entry.createdAt && <span>Created: {entry.createdAt}</span>}
        </div>
      </div>
    </div>
  )
}
