import sendEmail from "./utils/email.js";

const main = async () => {
    const to = 'nerwinalamas@gmail.com';
    const subject = 'Test Email';
    const text = 'This is a test email sent using Nodemailer.';
    const html = '<h1>This is a test email</h1><p>Sent using Nodemailer.</p>';

    await sendEmail(to, subject, text, html);
};

main();