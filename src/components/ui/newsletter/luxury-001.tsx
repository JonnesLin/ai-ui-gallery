"use client";

import { useState } from "react";

export default function LuxuryNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-sm border border-amber-400/20 bg-gradient-to-b from-slate-900 to-slate-800 p-[1px]">
          <div className="rounded-sm bg-gradient-to-b from-slate-900 to-slate-800 p-10">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block border-b border-amber-400/50 pb-2">
                <h2 className="font-serif text-3xl tracking-wide text-amber-400">
                  NEWSLETTER
                </h2>
              </div>
              <p className="font-light tracking-wider text-gray-300">
                Exclusive insights for distinguished members
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border-b border-amber-400/30 bg-transparent px-0 py-3 font-light tracking-wide text-gray-200 outline-none transition-colors placeholder:text-gray-600 focus:border-amber-400"
              />

              <button
                type="submit"
                className="w-full border border-amber-400/50 bg-transparent px-8 py-3 font-light tracking-widest text-amber-400 transition-all hover:bg-amber-400/10"
              >
                SUBSCRIBE
              </button>
            </form>

            {status === "success" && (
              <p className="mt-6 border-l-2 border-green-500 pl-4 text-sm tracking-wide text-green-400">
                Welcome to our distinguished circle.
              </p>
            )}
            {status === "error" && (
              <p className="mt-6 border-l-2 border-red-500 pl-4 text-sm tracking-wide text-red-400">
                Please provide a valid email address.
              </p>
            )}

            <div className="mt-8 border-t border-amber-400/20 pt-6">
              <p className="text-center text-xs tracking-widest text-gray-600">
                PRIVACY ASSURED · UNSUBSCRIBE ANYTIME
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
