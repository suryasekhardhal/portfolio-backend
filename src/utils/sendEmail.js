import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, message }) => {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>", // default works without domain setup
    to: process.env.EMAIL_USER,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};