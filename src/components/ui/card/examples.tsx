import { Card, CardHeader, CardContent, CardFooter, CardImage } from './index';

export function CardExamples() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Minimalist Theme Examples */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Minimalist Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card theme="minimalist" variant="outlined" padding="lg">
              <CardHeader>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Category</span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide">Outlined Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  A simple outlined card with minimalist styling.
                </p>
              </CardContent>
            </Card>

            <Card theme="minimalist" variant="filled" padding="lg" className="bg-gray-50">
              <CardHeader>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Category</span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide">Filled Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  A filled card with subtle background.
                </p>
              </CardContent>
            </Card>

            <Card theme="minimalist" variant="outlined" padding="none" hoverable>
              <CardImage
                src="https://picsum.photos/seed/example1/400/300"
                alt="Example"
                aspectRatio="4/3"
              />
              <div className="p-6">
                <CardHeader>
                  <h3 className="text-lg font-light text-gray-900 tracking-wide">Image Card</h3>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    Card with image and hoverable effect.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Dark Theme Examples */}
        <section className="bg-[#0a0a0a] p-8 rounded-xl -mx-8">
          <h2 className="text-2xl font-light text-white mb-6">Dark Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card theme="dark" variant="elevated" padding="lg">
              <CardHeader>
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Featured</span>
                <h3 className="text-lg font-semibold text-white">Elevated Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  A card with elevation shadow for depth.
                </p>
              </CardContent>
            </Card>

            <Card theme="dark" variant="outlined" padding="lg">
              <CardHeader>
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Standard</span>
                <h3 className="text-lg font-semibold text-white">Outlined Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  A card with border outline styling.
                </p>
              </CardContent>
            </Card>

            <Card theme="dark" variant="filled" padding="lg" className="bg-gradient-to-br from-purple-900/50 to-transparent">
              <CardHeader>
                <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">Premium</span>
                <h3 className="text-lg font-semibold text-white">Filled Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  A filled card with gradient background.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Examples */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Interactive Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card theme="minimalist" variant="outlined" padding="lg" clickable hoverable onClick={() => alert('Card clicked!')}>
              <CardHeader>
                <h3 className="text-lg font-light text-gray-900 tracking-wide">Clickable Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Click this card to see an alert.
                </p>
              </CardContent>
              <CardFooter>
                <span className="text-xs text-gray-400">Click me</span>
              </CardFooter>
            </Card>

            <Card theme="minimalist" variant="outlined" padding="lg" hoverable>
              <CardHeader>
                <h3 className="text-lg font-light text-gray-900 tracking-wide">Hoverable Card</h3>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Hover over this card to see the scale effect.
                </p>
              </CardContent>
              <CardFooter>
                <span className="text-xs text-gray-400">Hover me</span>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
