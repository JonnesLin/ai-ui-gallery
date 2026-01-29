import { Spinner, Dots, Bars, Pulse } from './index';

export default function ExampleSizes() {
  return (
    <div className="space-y-12 p-6">
      <section>
        <h2 className="text-lg font-semibold mb-6">Spinner Sizes</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Spinner size="xs" theme="material" />
            <p className="text-xs mt-2">XS</p>
          </div>
          <div className="text-center">
            <Spinner size="sm" theme="material" />
            <p className="text-xs mt-2">SM</p>
          </div>
          <div className="text-center">
            <Spinner size="md" theme="material" />
            <p className="text-xs mt-2">MD</p>
          </div>
          <div className="text-center">
            <Spinner size="lg" theme="material" />
            <p className="text-xs mt-2">LG</p>
          </div>
          <div className="text-center">
            <Spinner size="xl" theme="material" />
            <p className="text-xs mt-2">XL</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Dots Sizes</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Dots size="xs" theme="material" />
            <p className="text-xs mt-2">XS</p>
          </div>
          <div className="text-center">
            <Dots size="sm" theme="material" />
            <p className="text-xs mt-2">SM</p>
          </div>
          <div className="text-center">
            <Dots size="md" theme="material" />
            <p className="text-xs mt-2">MD</p>
          </div>
          <div className="text-center">
            <Dots size="lg" theme="material" />
            <p className="text-xs mt-2">LG</p>
          </div>
          <div className="text-center">
            <Dots size="xl" theme="material" />
            <p className="text-xs mt-2">XL</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Bars Sizes</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Bars size="xs" theme="material" />
            <p className="text-xs mt-2">XS</p>
          </div>
          <div className="text-center">
            <Bars size="sm" theme="material" />
            <p className="text-xs mt-2">SM</p>
          </div>
          <div className="text-center">
            <Bars size="md" theme="material" />
            <p className="text-xs mt-2">MD</p>
          </div>
          <div className="text-center">
            <Bars size="lg" theme="material" />
            <p className="text-xs mt-2">LG</p>
          </div>
          <div className="text-center">
            <Bars size="xl" theme="material" />
            <p className="text-xs mt-2">XL</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Pulse Sizes</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Pulse size="xs" theme="material" />
            <p className="text-xs mt-2">XS</p>
          </div>
          <div className="text-center">
            <Pulse size="sm" theme="material" />
            <p className="text-xs mt-2">SM</p>
          </div>
          <div className="text-center">
            <Pulse size="md" theme="material" />
            <p className="text-xs mt-2">MD</p>
          </div>
          <div className="text-center">
            <Pulse size="lg" theme="material" />
            <p className="text-xs mt-2">LG</p>
          </div>
          <div className="text-center">
            <Pulse size="xl" theme="material" />
            <p className="text-xs mt-2">XL</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Thickness Variations (Spinner)</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Spinner size="md" theme="material" thickness="thin" />
            <p className="text-xs mt-2">Thin</p>
          </div>
          <div className="text-center">
            <Spinner size="md" theme="material" thickness="normal" />
            <p className="text-xs mt-2">Normal</p>
          </div>
          <div className="text-center">
            <Spinner size="md" theme="material" thickness="thick" />
            <p className="text-xs mt-2">Thick</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Count Variations</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Dots size="md" theme="material" count={3} />
            <p className="text-xs mt-2">3 Dots</p>
          </div>
          <div className="text-center">
            <Dots size="md" theme="material" count={4} />
            <p className="text-xs mt-2">4 Dots</p>
          </div>
          <div className="text-center">
            <Dots size="md" theme="material" count={5} />
            <p className="text-xs mt-2">5 Dots</p>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <div className="text-center">
            <Bars size="md" theme="material" count={3} />
            <p className="text-xs mt-2">3 Bars</p>
          </div>
          <div className="text-center">
            <Bars size="md" theme="material" count={4} />
            <p className="text-xs mt-2">4 Bars</p>
          </div>
          <div className="text-center">
            <Bars size="md" theme="material" count={5} />
            <p className="text-xs mt-2">5 Bars</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Shape Variations (Pulse)</h2>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Pulse size="md" theme="material" shape="circle" />
            <p className="text-xs mt-2">Circle</p>
          </div>
          <div className="text-center">
            <Pulse size="md" theme="material" shape="square" />
            <p className="text-xs mt-2">Square</p>
          </div>
        </div>
      </section>
    </div>
  );
}
