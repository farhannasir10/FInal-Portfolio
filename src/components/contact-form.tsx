"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setFeedback("Message sent — I'll get back to you soon.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Try again.");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-neutral-200 bg-transparent px-3.5 py-2.5 text-sm text-neutral-700 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-700 dark:text-neutral-200 dark:focus:border-neutral-500";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm text-neutral-600 dark:text-neutral-300">
          Name<span className="text-red-500">*</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className={fieldClass}
            disabled={status === "loading"}
          />
        </label>
        <label className="block text-sm text-neutral-600 dark:text-neutral-300">
          Contact Number
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+92 (300) xxx-xxxx"
            className={fieldClass}
            disabled={status === "loading"}
          />
        </label>
      </div>

      <label className="block text-sm text-neutral-600 dark:text-neutral-300">
        Email<span className="text-red-500">*</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={fieldClass}
          disabled={status === "loading"}
        />
      </label>

      <label className="block text-sm text-neutral-600 dark:text-neutral-300">
        Message<span className="text-red-500">*</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write the message or say Hi.."
          className={`${fieldClass} resize-y`}
          disabled={status === "loading"}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-50 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
        <Sparkles className="size-4" />
      </button>

      {feedback && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-500" : "text-orange-400"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
