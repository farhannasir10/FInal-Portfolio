import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    const to = process.env.RESEND_TO_EMAIL ?? site.email;

    await resend.emails.send({
      from,
      to: [to],
      subject: `New portfolio subscriber: ${email}`,
      replyTo: email,
      text: `${email} subscribed via the portfolio newsletter form.`,
      html: `<p><strong>${email}</strong> subscribed via the portfolio newsletter form.</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("newsletter subscribe failed", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
