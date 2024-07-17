// backend/routes/schoolRoutes.js
import express from 'express';
import multer from 'multer';
import { addSchool, getSchools } from '../controllers/schoolController.js';

const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

router.post('/schools', addSchool);
router.get('/schools', getSchools);

export default router;
