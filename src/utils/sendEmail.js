import nodemailer from "nodemailer";


export const sendEmail = async ({ name, email, message }) => {
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // VERY IMPORTANT
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};