import express from 'express';
import {
    getAppointmentValidator,
    createAppointmentValidator,
    updateAppointmentValidator,
    deleteAppointmentValidator,
} from '../utils/validator/appointmentValidator';

import {
    getAppointments,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment,
} from '../controller/appointmentController';

import { protect, allowedTo } from '../controller/authController';

const router = express.Router();

// Patients can create appointments
router.post('/', createAppointmentValidator, createAppointment);

// Admin/Doctor can view and manage appointments
router.use(protect, allowedTo('admin', 'doctor'));

router
    .route('/')
    .get(getAppointments);

router
    .route('/:id')
    .get(getAppointmentValidator, getAppointment)
    .patch(updateAppointmentValidator, updateAppointment)
    .delete(deleteAppointmentValidator, deleteAppointment);

export default router;
