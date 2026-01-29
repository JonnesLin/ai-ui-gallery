import { Breadcrumb, BreadcrumbItem } from './index';

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function DarkBreadcrumb() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Dark Breadcrumbs</h2>

      <Breadcrumb theme="dark" separator={<span className="text-gray-600">/</span>}>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="dark" separator={<ChevronRightIcon />} className="gap-3">
        <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-gray-300 hover:text-white transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500 cursor-default">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb
        theme="dark"
        separator={<span className="text-gray-600">/</span>}
        className="inline-flex px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl"
      >
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="dark" separator={<svg className="w-3 h-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>} className="gap-3">
        <BreadcrumbItem href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-blue-400">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="dark" separator={<svg className="w-3 h-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}>
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-900 hover:text-gray-200 transition-all">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-900 hover:text-gray-200 transition-all">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="px-3 py-1.5 rounded-lg text-gray-400 hover:bg-gray-900 hover:text-gray-200 transition-all">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="px-3 py-1.5 rounded-lg bg-gray-800 text-white">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="dark" separator={<span className="text-gray-700">/</span>} className="gap-3">
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-4">
        <p className="text-xs text-gray-500">Responsive - collapses middle items on mobile using CSS</p>
        <nav className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm">
          <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
            <HomeIcon />
            <span className="hidden md:inline">Home</span>
          </a>
          <span className="text-gray-600">/</span>
          <span className="text-gray-600 md:hidden">...</span>
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <span className="text-gray-600">/</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Electronics</a>
            <span className="text-gray-600">/</span>
          </div>
          <span className="text-gray-500">Smartphones</span>
        </nav>
      </div>
    </div>
  );
}
