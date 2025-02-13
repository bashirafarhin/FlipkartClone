import mongoose from 'mongoose';
import env from 'dotenv'
env.config();

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose Connected");
    } catch (error) {
        throw error;
    }
}