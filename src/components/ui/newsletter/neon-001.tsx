"use client";

import { useState } from "react";

export default function NeonNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md rounded-2xl border-2 border-pink-500 bg-gray-900 p-8" style={{ boxShadow: "0 0 40px rgba(236,72,153,0.6)" }}>
        <h2
          className="mb-4 text-center text-4xl font-black uppercase text-pink-500"
          style={{
            textShadow: "0 0 10px rgba(236,72,153,1), 0 0 20px rgba(236,72,153,0.8), 0 0 30px rgba(236,72,153,0.6)"
          }}
        >
          Newsletter
        </h2>

        <div className="mb-6 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent" style={{ boxShadow: "0 0 10px rgba(236,72,153,0.8)" }}></div>

        <p
          className="mb-6 text-center text-cyan-400"
          style={{ textShadow: "0 0 10px rgba(34,211,238,0.8)" }}
        >
          Get electrifying updates straight to your inbox
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-lg border-2 border-cyan-500 bg-gray-950 px-4 py-3 text-cyan-400 outline-none transition-all placeholder:text-cyan-700 focus:border-cyan-400"
            style={{ boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
          />

          <button
            type="submit"
            className="w-full rounded-lg border-2 border-pink-500 bg-pink-500 px-6 py-3 font-black uppercase text-white transition-all hover:bg-transparent hover:text-pink-500"
            style={{
              boxShadow: "0 0 30px rgba(236,72,153,0.6)",
              textShadow: "0 0 10px rgba(255,255,255,0.8)"
            }}
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div
            className="mt-4 rounded-lg border-2 border-green-500 bg-green-950/50 p-3"
            style={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
          >
            <p
              className="text-center text-sm font-bold text-green-400"
              style={{ textShadow: "0 0 10px rgba(34,197,94,0.8)" }}
            >
              SUBSCRIBED!
            </p>
          </div>
        )}
        {status === "error" && (
          <div
            className="mt-4 rounded-lg border-2 border-red-500 bg-red-950/50 p-3"
            style={{ boxShadow: "0 0 20px rgba(239,68,68,0.4)" }}
          >
            <p
              className="text-center text-sm font-bold text-red-400"
              style={{ textShadow: "0 0 10px rgba(239,68,68,0.8)" }}
            >
              INVALID EMAIL!
            </p>
          </div>
        )}

        <p
          className="mt-6 text-center text-xs text-purple-400"
          style={{ textShadow: "0 0 10px rgba(168,85,247,0.6)" }}
        >
          No spam · Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}
