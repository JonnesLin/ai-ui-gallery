import { Suspense, useState, useRef, useEffect } from 'react'
import type { ComponentEntry } from '../types'
import { STYLE_METADATA } from '../types'

interface ComponentCardProps {
  entry: ComponentEntry
  onClick: () => void
}

export function ComponentCard({ entry, onClick }: ComponentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Debug: 检查 fixed 元素是否被正确隔离
  useEffect(() => {
    if (!isInView || !cardRef.current) return

    const timer = setTimeout(() => {
      const container = cardRef.current?.querySelector('.preview-container')
      if (!container) return

      const fixedElements = container.querySelectorAll('.fixed')
      if (fixedElements.length > 0) {
        console.group(`[DEBUG] ${entry.name} - Fixed elements found:`)
        fixedElements.forEach((el, i) => {
          const computed = getComputedStyle(el)
          console.log(`  #${i}: position=${computed.position}, z-index=${computed.zIndex}`, el)
          if (computed.position === 'fixed') {
            console.error(`  ⚠️ PROBLEM: Element still has position:fixed!`)
          }
        })
        console.groupEnd()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [isInView, entry.name])

  const styleMeta = STYLE_METADATA[entry.style]

  return (
    <div
      ref={cardRef}
      className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Preview area */}
      <div className="relative aspect-[4/3] bg-[#0d0d0d] overflow-hidden">
        {isInView && (
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
              </div>
            }
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* 外层控制布局空间，内层控制渲染尺寸 */}
              <div
                className="relative overflow-hidden"
                style={{ width: '320px', height: '240px' }}
              >
                {/*
                  多层隔离策略：
                  1. transform 创建新的包含块，让 fixed 元素相对于此容器定位
                  2. isolation: isolate 创建新的堆叠上下文
                  3. clipPath 强制裁剪超出内容
                  4. overflow: hidden + 外层 clip
                */}
                <div
                  className="preview-container absolute top-0 left-0 origin-top-left"
                  style={{
                    width: '800px',
                    height: '600px',
                    transform: 'scale(0.4)',
                    overflow: 'hidden',
                  }}
                >
                  <entry.component />
                </div>
              </div>
            </div>
          </Suspense>
        )}

        {/* Thumbnail fallback */}
        {!isInView && entry.thumbnail && (
          <img
            src={entry.thumbnail}
            alt={entry.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview
          </div>
        </div>
      </div>

      {/* Info area */}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm truncate mb-2">{entry.name}</h3>
        <div className="flex items-center gap-2">
          {/* Type badge */}
          <span className="px-2 py-0.5 text-xs bg-white/10 text-white/70 rounded">
            {entry.type}
          </span>
          {/* Style badge */}
          <span
            className="px-2 py-0.5 text-xs rounded flex items-center gap-1"
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
      </div>

      {/* Responsive indicator */}
      {entry.responsive && (
        <div className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-lg" title="Responsive">
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  )
}
