"use client";

import { useState } from "react";
import { Newsletter } from "./Newsletter";

export default function GradientNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 p-4">
      <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 p-[2px]">
        <div className="rounded-3xl bg-white p-8">
          <Newsletter
            layout="inline"
            title="Join Our Newsletter"
            description="Receive curated content and exclusive insights."
            placeholder="Enter your email"
            buttonText="Subscribe"
            onSubmit={handleSubmit}
            loading={loading}
            success={status === "success"}
            error={status === "error" ? "Please enter a valid email." : undefined}
            privacyText="No spam, ever. You can unsubscribe anytime."
            titleClassName="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-clip-text text-3xl text-transparent"
            descriptionClassName="text-gray-700"
            inputClassName="rounded-lg border-2 border-gray-200 text-gray-800 focus:border-purple-500"
            buttonClassName="rounded-lg bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white hover:shadow-lg"
            successClassName="text-green-600"
            errorClassName="text-red-600"
            privacyClassName="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
