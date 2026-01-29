/**
 * Hero Component System - Complete Examples
 *
 * 这个文件展示了所有可能的组合和用法
 */

import { Hero, HeroTitle, HeroSubtitle, HeroActions, HeroImage } from './index';

// Example 1: 最简单的用法
export function Example01_Basic() {
  return (
    <Hero theme="minimalist" layout="centered" height="screen">
      <HeroTitle>Simple Hero</HeroTitle>
      <HeroSubtitle>Just the basics</HeroSubtitle>
      <HeroActions>
        <button>Action</button>
      </HeroActions>
    </Hero>
  );
}

// Example 2: 左对齐布局
export function Example02_LeftAlign() {
  return (
    <Hero theme="dark" layout="left" height="auto">
      <HeroTitle className="text-white">Left Aligned</HeroTitle>
      <HeroSubtitle className="text-gray-400">
        Content starts from the left
      </HeroSubtitle>
      <HeroActions className="justify-start">
        <button>Get Started</button>
        <button>Learn More</button>
      </HeroActions>
    </Hero>
  );
}

// Example 3: 右对齐布局
export function Example03_RightAlign() {
  return (
    <Hero theme="minimalist" layout="right" height="half">
      <HeroTitle className="text-gray-900">Right Aligned</HeroTitle>
      <HeroSubtitle className="text-gray-600 ml-auto">
        Content aligns to the right
      </HeroSubtitle>
      <HeroActions className="justify-end">
        <button>Action</button>
      </HeroActions>
    </Hero>
  );
}

// Example 4: Split 布局 - 文字 + 图片
export function Example04_Split() {
  return (
    <Hero theme="glassmorphism" layout="split" height="screen">
      <div className="max-w-xl">
        <HeroTitle className="text-white">Split Layout</HeroTitle>
        <HeroSubtitle className="text-white/80">
          Content on the left, image on the right
        </HeroSubtitle>
        <HeroActions>
          <button>Get Started</button>
        </HeroActions>
      </div>
      <HeroImage
        src="/placeholder.jpg"
        alt="Hero image"
        className="max-w-md rounded-2xl"
      />
    </Hero>
  );
}

// Example 5: 带背景图片和遮罩
export function Example05_BackgroundImage() {
  return (
    <Hero
      theme="dark"
      layout="centered"
      height="screen"
      backgroundImage="https://images.unsplash.com/photo-1519681393784-d120267933ba"
      overlay={true}
      overlayOpacity={0.7}
    >
      <HeroTitle className="text-white">Mountains</HeroTitle>
      <HeroSubtitle className="text-gray-200">
        Explore the beauty of nature
      </HeroSubtitle>
      <HeroActions className="justify-center">
        <button className="bg-white text-black px-6 py-3 rounded-lg">
          Start Journey
        </button>
      </HeroActions>
    </Hero>
  );
}

// Example 6: Glassmorphism 完整示例
export function Example06_GlassmorphismFull() {
  return (
    <Hero theme="glassmorphism" layout="centered" height="screen">
      {/* 背景动画球 */}
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

      {/* 玻璃卡片 */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-16 max-w-3xl mx-auto shadow-2xl">
        <HeroTitle className="text-white leading-tight">
          The Future is
          <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Transparent
          </span>
        </HeroTitle>
        <HeroSubtitle className="text-white/80">
          Experience the next generation of design with glassmorphic interfaces
        </HeroSubtitle>
        <HeroActions>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-white/90 transition-all">
            Watch Demo
          </button>
        </HeroActions>
      </div>

      {/* 装饰元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-16 h-16 backdrop-blur-md bg-white/10 rounded-full border border-white/20 hidden lg:block" />
    </Hero>
  );
}

// Example 7: 无子组件，完全自定义
export function Example07_FullyCustom() {
  return (
    <Hero theme="dark" layout="centered" height="screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Feature 1</h3>
          <p className="text-gray-400">Custom layout without using Hero subcomponents</p>
        </div>
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Feature 2</h3>
          <p className="text-gray-400">Total flexibility</p>
        </div>
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Feature 3</h3>
          <p className="text-gray-400">You own the structure</p>
        </div>
      </div>
    </Hero>
  );
}

// Example 8: 只有标题，没有其他内容
export function Example08_TitleOnly() {
  return (
    <Hero theme="minimalist" layout="centered" height="auto">
      <HeroTitle className="text-9xl font-black text-gray-900">
        BOLD
      </HeroTitle>
    </Hero>
  );
}

// Example 9: 多个操作按钮
export function Example09_ManyActions() {
  return (
    <Hero theme="neumorphism" layout="centered" height="screen">
      <HeroTitle>Choose Your Path</HeroTitle>
      <HeroSubtitle>Multiple options available</HeroSubtitle>
      <HeroActions className="justify-center flex-wrap">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Option 1</button>
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg">Option 2</button>
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg">Option 3</button>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg">Option 4</button>
      </HeroActions>
    </Hero>
  );
}

// Example 10: 响应式自适应高度
export function Example10_AutoHeight() {
  return (
    <Hero theme="minimalist" layout="centered" height="auto">
      <HeroTitle className="text-4xl md:text-6xl text-gray-900">
        Auto Height
      </HeroTitle>
      <HeroSubtitle className="text-gray-600">
        This hero adapts to its content height with py-20 padding
      </HeroSubtitle>
      <HeroActions className="justify-center">
        <button className="px-6 py-3 bg-gray-900 text-white rounded">
          Action
        </button>
      </HeroActions>
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <p className="text-gray-700">
          Additional content that extends the hero height automatically
        </p>
      </div>
    </Hero>
  );
}
