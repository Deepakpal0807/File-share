import File from "../models/file.model.js";

const downloadimage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        
        // Check if the file exists
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Increment the download count
        file.downloadContent++;
        await file.save();

        // Use res.download to send the file as a download
        res.download(file.path, file.name, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error downloading the file' });
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

export { downloadimage };
