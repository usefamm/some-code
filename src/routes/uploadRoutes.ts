
import { Router, Request, Response } from 'express';
import { uploadMultiple } from '../multerConfig';

const router = Router();

//4b- Route to handle multiple file uploads
router.post('/upload', uploadMultiple, (req: Request, res: Response) => {
    try {
        // Access the uploaded files
        const files = req.files as Express.Multer.File[]; // Cast to the correct type

        // Process each uploaded file
        const fileDetails = files.map(file => ({
            filename: file.filename,
            path: file.path,
            mimetype: file.mimetype,
        }));

        res.status(200).json({
            message: 'Files uploaded successfully',
            files: fileDetails
        });
    } catch (error: any) {
        res.status(500).json({ message: 'Error uploading files', error: error.message });
    }
});

export default router;
