"use client";

import { useState } from "react";
import { Newsletter } from "./Newsletter";

export default function GlasmorphismNewsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (email: string) => {
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setStatus("success");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <Newsletter
        layout="stacked"
        title="Join Our Community"
        description="Get exclusive updates delivered to your inbox."
        placeholder="your@email.com"
        buttonText="Subscribe Now"
        onSubmit={handleSubmit}
        loading={loading}
        success={status === "success"}
        error={status === "error" ? "Invalid email. Please try again." : undefined}
        privacyText="No spam. Unsubscribe anytime."
        containerClassName="rounded-3xl bg-white/20 p-8 shadow-2xl backdrop-blur-lg"
        titleClassName="text-3xl text-white"
        descriptionClassName="text-white/90"
        inputClassName="rounded-xl bg-white/30 text-white placeholder-white/70 backdrop-blur-sm focus:bg-white/40"
        buttonClassName="rounded-xl bg-white/30 text-white backdrop-blur-sm hover:bg-white/40"
        successClassName="text-white"
        errorClassName="text-red-200"
        privacyClassName="text-white/70"
      />
    </div>
  );
}
