"use client";

import { useState } from "react";
import { Newsletter } from "./Newsletter";

export default function NeumorphismNewsletter() {
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
    <div className="flex min-h-screen items-center justify-center bg-[#e0e5ec] p-4">
      <Newsletter
        layout="stacked"
        title="Newsletter"
        description="Subscribe for weekly insights and updates."
        placeholder="Enter email address"
        buttonText="Subscribe"
        onSubmit={handleSubmit}
        loading={loading}
        success={status === "success"}
        error={status === "error" ? "Please provide a valid email." : undefined}
        privacyText="Privacy guaranteed. Unsubscribe anytime."
        containerClassName="rounded-3xl bg-[#e0e5ec] p-8 shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]"
        titleClassName="text-3xl text-gray-800"
        descriptionClassName="text-gray-600"
        inputClassName="rounded-xl bg-[#e0e5ec] text-gray-800 shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff]"
        buttonClassName="rounded-xl bg-[#e0e5ec] text-gray-800 shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff] active:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]"
        successClassName="text-green-600"
        errorClassName="text-red-600"
        privacyClassName="text-gray-500 text-center"
      />
    </div>
  );
}
