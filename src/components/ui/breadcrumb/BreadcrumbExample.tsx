import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from './index';

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function BreadcrumbExample() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        Breadcrumb Examples
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Basic with slash separator</h3>
          <Breadcrumb theme="minimalist">
            <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-900 hover:text-gray-600">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-400">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">With custom arrow separator</h3>
          <Breadcrumb theme="minimalist" separator={<ChevronRightIcon />}>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-black">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-black">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-black">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-400">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">With dot separator</h3>
          <Breadcrumb theme="minimalist" separator={<span className="w-1 h-1 bg-gray-300 rounded-full" />}>
            <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-600 hover:text-gray-900">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-400 font-medium">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">With home icon</h3>
          <Breadcrumb theme="minimalist">
            <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-gray-700 hover:text-gray-900">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-400">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">With collapse (maxItems=4)</h3>
          <Breadcrumb theme="minimalist" maxItems={4} itemsBeforeCollapse={1} itemsAfterCollapse={2}>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Category
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Subcategory
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-700 hover:text-gray-900">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-400">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="bg-gray-950 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Dark theme</h3>
          <Breadcrumb theme="dark">
            <BreadcrumbItem href="#" icon={<HomeIcon />} className="text-gray-300 hover:text-white">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-500">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="bg-gray-950 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Dark theme with arrows and collapse</h3>
          <Breadcrumb
            theme="dark"
            separator={<ChevronRightIcon />}
            maxItems={4}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={2}
          >
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Products
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Category
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Subcategory
            </BreadcrumbItem>
            <BreadcrumbItem href="#" className="text-gray-300 hover:text-white">
              Electronics
            </BreadcrumbItem>
            <BreadcrumbItem current className="text-gray-500">
              Smartphones
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
