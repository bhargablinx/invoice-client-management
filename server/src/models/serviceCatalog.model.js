import mongoose, { Schema } from "mongoose";

const serviceCatalogSchema = new Schema({
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150,
    },

    description: {
        type: String,
        trim: true,
        maxlength: 1000,
        default: "",
    },

    unitPrice: {
        type: Number,
        required: true,
        min: 0,
    },

    taxRate: {
        type: Number,
        default: 0,
        min: 0,
    },

    unit: {
        type: String,
        default: "item", // item, hour, month, project
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

serviceCatalogSchema.index(
    {
        organization: 1,
        name: 1,
    },
    {
        unique: true,
    }
);

const Servicecatalog = mongoose.model("Servicecatalog", serviceCatalogSchema);

export default Servicecatalog;
