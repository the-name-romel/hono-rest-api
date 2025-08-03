import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";
import { openAPI } from "better-auth/plugins";
import { sendEmail } from "@/lib/email";
import { EmailVerify } from "@/emails/email-verify";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  plugins: [openAPI()],
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log("Sending verification email to:", user.email);
      try {
        await sendEmail({
          to: user.email,
          subject: "Verify your email address",
          html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                  <h1>Welcome, ${user.name || "User"}!</h1>
                  <p>Please verify your email address by clicking the link below:</p>
                  <a href="${url}" style="display: inline-block; padding: 10px 20px; background: #0070f3; color: white; text-decoration: none; border-radius: 4px;">
                    Verify Email
                  </a>
                  <p>If you didn't sign up, you can safely ignore this email.</p>
                </div>
              `,
        });
        console.log("Verification email sent successfully");
      } catch (error) {
        console.error("Error sending verification email:", error);
      }
    },
  },
});
