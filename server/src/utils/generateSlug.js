import slugify from "slugify";
import crypto from "crypto";

export const generateSlug = (name) => {
    const baseSlug = slugify(name, {
        lower: true,
        strict: true,
        trim: true,
    });

    return `${baseSlug}-${crypto.randomBytes(3).toString("hex")}`;
};
