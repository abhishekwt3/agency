import { NextResponse } from "next/server"

const GOOGLE_SHEET_WEBAPP_URL = process.env.GOOGLE_SHEET_WEBAPP_URL! // store in .env

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Forward form data to Google Sheets
    const res = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })

    if (!res.ok) throw new Error("Failed to write to Google Sheets")

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    )
  }
}
