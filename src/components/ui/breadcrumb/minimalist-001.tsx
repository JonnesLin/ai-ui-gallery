import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from './index';

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function MinimalistBreadcrumb() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest">Minimalist Breadcrumbs</h2>

      <Breadcrumb theme="minimalist" separator={<span className="text-gray-300">/</span>}>
        <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-400">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="minimalist" separator={<ChevronRightIcon />} className="gap-3">
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-black transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-black transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-black transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-400">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="minimalist" separator={<span className="w-1 h-1 bg-gray-300 rounded-full" />} className="gap-3">
        <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-400 font-medium">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="minimalist" separator={<span className="text-gray-300">/</span>}>
        <BreadcrumbItem href="#" className="text-gray-700 hover:underline underline-offset-4 transition-all">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:underline underline-offset-4 transition-all">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:underline underline-offset-4 transition-all">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-400">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="minimalist" separator={<span className="text-gray-300">/</span>}>
        <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-gray-700 hover:text-gray-900 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-400">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-4">
        <p className="text-xs text-gray-500">Responsive - collapses middle items on mobile using CSS</p>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 md:hidden">...</span>
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <span className="text-gray-300">/</span>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Electronics</a>
            <span className="text-gray-300">/</span>
          </div>
          <span className="text-gray-400">Smartphones</span>
        </nav>
      </div>
    </div>
  );
}
