import mongoose, { Schema } from "mongoose";

const serviceCatalogSchema = new Schema({}, { timestamps: true });

const Servicecatalog = mongoose.model("Servicecatalog", serviceCatalogSchema);

export default Servicecatalog;
