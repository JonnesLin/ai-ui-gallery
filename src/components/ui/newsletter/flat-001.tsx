"use client";

import { useState } from "react";

export default function FlatNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-[#3498db] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#3498db]">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-[#2c3e50]">
            Subscribe to Newsletter
          </h2>
          <p className="text-[#7f8c8d]">
            Get the latest updates and news
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-md border-2 border-[#ecf0f1] bg-[#ecf0f1] px-4 py-3 text-[#2c3e50] outline-none transition-colors focus:border-[#3498db]"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-[#3498db] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2980b9]"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 rounded-md bg-[#2ecc71] p-3">
            <p className="text-center text-sm font-semibold text-white">
              Successfully subscribed!
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded-md bg-[#e74c3c] p-3">
            <p className="text-center text-sm font-semibold text-white">
              Please enter a valid email
            </p>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-[#95a5a6]">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
