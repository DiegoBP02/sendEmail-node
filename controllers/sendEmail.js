const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kassandra.bayer@ethereal.email",
      pass: "fNyZRXet9GXySFFnEx",
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding Addict" <codingaddict@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Email with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
