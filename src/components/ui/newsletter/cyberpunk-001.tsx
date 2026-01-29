"use client";

import { useState } from "react";

export default function CyberpunkNewsletter() {
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
      <div className="w-full max-w-md border-2 border-cyan-500 bg-black p-8 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        <div className="mb-6">
          <h2 className="mb-2 font-mono text-3xl font-bold uppercase text-cyan-400" style={{ textShadow: "0 0 10px rgba(6,182,212,0.8)" }}>
            {'>'} UPLINK_PROTOCOL
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        <p className="mb-6 font-mono text-sm text-cyan-300">
          {'// '} Subscribe for encrypted transmissions and system updates
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border border-cyan-500/30 bg-cyan-950/20 p-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@neural.net"
              className="w-full bg-transparent px-3 py-2 font-mono text-cyan-400 outline-none placeholder:text-cyan-700"
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-cyan-500 bg-cyan-500/20 px-6 py-3 font-mono font-bold uppercase text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black"
            style={{ boxShadow: "0 0 10px rgba(6,182,212,0.3)" }}
          >
            {'>'} CONNECT
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 border border-green-500 bg-green-950/50 p-3">
            <p className="font-mono text-xs text-green-400">
              {'>'} CONNECTION ESTABLISHED
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 border border-red-500 bg-red-950/50 p-3">
            <p className="font-mono text-xs text-red-400">
              {'>'} ERROR: INVALID CREDENTIALS
            </p>
          </div>
        )}

        <p className="mt-6 font-mono text-[10px] text-cyan-700">
          {'// '} ENCRYPTED_CHANNEL | DISCONNECT_ANYTIME
        </p>
      </div>
    </div>
  );
}
