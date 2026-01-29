"use client";

import { useState } from "react";

export default function NatureNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-emerald-100 to-teal-50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-green-900">
            Nature's Newsletter
          </h2>
          <p className="text-green-700">
            Get eco-friendly tips and sustainable living insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-2xl border-2 border-green-300 bg-white px-4 py-3 text-green-900 outline-none transition-all focus:border-green-500 focus:shadow-lg focus:shadow-green-200/50"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:from-green-700 hover:to-emerald-700 hover:shadow-xl"
          >
            Join Our Community
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 rounded-xl bg-green-200 p-3">
            <p className="text-center text-sm text-green-800">
              Welcome to our green community!
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded-xl bg-red-200 p-3">
            <p className="text-center text-sm text-red-800">
              Please enter a valid email address.
            </p>
          </div>
        )}

        <div className="mt-6 rounded-xl bg-green-100/50 p-4">
          <p className="text-center text-xs text-green-700">
            We care about your privacy as much as we care about the planet.
            <br />
            Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
