// backend/app.js
import express from 'express';
import "dotenv/config"
import cors from 'cors';
import schoolRoutes from './routes/schoolRoute.js';
import createSchoolTable from './models/schoolModel.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/img', express.static('schoolImages'));
app.use('/api', schoolRoutes);

const PORT =  5000;

createSchoolTable();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
