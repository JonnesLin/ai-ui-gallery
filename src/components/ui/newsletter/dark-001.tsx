"use client";

import { useState } from "react";
import { Newsletter } from "./Newsletter";

export default function DarkNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <Newsletter
        layout="stacked"
        title="Stay in the Loop"
        description="Get the latest news and exclusive content delivered to you."
        placeholder="you@example.com"
        buttonText="Subscribe"
        onSubmit={handleSubmit}
        loading={loading}
        success={status === "success"}
        error={status === "error" ? "Invalid email address." : undefined}
        privacyText="We'll never share your email. Unsubscribe anytime."
        containerClassName="rounded-2xl border border-gray-800 bg-gray-900 p-8"
        titleClassName="text-3xl text-white"
        descriptionClassName="text-gray-400"
        inputClassName="rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
        buttonClassName="rounded-lg bg-white text-black hover:bg-gray-200"
        successClassName="text-green-400"
        errorClassName="text-red-400"
        privacyClassName="text-gray-500"
      />
    </div>
  );
}
