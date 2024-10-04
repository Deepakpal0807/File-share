import express from 'express';
const router1 = express.Router();
import check from '../utils/check.js'; // Import the check middleware
import { downloadimage } from '../controller/download.controller.js'; // Import the download handler

// Use the check middleware for the GET request
router1.get('/:fileId', check, downloadimage); 

export default router1; // Export the router
