import { resend } from "./resend.js";

const sendMail = async (userMail, subject, html) => {
    const response = await resend.emails.send({
        from: "Test Name <onboarding@resend.dev>",
        to: userMail,
        subject,
        html,
    });

    return response;
};

export { sendMail };
