import File from "../models/file.model.js";

const uploadimage = async (req, res) => {
    // Check if file is present in the request
    if (!req.file) {
        return res.status(400).json({ msg: "No file uploaded" });
    }

    const fileobj = {
        path: req.file.path,
        name: req.file.originalname,
    };

    try {
        const file = await File.create(fileobj);
        console.log(file);
        return res.status(200).json({ path:`http://localhost:8000/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        // Return an error response
        return res.status(500).json({ msg: "File upload failed", error: error.message });
    }
};

export { uploadimage };
