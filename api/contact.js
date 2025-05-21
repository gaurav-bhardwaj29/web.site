import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create transporter with proper promise handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection first
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log("SMTP server verification failed:", error);
          reject(error);
        } else {
          console.log("SMTP server connection verified");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email with proper promise handling
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("Email sending failed:", err);
          reject(err);
        } else {
          console.log("Email sent successfully:", info);
          resolve(info);
        }
      });
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in email process:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
