import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { sendEmail } from "../utils/sendEmail.js";



export const contact = asyncHandler(async (req, res) => {
console.log("email and password:",process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new ApiError(400, "All fields are required");
  }
  console.log("BODY:", req.body);
   await sendEmail({ name, email, message });
  res
    .status(200)
    .json(new ApiResponse(200, null, "Message sent successfully"));
});