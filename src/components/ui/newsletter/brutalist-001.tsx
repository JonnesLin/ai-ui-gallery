"use client";

import { useState } from "react";

export default function BrutalistNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-yellow-400 p-4">
      <div className="w-full max-w-md border-8 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="mb-4 border-4 border-black bg-black p-2 text-3xl font-black uppercase text-white">
          Newsletter
        </h2>
        <p className="mb-6 text-lg font-bold uppercase text-black">
          Get updates. No BS.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR@EMAIL.COM"
            className="w-full border-4 border-black bg-white px-4 py-3 font-mono text-black placeholder-gray-500 outline-none"
          />

          <button
            type="submit"
            className="w-full border-4 border-black bg-yellow-400 px-6 py-3 font-black uppercase text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-2 active:translate-y-2"
            style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 border-4 border-green-600 bg-green-400 p-2">
            <p className="font-bold uppercase text-black">Done!</p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 border-4 border-red-600 bg-red-400 p-2">
            <p className="font-bold uppercase text-black">Error!</p>
          </div>
        )}

        <p className="mt-6 border-t-4 border-black pt-4 text-xs font-bold uppercase text-black">
          Privacy: Respected
        </p>
      </div>
    </div>
  );
}
