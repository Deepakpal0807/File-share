import multer from "multer";

// Set up multer for file uploads
const upload = multer({ dest: 'upload' });

const check = (req, res, next) => {
    console.log("API working fine");
    next();
};

// Export the upload instance directly
export default upload;
