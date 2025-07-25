// create seding email function using resend
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    });
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
