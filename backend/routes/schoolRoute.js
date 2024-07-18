// backend/routes/schoolRoutes.js
import express from 'express';
import multer from 'multer';
import { addSchool, getSchools } from '../controllers/schoolController.js';

const router = express.Router();

// image storage engine 
 const storage = multer.diskStorage({
destination:"schoolImages",
filename:(req,file,cb) => {
  return cb(null,`${Date.now()}${file.originalname}` )
}
 })

const upload = multer({ storage:storage});

router.post('/schools', upload.single('image'), addSchool);
router.get('/schools', getSchools);

export default router;
