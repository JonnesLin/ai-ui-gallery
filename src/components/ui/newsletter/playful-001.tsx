"use client";

import { useState } from "react";

export default function PlayfulNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 p-4">
      <div className="w-full max-w-md">
        <div className="relative rounded-3xl bg-white p-8 shadow-2xl" style={{ transform: "rotate(-1deg)" }}>
          <div className="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-yellow-400" style={{ transform: "rotate(15deg)" }}></div>
          <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-pink-400" style={{ transform: "rotate(-20deg)" }}></div>

          <div className="relative">
            <h2 className="mb-3 text-4xl font-black text-gray-900" style={{ transform: "rotate(1deg)" }}>
              Hey You!
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Join our super fun newsletter for awesome stuff!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border-4 border-purple-400 bg-purple-50 px-6 py-3 text-gray-900 outline-none transition-all focus:border-purple-500 focus:bg-white"
                style={{ transform: "rotate(-0.5deg)" }}
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ transform: "rotate(0.5deg)" }}
              >
                Let's Go!
              </button>
            </form>

            {status === "success" && (
              <div className="mt-4 rounded-2xl bg-green-200 p-4" style={{ transform: "rotate(-1deg)" }}>
                <p className="text-center font-bold text-green-800">
                  Woohoo! You're in!
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-2xl bg-red-200 p-4" style={{ transform: "rotate(1deg)" }}>
                <p className="text-center font-bold text-red-800">
                  Oopsie! Try again!
                </p>
              </div>
            )}

            <p className="mt-6 text-center text-xs text-gray-600">
              No boring emails, we promise! Unsubscribe whenever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
