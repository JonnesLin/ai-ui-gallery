import { Breadcrumb, BreadcrumbItem } from './index';

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function GlassmorphismBreadcrumb() {
  return (
    <div
      className="min-h-screen p-8 space-y-12"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <h2 className="text-xs font-medium text-white/70 uppercase tracking-widest">Glassmorphism Breadcrumbs</h2>

      <Breadcrumb
        theme="glassmorphism"
        separator={<span className="text-white/40">/</span>}
        className="inline-flex px-5 py-3 backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl"
      >
        <BreadcrumbItem href="#" className="text-white hover:text-white/80 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white hover:text-white/80 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white hover:text-white/80 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-white/60">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb
        theme="glassmorphism"
        separator={<ChevronRightIcon />}
        className="inline-flex gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full"
      >
        <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-white hover:text-white/80 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white hover:text-white/80 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white hover:text-white/80 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-white/60 cursor-default">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <nav className="inline-flex items-center text-sm">
        <a href="#" className="px-4 py-2.5 backdrop-blur-xl bg-white/10 text-white/80 hover:bg-white/20 transition-all rounded-l-xl border-r border-white/10">
          Home
        </a>
        <a href="#" className="px-4 py-2.5 backdrop-blur-xl bg-white/10 text-white/80 hover:bg-white/20 transition-all border-r border-white/10">
          Products
        </a>
        <a href="#" className="px-4 py-2.5 backdrop-blur-xl bg-white/10 text-white/80 hover:bg-white/20 transition-all border-r border-white/10">
          Electronics
        </a>
        <span className="px-4 py-2.5 backdrop-blur-xl bg-white/25 text-white rounded-r-xl">
          Smartphones
        </span>
      </nav>

      <Breadcrumb
        theme="glassmorphism"
        separator={<span className="text-white/30">/</span>}
        className="inline-flex px-5 py-3 backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl"
      >
        <BreadcrumbItem href="#" className="text-white/90 hover:text-white transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white/90 hover:text-white transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-white/90 hover:text-white transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-white/50">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb
        theme="glassmorphism"
        separator={<svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
      >
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/25 text-white">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-4">
        <p className="text-xs text-white/70">Responsive - collapses middle items on mobile using CSS</p>
        <nav className="inline-flex items-center gap-2 px-5 py-3 backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl text-sm">
          <a href="#" className="text-white hover:text-white/80 transition-colors flex items-center gap-1.5">
            <HomeIcon />
            <span className="hidden md:inline">Home</span>
          </a>
          <span className="text-white/40">/</span>
          <span className="text-white/50 md:hidden">...</span>
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="text-white hover:text-white/80 transition-colors">Products</a>
            <span className="text-white/40">/</span>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Electronics</a>
            <span className="text-white/40">/</span>
          </div>
          <span className="text-white/60">Smartphones</span>
        </nav>
      </div>
    </div>
  );
}
