import { Hero, HeroTitle, HeroSubtitle, HeroActions } from './index';

export default function DarkHero002() {
  return (
    <Hero theme="dark" layout="centered" height="screen">
      <HeroTitle className="text-white">
        Build in the
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Darkness
        </span>
      </HeroTitle>
      <HeroSubtitle className="text-gray-400 mx-auto">
        Where code thrives and innovation never sleeps. Join developers who
        embrace the dark side.
      </HeroSubtitle>
      <HeroActions className="justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50">
          Start Coding
        </button>
        <button className="px-8 py-4 bg-gray-800 text-gray-200 font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          Documentation
        </button>
      </HeroActions>
    </Hero>
  );
}
