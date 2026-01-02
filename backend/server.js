import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/contact.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contacts', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
