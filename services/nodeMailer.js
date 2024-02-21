const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    secureConnection: false,
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.APP_PASSWORD
    }
})

const sendEmail = async (email, mailContent) => {
    try {
        const {subject, text, content } = mailContent
        const info = await transporter.sendMail({
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: subject,
            text: text,
            html: content
        });
        return info;
    } catch (error) {
        console.log(`Error While sending verification email: ${error.message}`);
    }
}

module.exports = { sendEmail } 
