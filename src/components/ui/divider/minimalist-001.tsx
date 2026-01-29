import { Divider } from './Divider';

export default function MinimalistDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">Horizontal</h2>

        <Divider thickness="thin" className="border-gray-200" />
        <Divider thickness="medium" className="border-gray-300" />
        <Divider thickness="thick" className="border-gray-400" />
        <Divider variant="dotted" className="border-gray-300" />
        <Divider variant="dashed" thickness="medium" className="border-gray-300" />
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">With Text</h2>

        <Divider
          label={<span className="text-xs text-gray-500 uppercase tracking-wider">or</span>}
          className="border-gray-200"
        />
        <Divider
          label={<span className="text-xs text-gray-500 uppercase tracking-wider">section</span>}
          labelPosition="left"
          className="border-gray-200"
        />
        <Divider
          label={<span className="text-xs text-gray-500 uppercase tracking-wider">end</span>}
          labelPosition="right"
          className="border-gray-200"
        />
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">With Icon</h2>

        <Divider
          label={
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
          className="border-gray-200"
        />

        <Divider
          label={<div className="w-2 h-2 rounded-full bg-gray-400"></div>}
          className="border-gray-200"
        />
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-gray-900 mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32">
          <div className="text-sm text-gray-600">Item 1</div>
          <Divider orientation="vertical" thickness="thin" className="border-gray-200" />
          <div className="text-sm text-gray-600">Item 2</div>
          <Divider orientation="vertical" thickness="medium" className="border-gray-300" />
          <div className="text-sm text-gray-600">Item 3</div>
          <Divider orientation="vertical" thickness="thick" className="border-gray-400" />
          <div className="text-sm text-gray-600">Item 4</div>
        </div>
      </section>

      {/* Spacing Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">Spacing Variants</h2>

        <Divider spacing="sm" className="border-gray-300" />
        <Divider spacing="md" className="border-gray-300" />
        <Divider spacing="lg" className="border-gray-300" />
      </section>
    </div>
  );
}
