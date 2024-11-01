import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        // app.on("error", (error) => {
        //     console.error("ERROR: ", error);
        //     throw error;
        // });
        console.log(
            `\n MongoDB connected. DB Host: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGOGB connection unsuccessful: ", error);
        process.exit(1);
    }
};

export default connectDB;
