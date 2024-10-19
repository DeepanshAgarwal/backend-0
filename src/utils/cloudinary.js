import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.COUDINARY_CLOUD_NAME,
    api_key: process.env.COUDINARY_API_KEY,
    api_secret: process.env.COUDINARY_API_SECREY,
});

const uploadOnCloudninary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file has been uploaded successfully
        // console.log("File has been uploaded on cloudinary.", response);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        //remove locally saved file as upload is unsuccessful
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export { uploadOnCloudninary };
