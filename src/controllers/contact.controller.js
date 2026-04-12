import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { sendEmail } from "../utils/sendEmail.js";

export const contact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new ApiError(400, "All fields are required");
  }
  const emailSubject = `New contact message from ${name}`;
  const emailText = `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  await sendEmail(process.env.EMAIL_USER, emailSubject, emailText);
  res
    .status(200)
    .json(new ApiResponse(200, null, "Message sent successfully"));
});