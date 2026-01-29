"use client";

import { useState } from "react";
import { Newsletter } from "./Newsletter";

export default function MinimalistNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <Newsletter
        layout="stacked"
        title="Stay Updated"
        description="Subscribe to our newsletter for the latest updates."
        placeholder="Enter your email"
        buttonText="Subscribe"
        onSubmit={handleSubmit}
        loading={loading}
        success={status === "success"}
        error={status === "error" ? "Please enter a valid email address." : undefined}
        privacyText="We respect your privacy. Unsubscribe at any time."
        titleClassName="text-black font-light"
        descriptionClassName="text-gray-600"
        inputClassName="border-b border-gray-300 bg-transparent px-0 py-2 text-black focus:border-black"
        buttonClassName="w-full border border-black bg-black text-white hover:bg-white hover:text-black"
        privacyClassName="text-gray-500"
      />
    </div>
  );
}
