import { Loading } from './Loading';

export default function ExampleLoadingUnified() {
  return (
    <div className="space-y-8 p-6">
      <section>
        <h3 className="text-sm font-medium mb-4">Spinner Variants</h3>
        <div className="flex gap-6 items-center">
          <Loading variant="spinner" size="sm" theme="minimalist" />
          <Loading variant="spinner" size="md" theme="material" />
          <Loading variant="spinner" size="lg" theme="dark" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium mb-4">Dots Variants</h3>
        <div className="flex gap-6 items-center">
          <Loading variant="dots" size="sm" theme="minimalist" />
          <Loading variant="dots" size="md" theme="material" />
          <Loading variant="dots" size="lg" theme="glassmorphism" color="white" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium mb-4">Bars Variants</h3>
        <div className="flex gap-6 items-center">
          <Loading variant="bars" size="sm" theme="minimalist" />
          <Loading variant="bars" size="md" theme="material" />
          <Loading variant="bars" size="lg" theme="dark" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium mb-4">Pulse Variants</h3>
        <div className="flex gap-6 items-center">
          <Loading variant="pulse" size="sm" theme="minimalist" />
          <Loading variant="pulse" size="md" theme="material" />
          <Loading variant="pulse" size="lg" theme="dark" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-medium mb-4">With Labels</h3>
        <div className="flex gap-6 items-center">
          <Loading variant="spinner" size="md" theme="material" label="Loading..." />
          <Loading variant="dots" size="md" theme="minimalist" label="Please wait" />
        </div>
      </section>
    </div>
  );
}
