"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);

    if (!response) {
      setStatus("error");
      setError("Network error. Please try again.");
      return;
    }

    const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!response.ok || !data?.ok) {
      setStatus("error");
      setError(data?.error || "Could not send message. Please try again.");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 shadow text-left max-w-2xl mx-auto">
      <div className="grid gap-4">
        <div className="hidden">
          <label>
            Company
            <input name="company" autoComplete="off" tabIndex={-1} />
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            name="name"
            required
            maxLength={100}
            className="w-full p-3 rounded border border-black/20"
            placeholder="Your name"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            className="w-full p-3 rounded border border-black/20"
            placeholder="you@example.com"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            maxLength={5000}
            rows={6}
            className="w-full p-3 rounded border border-black/20"
            placeholder="Write your message…"
            disabled={status === "sending"}
          />
        </div>

        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" ? (
          <p className="text-sm text-green-700">Message sent. Thank you!</p>
        ) : null}

        {status === "error" ? <p className="text-sm text-red-700">{error}</p> : null}
      </div>
    </form>
  );
}

