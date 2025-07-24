import mongoose from "mongoose"

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch{
        console.log("Err in connecting to MongoDB", error);
        process.exit(1);
    }
}