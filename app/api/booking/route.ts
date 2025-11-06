import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongoose"
import Booking from "@/models/Booking"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { date, time, name, email, mobile, message } = body

    if (!date || !time || !name || !email || !mobile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await connectToDatabase()

    const booking = await Booking.create({
      date,
      time,
      name,
      email,
      mobile,
      message,
    })

    return NextResponse.json({ message: "Booking confirmed", booking }, { status: 201 })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
