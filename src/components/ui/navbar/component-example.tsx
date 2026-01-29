import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from './index';

/**
 * This file demonstrates how to use the composable Navbar component system.
 * The other files (minimalist-001.tsx, dark-001.tsx, etc.) are design reference
 * examples showing complete themed implementations.
 */

export function MinimalistExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar theme="minimalist" bordered maxWidth="xl">
      <div className="flex items-center justify-between h-16">
        <NavbarBrand>
          <span className="text-lg font-light tracking-widest uppercase">Brand</span>
        </NavbarBrand>

        <NavbarContent hideOnMobile>
          <NavbarItem href="#" isActive>Home</NavbarItem>
          <NavbarItem href="#">Products</NavbarItem>
          <NavbarItem href="#">About</NavbarItem>
          <NavbarItem href="#">Contact</NavbarItem>
        </NavbarContent>

        <NavbarContent hideOnMobile position="right">
          <NavbarItem>Sign In</NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle isOpen={isOpen} onChange={setIsOpen} />
      </div>

      <NavbarMenu isOpen={isOpen}>
        <NavbarItem href="#" isActive>Home</NavbarItem>
        <NavbarItem href="#">Products</NavbarItem>
        <NavbarItem href="#">About</NavbarItem>
        <NavbarItem href="#">Contact</NavbarItem>
        <NavbarItem>Sign In</NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export function DarkExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar theme="dark" bordered maxWidth="xl">
      <div className="flex items-center justify-between h-16">
        <NavbarBrand>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="text-lg font-semibold">DarkUI</span>
        </NavbarBrand>

        <NavbarContent hideOnMobile>
          <NavbarItem href="#" isActive>Home</NavbarItem>
          <NavbarItem href="#">Features</NavbarItem>
          <NavbarItem href="#">Pricing</NavbarItem>
          <NavbarItem href="#">Docs</NavbarItem>
        </NavbarContent>

        <NavbarContent hideOnMobile position="right">
          <NavbarItem>Login</NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle isOpen={isOpen} onChange={setIsOpen} />
      </div>

      <NavbarMenu isOpen={isOpen}>
        <NavbarItem href="#" isActive>Home</NavbarItem>
        <NavbarItem href="#">Features</NavbarItem>
        <NavbarItem href="#">Pricing</NavbarItem>
        <NavbarItem href="#">Docs</NavbarItem>
        <NavbarItem>Login</NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export function GlassmorphismExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <Navbar
        theme="glassmorphism"
        bordered
        blurred
        maxWidth="lg"
        className="backdrop-blur-xl bg-white/30 border-white/40 rounded-2xl shadow-lg"
      >
        <div className="flex items-center justify-between py-4">
          <NavbarBrand>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold">Glasify</span>
          </NavbarBrand>

          <NavbarContent hideOnMobile>
            <NavbarItem href="#" className="px-4 py-2 hover:bg-white/40 rounded-lg">
              Home
            </NavbarItem>
            <NavbarItem href="#" className="px-4 py-2 hover:bg-white/40 rounded-lg">
              Features
            </NavbarItem>
            <NavbarItem href="#" className="px-4 py-2 hover:bg-white/40 rounded-lg">
              About
            </NavbarItem>
          </NavbarContent>

          <NavbarMenuToggle
            isOpen={isOpen}
            onChange={setIsOpen}
            className="bg-white/40 hover:bg-white/60 rounded-xl"
          />
        </div>

        <NavbarMenu isOpen={isOpen} className="border-t border-white/30">
          <NavbarItem href="#" className="px-4 py-3 hover:bg-white/40 rounded-lg">
            Home
          </NavbarItem>
          <NavbarItem href="#" className="px-4 py-3 hover:bg-white/40 rounded-lg">
            Features
          </NavbarItem>
          <NavbarItem href="#" className="px-4 py-3 hover:bg-white/40 rounded-lg">
            About
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default function ComponentExample() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Minimalist Theme</h2>
        <MinimalistExample />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Dark Theme</h2>
        <DarkExample />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Glassmorphism Theme</h2>
        <GlassmorphismExample />
      </section>
    </div>
  );
}
