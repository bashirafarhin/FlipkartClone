import mongoose from 'mongoose';
import env from 'dotenv'
env.config();

export const connectToDatabase = async () => {
    try {
        const mongodburi = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/flipkart";
        await mongoose.connect(mongodburi);
        console.log("Mongoose Connected");
    } catch (error) {
        throw error;
    }
}