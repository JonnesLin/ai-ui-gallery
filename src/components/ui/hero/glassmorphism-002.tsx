import { Hero, HeroTitle, HeroSubtitle, HeroActions } from './index';

export default function GlassmorphismHero002() {
  return (
    <Hero theme="glassmorphism" layout="centered" height="screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-16 max-w-3xl mx-auto shadow-2xl">
        <HeroTitle className="text-white leading-tight">
          The Future is
          <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Transparent
          </span>
        </HeroTitle>
        <HeroSubtitle className="text-white/80">
          Experience the next generation of design with our glassmorphic
          interfaces. Beautiful, modern, and immersive.
        </HeroSubtitle>
        <HeroActions>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg">
            Watch Demo
          </button>
        </HeroActions>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-16 h-16 backdrop-blur-md bg-white/10 rounded-full border border-white/20 hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 hidden lg:block" />
    </Hero>
  );
}
