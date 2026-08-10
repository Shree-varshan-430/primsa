import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10).max(13),
  email: z.string().email(),
  eventType: z.string().min(1),
  preferredDate: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    // TODO: Wire this to a real email service (e.g., Resend, SendGrid, Nodemailer)
    // or a CRM webhook (e.g., Zoho, HubSpot, Airtable).
    // For now, logging to console for development verification.
    console.log("📩 New booking enquiry received:", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      eventType: data.eventType,
      preferredDate: data.preferredDate,
      message: data.message || "(no message)",
      timestamp: new Date().toISOString(),
    });

    // TODO: Example Resend integration (uncomment and install 'resend'):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'bookings@primsastoriesya.com',
    //   to: 'primsastoriesya@gmail.com',
    //   subject: `New Booking Enquiry — ${data.eventType} on ${data.preferredDate}`,
    //   html: `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p>...`,
    // });

    return NextResponse.json(
      { success: true, message: "Enquiry received. We will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid form data.", errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
