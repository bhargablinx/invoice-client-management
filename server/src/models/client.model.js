import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);

export default Client;
