import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false,
        },

        avatar: {
            type: String,
            default: "",
        },

        refreshToken: {
            type: String,
            default: null,
            select: false,
        },

        emailVerified: {
            type: Boolean,
            default: false,
        },

        lastLoginAt: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

// Encrypt password
userSchema.pre("save", async function () {
    if (this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 10);
});

// Decrypt password and validate
userSchema.methods.isPasswordCorrect = async function (passwordByClient) {
    return await bcrypt.compare(passwordByClient, this.password); // returns bool
};

const User = mongoose.model("User", userSchema);

export default User;
