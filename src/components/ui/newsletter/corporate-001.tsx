"use client";

import { useState } from "react";

export default function CorporateNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          Stay informed about our latest products, services, and industry insights.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full rounded border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 rounded bg-green-50 p-3">
            <p className="text-sm text-green-800">
              Thank you for subscribing to our newsletter.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded bg-red-50 p-3">
            <p className="text-sm text-red-800">
              Please enter a valid email address.
            </p>
          </div>
        )}

        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500">
            By subscribing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            . You may unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
