"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const CorporateBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Enterprise", href: "/solutions/enterprise" },
    { label: "Cloud Services" },
  ];

  const dropdownItems = [
    { label: "Infrastructure", href: "/solutions/enterprise/infrastructure" },
    { label: "Security", href: "/solutions/enterprise/security" },
    { label: "Analytics", href: "/solutions/enterprise/analytics" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-50">
      {/* Professional Clean Style */}
      <nav className="mb-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-5 h-5 mx-3 text-gray-400"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-semibold text-blue-600 px-4 py-2">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded transition-colors"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Executive Style */}
      <nav className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-md shadow-xl p-6">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-4 text-slate-500 text-sm">/</span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-semibold text-white px-5 py-2 bg-blue-600 rounded">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-medium text-slate-300 hover:text-white px-5 py-2 hover:bg-slate-700 rounded transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Business Card Style */}
      <nav className="mb-12 bg-white rounded-sm shadow-md border-l-4 border-blue-600 p-6">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Navigation Path
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-medium px-4 py-2 rounded ${
                  index === breadcrumbs.length - 1
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                } transition-colors`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Professional */}
      <nav className="mb-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-500 uppercase">
            Current Location
          </span>
          <span className="text-xs text-gray-400">Updated: Today</span>
        </div>
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-gray-300">/</span>
              )}
              <a
                href={crumb.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded transition-colors"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-3 text-gray-300">/</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded transition-colors"
            >
              <span>View More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 min-w-[240px] overflow-hidden">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-5 py-3 transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Enterprise Dashboard Style */}
      <nav className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              Breadcrumb Navigation
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-white">Active</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <ol className="flex flex-wrap items-center gap-0">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-5 h-5 mx-3 text-gray-300"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                <a
                  href={crumb.href}
                  className={`text-sm font-medium px-5 py-2 rounded transition-all ${
                    index === breadcrumbs.length - 1
                      ? "text-white bg-blue-600 shadow-md"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {crumb.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-gray-50 px-6 py-3 rounded-b-lg border-t border-gray-200">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Last Updated: 2 minutes ago</span>
            <span>•</span>
            <span>Page Level: {breadcrumbs.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CorporateBreadcrumb;
