"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format, isSunday } from "date-fns"
import { useToast } from "@/components/ui/use-toast"
import { fbq } from "@/lib/fpixel"


const HOLIDAYS = [
  new Date(2025, 0, 1), // New Year
  new Date(2025, 11, 25), // Christmas
]

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
]

interface BookingModalProps {
  children: React.ReactNode
}

export function BookingModal({ children }: BookingModalProps) {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const isDateDisabled = (date: Date) =>
    isSunday(date) || HOLIDAYS.some((holiday) => holiday.toDateString() === date.toDateString())

  const handleDateSelect = (date: Date | undefined) => {
    if (date && !isDateDisabled(date)) setSelectedDate(date)
    else if (!date) setSelectedDate(undefined)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.mobile) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: format(selectedDate, "yyyy-MM-dd"),
          time: selectedTime,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          createdAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        fbq("track", "Lead")
        setOpen(false)
        setTimeout(() => {
        toast({
          title: "Booking Confirmed 🎉",
          description: "Your strategy call has been successfully booked.",
        })
      }, 200)
        
        setSelectedDate(undefined)
        setSelectedTime("")
        setFormData({ name: "", email: "", mobile: "", message: "" })
      } else {
        const err = await response.json()
        toast({
          title: "Booking Failed",
          description: err.error || "Unable to save your booking. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Booking error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          fbq("track", "Contact") 
          setOpen(true)
        }}
        variant="ghost"
        className="p-0 h-auto font-inherit text-inherit hover:bg-transparent"
        asChild
      >
        <div>{children}</div>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:max-w-2xl rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold">Book Your Strategy Call</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Date Picker */}
            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Select Date
              </Label>
              <div className="flex justify-center overflow-x-auto">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled}
                  className="rounded-md border text-sm"
                />
              </div>
              {selectedDate && (
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </p>
              )}
            </div>

            {/* Time Picker */}
            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" /> Select Time
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="mt-1 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="mt-1 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  required
                  className="mt-1 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business..."
                  className="mt-1 resize-none text-sm"
                  rows={3}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-black text-white hover:bg-gray-800 text-sm sm:text-base"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1 text-sm sm:text-base"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
