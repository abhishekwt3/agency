// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

// ────── ZOHO BUSINESS EMAIL SETTINGS ──────
const MY_EMAIL = "abhishek@reach.ist";   // ← Change to your Zoho address

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",   // Paid Zoho plans
  port: 587,                  // TLS (recommended)
  secure: false,              // true only for port 465
  auth: {
    user: MY_EMAIL,
    pass: "gijwmTACV5L0",   // ← put in .env.local
  },
  // Optional: force EU data-center
  // tls: { ciphers: "SSLv3" },
});
// ─────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, mobile, service, message } = body;

    if (!name || !email || !mobile || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const html = `
      <h2>New Lead 🚀</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
        <li><strong>Company:</strong> ${company || "—"}</li>
        <li><strong>Mobile:</strong> <a href="tel:${mobile}">${mobile}</a></li>
        <li><strong>Service:</strong> ${service}</li>
      </ul>
      <hr>
      <p><strong>Message:</strong></p>
      <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
      <small>Sent: ${new Date().toLocaleString()}</small>
    `;

    await transporter.sendMail({
      from: `"Website Lead" <${MY_EMAIL}>`,
      to: MY_EMAIL,
      replyTo: email,
      subject: `New ${service} Lead – ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Zoho error:", err);
    return NextResponse.json(
      { error: err.message || "Email failed" },
      { status: 500 }
    );
  }
}