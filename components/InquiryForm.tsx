"use client";

import { useState, FormEvent } from "react";

export type InquiryField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
  rows?: number;
};

type InquiryFormProps = {
  formName: string;
  fields: InquiryField[];
  submitLabel: string;
  successMessage: string;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-void/80 px-4 py-3 text-sm text-pearl placeholder:text-chrome/40 outline-none transition-all duration-300 focus:border-white/25 focus:ring-1 focus:ring-white/10";

export function InquiryForm({
  formName,
  fields,
  submitLabel,
  successMessage,
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      body.append(key, value.toString());
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-center text-sm text-pearl">
        {successMessage}
      </p>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden" aria-hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`${formName}-${field.name}`}
            className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-chrome/55"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={`${formName}-${field.name}`}
              name={field.name}
              rows={field.rows ?? 4}
              placeholder={field.placeholder}
              required={field.required}
              className={`${inputClass} resize-y min-h-[100px]`}
            />
          ) : (
            <input
              id={`${formName}-${field.name}`}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className={inputClass}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="
          mt-1 w-full rounded-full bg-gradient-to-b from-pearl/95 to-chrome/90
          px-8 py-3.5 text-sm font-semibold text-void
          transition-all duration-300 hover:from-white hover:to-silver
          disabled:cursor-wait disabled:opacity-70 active:scale-[0.98]
        "
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-red-400/80">
          Something went wrong. Try again or use the email link below.
        </p>
      )}
    </form>
  );
}
