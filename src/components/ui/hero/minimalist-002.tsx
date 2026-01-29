import { Hero, HeroTitle, HeroSubtitle, HeroActions } from './index';

export default function MinimalistHero002() {
  return (
    <Hero theme="minimalist" layout="centered" height="screen">
      <HeroTitle className="text-neutral-900 font-light">
        Less is more.
      </HeroTitle>
      <HeroSubtitle className="text-neutral-500 mx-auto">
        Embrace simplicity. Build products that focus on what truly matters.
      </HeroSubtitle>
      <HeroActions className="justify-center">
        <button className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors">
          Get Started
        </button>
        <button className="px-8 py-4 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-400 transition-colors">
          Learn More
        </button>
      </HeroActions>
    </Hero>
  );
}
