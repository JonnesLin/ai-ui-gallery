"use client";

import { useState } from "react";

export default function RetroNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-200 to-yellow-100 p-4">
      <div className="w-full max-w-md rounded-lg border-4 border-orange-800 bg-gradient-to-b from-orange-50 to-yellow-50 p-8 shadow-lg">
        <div className="mb-6 rounded-md bg-orange-600 p-4 text-center">
          <h2 className="text-3xl font-black uppercase text-white" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}>
            Newsletter
          </h2>
        </div>

        <p className="mb-6 text-center text-lg font-semibold text-orange-900">
          Stay groovy with our updates!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-md border-2 border-orange-400 bg-white px-4 py-3 font-mono text-orange-900 outline-none focus:border-orange-600"
          />

          <button
            type="submit"
            className="w-full rounded-md border-2 border-orange-800 bg-orange-500 px-6 py-3 font-bold uppercase text-white shadow-md transition-all hover:bg-orange-600 active:translate-y-1 active:shadow-none"
          >
            Sign Me Up!
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 rounded-md bg-green-200 p-2 text-center text-sm font-bold text-green-800">
            Far out! You're subscribed!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 rounded-md bg-red-200 p-2 text-center text-sm font-bold text-red-800">
            Bummer! Invalid email.
          </p>
        )}

        <p className="mt-6 text-center text-xs text-orange-700">
          No spam, just good vibes. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
