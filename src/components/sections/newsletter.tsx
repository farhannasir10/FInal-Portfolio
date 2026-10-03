"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — you're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-3.5 py-8 md:px-0">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-10 text-center dark:bg-neutral-900 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,186,116,0.16),transparent_55%)]" />
        <div className="relative">
          <Coffee className="mx-auto size-6 text-white/80" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-xl text-white md:text-2xl">
            Want updates from me?
          </h2>
          <p className="mx-auto mt-3 max-w-md px-2 text-[12px] text-neutral-300 md:px-8 md:text-sm">
            I occasionally send out an email with updates about my journey or
            when I have an interesting story to share.
          </p>

          {status === "success" ? (
            <p className="mt-6 text-sm text-orange-300">{message}</p>
          ) : (
            <form
              className="mx-auto mt-6 flex max-w-sm items-center border-b border-neutral-600"
              onSubmit={onSubmit}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@example.com"
                disabled={status === "loading"}
                className="h-9 w-full border-none bg-transparent px-0 text-xs text-white outline-none placeholder:text-neutral-500 disabled:opacity-60 md:px-3 md:text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 px-2 text-sm font-medium text-white opacity-70 transition hover:opacity-100 disabled:opacity-40"
              >
                {status === "loading" ? "…" : "Join"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-xs text-red-300">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
