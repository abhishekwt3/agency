import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const booking = await request.json();
    // Validate the incoming booking data
    if (!booking.name || !booking.email || !booking.date || !booking.time) {
      return Response.json({ error: "Missing required booking fields" }, { status: 400 });
    }
    // Send the email notification using Resend
    const { data, error } = await resend.emails.send({
      from: 'Booking Alert <abhishekwt3@gmail.com>', // IMPORTANT: Change to your verified domain
      to: ['abhishek93t@gmail.com'], // IMPORTANT: Change to your destination email
      subject: `New Strategy Call Booking from ${booking.name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Booking Confirmation</h2>
          <p>You have a new strategy call booking. Here are the details:</p>
          <ul>
            <li><strong>Name:</strong> ${booking.name}</li>
            <li><strong>Email:</strong> ${booking.email}</li>
            <li><strong>Date:</strong> ${booking.date}</li>
            <li><strong>Time:</strong> ${booking.time}</li>
            <li>
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 10px; border-radius: 5px;">${booking.message || 'No message provided.'}</p>
            </li>
          </ul>
          <p>This booking was submitted on ${new Date(booking.createdAt).toLocaleString()}.</p>
        </div>
      `,
    });
    
    // Handle potential errors from the email service
    if (error) {
        console.error("Email sending error:", error);
        return Response.json({ error: "Failed to send email notification" }, { status: 500 });
    }
    // Return a success response to the client
    return Response.json({ success: true, message: "Booking email sent successfully." });
  } catch (error) {
    // Catch any other errors, like invalid JSON in the request
    console.error("Booking process error:", error);
    return Response.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}