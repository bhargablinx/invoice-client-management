import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/invoice-client-db`);
        console.log("DB Connected!");
    } catch (error) {
        console.log("FAILED CONNECTION!!", error);
        process.exit(1);
    }
};

export default connectDB;
