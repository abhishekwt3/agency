import mongoose, { Schema, models } from "mongoose"

const BookingSchema = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
})

export default models.Booking || mongoose.model("Booking", BookingSchema)
