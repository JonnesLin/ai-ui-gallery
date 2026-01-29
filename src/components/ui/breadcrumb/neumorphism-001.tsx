import { Breadcrumb, BreadcrumbItem } from './index';

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function NeumorphismBreadcrumb() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Neumorphism Breadcrumbs</h2>

      <Breadcrumb
        theme="neumorphism"
        separator={<span className="text-gray-400">/</span>}
        className="inline-flex gap-3 px-6 py-4 rounded-2xl"
        style={{
          boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff'
        }}
      >
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb
        theme="neumorphism"
        separator={<ChevronRightIcon />}
        className="inline-flex gap-3 px-6 py-4 rounded-2xl"
        style={{
          boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff'
        }}
      >
        <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-gray-700 hover:text-gray-900 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500 cursor-default">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb
        theme="neumorphism"
        separator={<span className="text-gray-400">/</span>}
        className="inline-flex gap-3 px-6 py-4 rounded-2xl"
        style={{
          boxShadow: 'inset 6px 6px 12px #b8bcc2, inset -6px -6px 12px #ffffff'
        }}
      >
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem current className="text-gray-500">
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb theme="neumorphism" separator={<ChevronRightIcon />} className="gap-3">
        <BreadcrumbItem
          href="#"
          className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 transition-all"
          style={{ boxShadow: '4px 4px 8px #b8bcc2, -4px -4px 8px #ffffff' }}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          href="#"
          className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 transition-all"
          style={{ boxShadow: '4px 4px 8px #b8bcc2, -4px -4px 8px #ffffff' }}
        >
          Products
        </BreadcrumbItem>
        <BreadcrumbItem
          href="#"
          className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 transition-all"
          style={{ boxShadow: '4px 4px 8px #b8bcc2, -4px -4px 8px #ffffff' }}
        >
          Electronics
        </BreadcrumbItem>
        <BreadcrumbItem
          current
          className="px-4 py-2 rounded-xl text-gray-500 cursor-default"
          style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
        >
          Smartphones
        </BreadcrumbItem>
      </Breadcrumb>

      <nav
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
        style={{ boxShadow: '6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff' }}
      >
        <a href="#" className="px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 transition-all">
          Home
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 transition-all">
          Products
        </a>
        <a href="#" className="px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 transition-all">
          Electronics
        </a>
        <span
          className="px-4 py-2 rounded-full text-gray-500 cursor-default"
          style={{ boxShadow: 'inset 3px 3px 6px #b8bcc2, inset -3px -3px 6px #ffffff' }}
        >
          Smartphones
        </span>
      </nav>

      <div className="space-y-4">
        <p className="text-xs text-gray-500">Responsive - collapses middle items on mobile using CSS</p>
        <nav
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm"
          style={{ boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff' }}
        >
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1.5">
            <HomeIcon />
            <span className="hidden md:inline">Home</span>
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400 md:hidden">...</span>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Electronics</a>
            <span className="text-gray-400">/</span>
          </div>
          <span className="text-gray-500">Smartphones</span>
        </nav>
      </div>
    </div>
  );
}
