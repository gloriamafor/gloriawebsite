import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

const RATE_LIMIT_WINDOW_MS = 15_000;
const rateLimitByIp = new Map<string, number>();

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (!xff) return "unknown";
  return xff.split(",")[0]?.trim() || "unknown";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const now = Date.now();
    const last = rateLimitByIp.get(ip);
    if (last && now - last < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in a moment." },
        { status: 429 }
      );
    }
    rateLimitByIp.set(ip, now);

    const body = (await request.json().catch(() => null)) as
      | {
          name?: unknown;
          email?: unknown;
          message?: unknown;
          company?: unknown; // honeypot
        }
      | null;

    if (!body) {
      return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
    }

    const company = typeof body.company === "string" ? body.company.trim() : "";
    if (company) {
      return NextResponse.json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ ok: false, error: "Name is too long." }, { status: 400 });
    }
    if (email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
    }

    const to = getEnv("CONTACT_TO_EMAIL");
    const host = getEnv("SMTP_HOST");
    const port = Number(getEnv("SMTP_PORT") || "587");
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASS");
    const from = getEnv("SMTP_FROM") || user;

    if (!to || !host || !user || !pass || !from) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured. Set CONTACT_TO_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and optionally SMTP_FROM).",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Portfolio contact: ${name} <${email}>`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}\n`;

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

