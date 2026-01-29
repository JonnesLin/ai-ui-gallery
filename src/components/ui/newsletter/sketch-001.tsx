"use client";

import { useState } from "react";

export default function SketchNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-[#fef9f3] p-4">
      <div
        className="w-full max-w-md rounded-lg border-2 border-gray-800 bg-white p-8"
        style={{
          boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
          transform: "rotate(-0.5deg)"
        }}
      >
        <div className="mb-6" style={{ transform: "rotate(0.5deg)" }}>
          <div className="mb-4 inline-block border-b-4 border-gray-800 pb-1">
            <h2 className="font-handwriting text-4xl text-gray-900">
              Newsletter
            </h2>
          </div>
          <div className="relative">
            <div className="absolute -left-2 top-0 h-full w-1 bg-gray-300"></div>
            <p className="pl-4 text-gray-700">
              Get hand-picked updates delivered to your inbox
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div style={{ transform: "rotate(-0.3deg)" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border-b-2 border-dashed border-gray-400 bg-transparent px-2 py-3 text-gray-900 outline-none transition-colors focus:border-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-gray-800 bg-yellow-300 px-6 py-3 font-bold text-gray-900 transition-all hover:bg-yellow-400 active:translate-x-1 active:translate-y-1"
            style={{
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              transform: "rotate(0.5deg)"
            }}
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div
            className="mt-4 border-2 border-green-600 bg-green-100 p-3"
            style={{
              boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
              transform: "rotate(-0.5deg)"
            }}
          >
            <p className="text-sm text-green-800">
              ✓ You're on the list!
            </p>
          </div>
        )}
        {status === "error" && (
          <div
            className="mt-4 border-2 border-red-600 bg-red-100 p-3"
            style={{
              boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
              transform: "rotate(0.5deg)"
            }}
          >
            <p className="text-sm text-red-800">
              ✗ Please check your email
            </p>
          </div>
        )}

        <div className="mt-6 border-t-2 border-dashed border-gray-300 pt-4">
          <p className="text-xs text-gray-600">
            Privacy guaranteed · Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
}
