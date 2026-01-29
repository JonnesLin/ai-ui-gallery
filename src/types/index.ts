// 组件类型
export type ComponentType =
  | 'button' | 'input' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'switch' | 'slider' | 'badge' | 'tag' | 'avatar' | 'tooltip' | 'divider'
  | 'card' | 'table' | 'list' | 'timeline' | 'statistic' | 'progress' | 'skeleton' | 'empty' | 'image-gallery' | 'carousel' | 'accordion' | 'tree' | 'calendar' | 'chart'
  | 'navbar' | 'sidebar' | 'breadcrumb' | 'tabs' | 'pagination' | 'steps' | 'menu' | 'dropdown' | 'footer'
  | 'alert' | 'modal' | 'toast' | 'popover' | 'loading' | 'result'
  | 'form-layout' | 'search-box' | 'date-picker' | 'time-picker' | 'color-picker' | 'file-upload' | 'rating'
  | 'hero' | 'feature' | 'pricing' | 'testimonial' | 'cta' | 'faq' | 'team' | 'contact' | 'newsletter' | 'stats'
  | 'login-page' | 'register-page' | 'dashboard' | 'landing-page' | 'error-page' | 'profile-page' | 'settings-page' | 'blog-post' | 'product-page' | 'checkout-page'
  | 'chat-widget' | 'comment-section' | 'social-share' | 'cookie-banner' | 'back-to-top' | 'dark-mode-toggle'

// 视觉风格
export type VisualStyle =
  | 'minimalist' | 'glassmorphism' | 'neumorphism' | 'dark' | 'gradient'
  | 'brutalist' | 'retro' | 'cyberpunk' | 'pastel' | 'corporate'
  | 'playful' | 'luxury' | 'nature' | 'futuristic' | 'sketch'
  | 'monochrome' | 'neon' | '3d' | 'flat' | 'material'

// 组件类型分类
export const COMPONENT_CATEGORIES: Record<string, ComponentType[]> = {
  'Basic': ['button', 'input', 'textarea', 'select', 'checkbox', 'radio', 'switch', 'slider', 'badge', 'tag', 'avatar', 'tooltip', 'divider'],
  'Data Display': ['card', 'table', 'list', 'timeline', 'statistic', 'progress', 'skeleton', 'empty', 'image-gallery', 'carousel', 'accordion', 'tree', 'calendar', 'chart'],
  'Navigation': ['navbar', 'sidebar', 'breadcrumb', 'tabs', 'pagination', 'steps', 'menu', 'dropdown', 'footer'],
  'Feedback': ['alert', 'modal', 'toast', 'popover', 'loading', 'result'],
  'Form': ['form-layout', 'search-box', 'date-picker', 'time-picker', 'color-picker', 'file-upload', 'rating'],
  'Layout Sections': ['hero', 'feature', 'pricing', 'testimonial', 'cta', 'faq', 'team', 'contact', 'newsletter', 'stats'],
  'Full Pages': ['login-page', 'register-page', 'dashboard', 'landing-page', 'error-page', 'profile-page', 'settings-page', 'blog-post', 'product-page', 'checkout-page'],
  'Special': ['chat-widget', 'comment-section', 'social-share', 'cookie-banner', 'back-to-top', 'dark-mode-toggle'],
}

// 视觉风格元数据
export const STYLE_METADATA: Record<VisualStyle, { label: string; description: string; color: string }> = {
  minimalist: { label: 'Minimalist', description: '极简留白、细线条', color: '#f5f5f5' },
  glassmorphism: { label: 'Glassmorphism', description: '毛玻璃、模糊背景', color: '#a5b4fc' },
  neumorphism: { label: 'Neumorphism', description: '柔和凸起、内阴影', color: '#e5e7eb' },
  dark: { label: 'Dark', description: '深色背景、亮色点缀', color: '#1f2937' },
  gradient: { label: 'Gradient', description: '渐变色彩、流动感', color: '#ec4899' },
  brutalist: { label: 'Brutalist', description: '粗犷边框、原始感', color: '#000000' },
  retro: { label: 'Retro', description: '复古配色、像素感', color: '#f59e0b' },
  cyberpunk: { label: 'Cyberpunk', description: '霓虹、故障艺术', color: '#06b6d4' },
  pastel: { label: 'Pastel', description: '马卡龙、柔和色', color: '#fecdd3' },
  corporate: { label: 'Corporate', description: '专业商务、蓝灰调', color: '#3b82f6' },
  playful: { label: 'Playful', description: '活泼圆润、亮色', color: '#fbbf24' },
  luxury: { label: 'Luxury', description: '金色、深邃、优雅', color: '#d4af37' },
  nature: { label: 'Nature', description: '绿色、有机形状', color: '#22c55e' },
  futuristic: { label: 'Futuristic', description: '科技感、线条光效', color: '#8b5cf6' },
  sketch: { label: 'Sketch', description: '手绘边框、涂鸦感', color: '#78716c' },
  monochrome: { label: 'Monochrome', description: '单色系、灰度', color: '#6b7280' },
  neon: { label: 'Neon', description: '发光边框、暗底', color: '#f0abfc' },
  '3d': { label: '3D', description: '立体阴影、层次感', color: '#6366f1' },
  flat: { label: 'Flat', description: '纯色块、无阴影', color: '#14b8a6' },
  material: { label: 'Material', description: 'Google风格、涟漪', color: '#2196f3' },
}

// 组件注册表条目
export interface ComponentEntry {
  id: string                    // 唯一ID: button-glassmorphism-001
  type: ComponentType           // 组件类型
  style: VisualStyle            // 视觉风格
  variant: number               // 变体序号
  name: string                  // 显示名称
  path: string                  // 文件路径
  component: React.LazyExoticComponent<React.ComponentType<unknown>> // 懒加载组件
  thumbnail?: string            // 缩略图路径
  tags?: string[]               // 额外标签
  responsive?: boolean          // 是否响应式
  createdAt?: string            // 创建时间
}

// 筛选条件
export interface FilterState {
  types: ComponentType[]
  styles: VisualStyle[]
  search: string
  category: string | null
}

// 所有组件类型列表
export const ALL_COMPONENT_TYPES: ComponentType[] = Object.values(COMPONENT_CATEGORIES).flat()

// 所有视觉风格列表
export const ALL_VISUAL_STYLES: VisualStyle[] = [
  'minimalist', 'glassmorphism', 'neumorphism', 'dark', 'gradient',
  'brutalist', 'retro', 'cyberpunk', 'pastel', 'corporate',
  'playful', 'luxury', 'nature', 'futuristic', 'sketch',
  'monochrome', 'neon', '3d', 'flat', 'material'
]
