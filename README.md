# AI UI Gallery

> 1600+ React UI components across 20 visual themes, generated at scale by AI agents. Browse, preview, and copy — zero dependencies per component.

[![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss)](https://tailwindcss.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

## What is this?

A massive, browsable gallery of standalone React components. Every component is:

- **Self-contained** — single file, copy-paste ready
- **Zero external dependencies** — only React + Tailwind CSS
- **Fully typed** — written in TypeScript
- **Responsive** — works on mobile and desktop

## Component Types

**77 categories** covering the full spectrum of UI needs:

| Category | Components |
|----------|-----------|
| **Basics** | Button, Input, Card, Badge, Avatar, Checkbox, Radio, Switch, Slider... |
| **Data Display** | Table, Chart, Statistic, Timeline, Calendar, Tree, List, Carousel... |
| **Navigation** | Navbar, Sidebar, Tabs, Breadcrumb, Pagination, Menu, Steps... |
| **Feedback** | Alert, Toast, Modal, Loading, Skeleton, Progress, Popover, Tooltip... |
| **Forms** | Search Box, Date Picker, Time Picker, Color Picker, File Upload, Rating, Select... |
| **Sections** | Hero, Feature, Pricing, Testimonial, FAQ, CTA, Newsletter, Team, Footer... |
| **Pages** | Login, Register, Dashboard, Landing Page, Profile, Settings, Product, Error... |

## 20 Visual Themes

Every component type has variants in each of these styles:

| | | | |
|---|---|---|---|
| Minimalist | Glassmorphism | Neumorphism | Dark |
| Gradient | Flat | Material | Luxury |
| Corporate | Cyberpunk | Pastel | Futuristic |
| Monochrome | Brutalist | Retro | Playful |
| Nature | Sketch | Neon | 3D |

## Quick Start

```bash
# Clone
git clone https://github.com/JonnesLin/ai-ui-gallery.git
cd ai-ui-gallery

# Install
npm install

# Generate component registry
npm run generate-registry

# Start dev server
npm run dev
```

Open http://localhost:5173 to browse the gallery.

## Using Components

### Option 1: Copy from Gallery

1. Browse the gallery and find a component you like
2. Click to preview — switch between mobile/desktop viewports
3. View source code and copy it into your project

### Option 2: Direct Import

```tsx
import GlassmorphismButton from './components/ui/button/glassmorphism-001'

export default function App() {
  return <GlassmorphismButton />
}
```

### Component File Convention

```
src/components/ui/{component-type}/{style}-{variant}.tsx

Examples:
  button/glassmorphism-001.tsx
  card/cyberpunk-002.tsx
  navbar/minimalist-001.tsx
```

## Gallery Features

- **Masonry grid layout** — responsive 1-5 columns
- **Multi-dimensional filtering** — by type, style, and category
- **Real-time search** — keyword filtering across all components
- **Preview modal** — mobile/desktop viewport toggle
- **Code viewer** — view and copy source code
- **Lazy loading** — smooth performance with 1600+ components

## Project Structure

```
ai-ui-gallery/
├── src/
│   ├── components/ui/       # 77 component type directories
│   │   ├── _themes/         # 20 theme definitions
│   │   ├── _shared/         # Shared utilities
│   │   ├── button/          # 20 button variants
│   │   ├── card/            # 20 card variants
│   │   └── ...
│   ├── gallery/             # Gallery UI system
│   ├── types/               # TypeScript definitions
│   ├── registry.ts          # Auto-generated component registry
│   └── App.tsx
├── scripts/
│   └── generate-registry.ts # Registry generator
└── package.json
```

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4 |
| **Build** | Vite 7 |

## Contributing

Contributions welcome! To add a component:

1. Create a file in `src/components/ui/{type}/{style}-{variant}.tsx`
2. Follow the naming convention: `{style}-{variant}.tsx`
3. Export a default React component
4. Use only Tailwind CSS for styling (no external deps)
5. Run `npm run generate-registry` to update the registry
6. Submit a PR

## License

[MIT](./LICENSE) — use freely in personal and commercial projects.
