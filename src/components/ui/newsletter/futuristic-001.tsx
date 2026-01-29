"use client";

import { useState } from "react";

export default function FuturisticNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4">
      <div className="w-full max-w-md">
        <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-900/90 to-blue-900/90 p-8 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

          <div className="relative">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              <h2 className="mb-3 text-3xl font-bold text-white">
                Future Updates
              </h2>
              <p className="text-blue-200/80">
                Subscribe to receive next-generation insights
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur transition-all group-focus-within:opacity-40"></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@future.io"
                  className="relative w-full rounded-xl border border-blue-500/30 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-blue-300/50 focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl border border-blue-500/50 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10">Initiate Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
            </form>

            {status === "success" && (
              <div className="mt-4 rounded-xl border border-green-500/30 bg-green-950/30 p-3">
                <p className="text-sm text-green-300">
                  ✓ Connection established successfully
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/30 p-3">
                <p className="text-sm text-red-300">
                  ✗ Invalid credentials detected
                </p>
              </div>
            )}

            <div className="mt-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              <p className="text-xs text-blue-400/60">
                Secure · Private · Unsubscribe Anytime
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
