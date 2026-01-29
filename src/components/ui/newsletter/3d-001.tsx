"use client";

import { useState } from "react";

export default function ThreeDNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4" style={{ perspective: "1000px" }}>
      <div
        className="w-full max-w-md rounded-2xl bg-gradient-to-br from-white to-gray-100 p-8 shadow-2xl"
        style={{
          transform: "rotateX(5deg) rotateY(-5deg)",
          boxShadow: "20px 20px 60px rgba(0,0,0,0.3), -20px -20px 60px rgba(255,255,255,0.1)"
        }}
      >
        <div
          className="mb-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 shadow-lg"
          style={{
            transform: "translateZ(20px)",
            boxShadow: "0 10px 30px rgba(99,102,241,0.4)"
          }}
        >
          <h2 className="text-center text-3xl font-bold text-white">
            Newsletter
          </h2>
        </div>

        <p className="mb-6 text-center text-gray-700">
          Subscribe to get the latest updates in 3D!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className="rounded-lg shadow-md"
            style={{
              transform: "translateZ(10px)",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-800 outline-none transition-all focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-bold text-white transition-all hover:from-indigo-700 hover:to-purple-700 active:translate-y-1"
            style={{
              transform: "translateZ(15px)",
              boxShadow: "0 8px 20px rgba(99,102,241,0.4)"
            }}
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div
            className="mt-4 rounded-lg bg-green-100 p-3 shadow-md"
            style={{
              transform: "translateZ(10px)",
              boxShadow: "0 5px 15px rgba(34,197,94,0.3)"
            }}
          >
            <p className="text-center text-sm font-semibold text-green-700">
              Successfully subscribed!
            </p>
          </div>
        )}
        {status === "error" && (
          <div
            className="mt-4 rounded-lg bg-red-100 p-3 shadow-md"
            style={{
              transform: "translateZ(10px)",
              boxShadow: "0 5px 15px rgba(239,68,68,0.3)"
            }}
          >
            <p className="text-center text-sm font-semibold text-red-700">
              Invalid email address!
            </p>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-gray-500">
          Your privacy matters. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
