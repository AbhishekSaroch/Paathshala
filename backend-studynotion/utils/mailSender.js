const nodeMailer = require("nodemailer");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,              
  secure: true,        
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 10000, 
});

const mailSender = async (email, title, body) => {
  try {
    const info = await transporter.sendMail({
      from: `"Paathshala" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Mail error:", error);
    throw error;
  }
};

module.exports = mailSender;