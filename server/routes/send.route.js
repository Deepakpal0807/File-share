import express from 'express';
import { uploadimage } from '../controller/send.controller.js';
import upload from '../utils/upload.js'; // Make sure you're importing the multer instance

const router = express.Router();

// Define the upload route using the multer middleware
router.post('/upload', upload.single('file'), uploadimage);

export default router;
