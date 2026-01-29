"use client";

import { useState } from "react";

export default function PastelNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
        <div className="mb-6 text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-pink-200 to-purple-200 p-3">
            <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600">
            Sweet updates delivered with love
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-2xl border-2 border-purple-200 bg-purple-50/50 px-4 py-3 text-gray-800 outline-none transition-all focus:border-purple-300 focus:bg-white"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 rounded-xl bg-green-100 p-3 text-center text-sm text-green-700">
            Yay! You're on the list!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 rounded-xl bg-red-100 p-3 text-center text-sm text-red-700">
            Oops! Please check your email.
          </p>
        )}

        <p className="mt-6 text-center text-xs text-gray-500">
          We promise to keep your inbox happy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
