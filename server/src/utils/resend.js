import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export { resend };

// resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "spam.bhargab@gmail.com",
//     subject: "Hello World",
//     html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });
