import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongoose"
import Contact from "@/models/Contact"

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message, mobile } = await req.json()

    if (!name || !email || !mobile || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await connectToDatabase()

    const contact = await Contact.create({
      name,
      email,
      company,
      service,
      mobile,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, contact }, { status: 201 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
