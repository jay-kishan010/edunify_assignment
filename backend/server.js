// backend/app.js
import express from 'express';

import cors from 'cors';
import schoolRoutes from './routes/schoolRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
