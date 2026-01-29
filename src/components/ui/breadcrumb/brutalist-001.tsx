"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

const BrutalistBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "HOME", href: "/" },
    { label: "PRODUCTS", href: "/products" },
    { label: "ELECTRONICS", href: "/products/electronics" },
    { label: "LAPTOPS" },
  ];

  const dropdownItems = [
    { label: "DESKTOPS", href: "/products/electronics/desktops" },
    { label: "TABLETS", href: "/products/electronics/tablets" },
    { label: "PHONES", href: "/products/electronics/phones" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Main Breadcrumb - Bold Borders */}
      <nav className="mb-12 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-4 text-4xl font-black text-black">
                  /
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-xl font-black uppercase bg-black text-white px-6 py-3 border-4 border-black">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-xl font-black uppercase bg-white text-black px-6 py-3 border-4 border-black hover:bg-black hover:text-white transition-colors duration-100"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* With Icons - Geometric */}
      <nav className="mb-12 bg-yellow-400 border-8 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <ol className="flex flex-wrap items-center gap-0">
          {[
            { label: "HOME", icon: "▮" },
            { label: "DOCS", icon: "■" },
            { label: "GUIDES", icon: "▲" },
            { label: "SETUP" },
          ].map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-4 text-3xl font-black text-black">
                  →
                </span>
              )}
              <div className="flex items-center gap-3 bg-white border-4 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors duration-100 cursor-pointer">
                {crumb.icon && (
                  <span className="text-2xl font-black">{crumb.icon}</span>
                )}
                <span className="text-xl font-black uppercase">
                  {crumb.label}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Raw Functionality */}
      <nav className="mb-12 bg-red-500 border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-4 text-3xl font-black text-white">
                  //
                </span>
              )}
              <a
                href={crumb.href}
                className="text-xl font-black uppercase bg-white text-black px-6 py-3 border-4 border-black hover:bg-black hover:text-white transition-colors duration-100"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-4 text-3xl font-black text-white">//</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-3 text-xl font-black uppercase bg-white text-black px-6 py-3 border-4 border-black hover:bg-black hover:text-white transition-colors duration-100"
            >
              <span>MORE</span>
              <span className="text-2xl">▼</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-4 bg-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 min-w-[250px]">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block text-lg font-black uppercase px-6 py-4 border-b-4 border-black last:border-b-0 hover:bg-black hover:text-white transition-colors duration-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Compact Brutalist */}
      <nav className="mb-12 bg-blue-600 border-6 border-black p-4">
        <ol className="flex flex-wrap items-center">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-2xl font-black text-white">
                  »
                </span>
              )}
              <a
                href={crumb.href}
                className="text-base font-black uppercase bg-white text-black px-4 py-2 border-3 border-black hover:translate-x-1 hover:translate-y-1 transition-transform duration-100"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Stacked Brutalist */}
      <nav className="bg-green-500 border-8 border-black p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-black uppercase bg-black text-white px-4 py-2 border-2 border-black">
              PATH
            </span>
            <div className="flex-1 h-4 bg-black"></div>
          </div>
          <ol className="flex flex-wrap items-center gap-0">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <div className="mx-2 w-8 h-0.5 bg-black"></div>
                )}
                <span
                  className={`text-lg font-black uppercase px-5 py-3 border-4 ${
                    index === breadcrumbs.length - 1
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-black hover:text-white cursor-pointer"
                  } transition-colors duration-100`}
                >
                  {crumb.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default BrutalistBreadcrumb;
