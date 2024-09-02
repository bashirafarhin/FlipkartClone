import env from "dotenv";
import mongoose from "mongoose";

env.config();

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connection created successfully with MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

export default main();