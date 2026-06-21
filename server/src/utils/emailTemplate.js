export const verifyEmailTemplate = (verificationUrl) => {
    return ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"> <h2>Verify Your Email</h2>
        <p>Thank you for signing up.</p>

        <p>Please click the button below to verify your email address:</p>

        <a
            href="${verificationUrl}"
            style="
                display: inline-block;
                padding: 12px 20px;
                background-color: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 6px;
            "
        >
            Verify Email
        </a>

        <p style="margin-top: 20px;">
            If button is not clickable, visit: ${verificationUrl}
        </p>

        <p style="margin-top: 20px;">
            If you did not create an account, you can safely ignore this email.
        </p>

        <p>
            This verification link will expire in 1 hour.
        </p>
    </div>
`;
};

export const forgotPasswordTemplate = (name, resetUrl) => {
    return ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"> <h2>Reset Your Password</h2>

        <p>Hello ${name},</p>

        <p>We received a request to reset your password.</p>

        <p>Please click the button below to create a new password:</p>

        <a
            href="${resetUrl}"
            style="
                display: inline-block;
                padding: 12px 20px;
                background-color: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 6px;
            "
        >
            Reset Password
        </a>

        <p style="margin-top: 20px;">
            If you did not request a password reset, you can safely ignore this email.
        </p>

        <p>
            This password reset link will expire in 15 minutes.
        </p>
    </div>
`;
};

export const invitationTemplate = (organizationName, role, invitationUrl) => {
    return ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"> <h2>You're Invited!</h2>

        <p>
            You have been invited to join
            <strong>${organizationName}</strong>.
        </p>

        <p>
            Your assigned role will be:
            <strong>${role}</strong>
        </p>

        <p>
            Click the button below to accept the invitation:
        </p>

        <a
            href="${invitationUrl}"
            style="
                display: inline-block;
                padding: 12px 20px;
                background-color: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 6px;
            "
        >
            Accept Invitation
        </a>

        <p style="margin-top: 20px;">
            If you were not expecting this invitation,
            you can safely ignore this email.
        </p>

        <p>
            This invitation link will expire in 7 days.
        </p>
    </div>
`;
};
