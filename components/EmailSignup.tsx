"use client";

import { useState, FormEvent } from "react";
import { emailSignup } from "@/config/site";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Placeholder — connect to Mailchimp, ConvertKit, Klaviyo, etc.
    console.log("[Email signup placeholder]", email);
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-smoke/50 p-6 md:p-8">
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative text-center">
        <h3 className="font-display text-xl tracking-wide text-pearl md:text-2xl">
          {emailSignup.heading}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-chrome/65">
          {emailSignup.subheading}
        </p>

        {status === "success" ? (
          <p className="mt-6 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-pearl">
            {emailSignup.successMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder={emailSignup.placeholder}
                required
                className="
                  min-w-0 flex-1 rounded-full border border-white/10
                  bg-void/80 px-5 py-3.5 text-sm text-pearl
                  placeholder:text-chrome/40
                  outline-none transition-all duration-300
                  focus:border-white/25 focus:ring-1 focus:ring-white/10
                "
                aria-label="Email address"
              />
              <button
                type="submit"
                className="
                  shrink-0 rounded-full bg-gradient-to-b from-pearl/95 to-chrome/90
                  px-8 py-3.5 text-sm font-semibold text-void
                  transition-all duration-300
                  hover:from-white hover:to-silver
                  active:scale-[0.98]
                "
              >
                Join
              </button>
            </div>
            {status === "error" && (
              <p className="mt-2 text-xs text-red-400/80">Please enter a valid email.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
