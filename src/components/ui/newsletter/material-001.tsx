"use client";

import { useState } from "react";

export default function MaterialNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [focused, setFocused] = useState(false);

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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-medium text-gray-900">
          Stay Updated
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          Subscribe to our newsletter for the latest updates and insights.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 pb-2 pt-4 text-gray-900 outline-none transition-colors focus:border-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-0 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 ${
                email ? "top-0 text-xs text-blue-600" : ""
              }`}
            >
              Email Address
            </label>
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:shadow-sm"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 rounded bg-green-50 p-4 shadow-sm">
            <p className="text-sm text-green-800">
              Thank you for subscribing!
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded bg-red-50 p-4 shadow-sm">
            <p className="text-sm text-red-800">
              Please enter a valid email address.
            </p>
          </div>
        )}

        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
