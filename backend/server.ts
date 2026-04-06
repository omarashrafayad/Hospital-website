/// <reference path="./types/express.d.ts" />
import path from 'path'
import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import DBconnection from './config/database'
import globalError from './middlewares/errorMiddleware'
import ApiError from './utils/apiError'

// Route imports
import authRoute from './routes/authRoute'
import userRoute from './routes/userRoute'
import doctorRoute from './routes/doctorRoute'
import specialtyRoute from './routes/specialtyRoute'
import appointmentRoute from './routes/appointmentRoute'

dotenv.config({ path: 'config.env' })

const app = express();

// Database connection
DBconnection();

// Middlewares
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

// Mount Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/specialties', specialtyRoute);
app.use('/api/v1/appointments', appointmentRoute);

// Handle unhandled routes
app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 404));
});

// Global error handling middleware
app.use(globalError)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
