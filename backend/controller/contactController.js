const nodemailer = require("nodemailer");

const contactdata = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company, hearAboutUs, projectDetails, service } = req.body;

        // Nodemailer configuration with Gmail
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "dev.backend@blubirdtek.com",
                pass: "pwjx lldb zqnt zfrv"
            }
        });

        let mailOptions = {
            from: `"BluBird Contact Form" <developer1@blubirdtek.com>`,
            to: "hello@blubirdtek.com",
            subject: `New Contact from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
                    <div style="text-align: center; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">
                        <h2 style="color: #0056b3; margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <div style="padding: 20px; background: #ffffff; border-radius: 8px; margin-top: 10px;">
                        <p style="font-size: 16px; color: #333;"><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                        <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone}</p>
                        <p style="font-size: 16px; color: #333;"><strong>Company:</strong> ${company}</p>
                        <p style="font-size: 16px; color: #333;"><strong>Heard About Us:</strong> ${hearAboutUs}</p>
                        <p style="font-size: 16px; color: #333;"><strong>Service Interested In:</strong> ${service}</p>
                        <p style="font-size: 16px; color: #333;"><strong>Project Details:</strong></p>
                        <div style="background: #eef4ff; padding: 15px; border-radius: 5px; font-size: 15px; color: #444;">${projectDetails}</div>
                    </div>
                    <div style="text-align: center; margin-top: 20px;">
                        <p style="font-size: 12px; color: #777;">This message was sent via the BluBird contact form.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(400).json({ message: "Error sending email. Please try again later." });
    }
};

module.exports = contactdata;
