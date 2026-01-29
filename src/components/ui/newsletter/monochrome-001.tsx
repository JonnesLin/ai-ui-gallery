"use client";

import { useState } from "react";

export default function MonochromeNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md border border-white bg-black p-8">
        <h2 className="mb-4 text-3xl font-bold text-white">
          NEWSLETTER
        </h2>

        <div className="mb-6 h-px bg-white"></div>

        <p className="mb-6 font-mono text-sm text-white">
          Subscribe for exclusive updates and insights.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border border-white p-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS"
              className="w-full bg-black px-3 py-2 font-mono text-white outline-none placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-white bg-white px-6 py-3 font-mono font-bold text-black transition-all hover:bg-black hover:text-white"
          >
            SUBSCRIBE
          </button>
        </form>

        {status === "success" && (
          <div className="mt-6 border border-white bg-white p-3">
            <p className="font-mono text-sm text-black">
              SUCCESS: SUBSCRIPTION CONFIRMED
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 border border-white p-3">
            <p className="font-mono text-sm text-white">
              ERROR: INVALID EMAIL FORMAT
            </p>
          </div>
        )}

        <div className="mt-8 border-t border-white pt-4">
          <p className="font-mono text-xs text-gray-500">
            PRIVACY_PROTECTED / UNSUBSCRIBE_ANYTIME
          </p>
        </div>
      </div>
    </div>
  );
}
