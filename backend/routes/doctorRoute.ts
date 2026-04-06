import express from 'express';
import {
    getDoctorValidator,
    createDoctorValidator,
    updateDoctorValidator,
    deleteDoctorValidator,
} from '../utils/validator/doctorValidator';

import {
    getDoctors,
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor,
} from '../controller/doctorController';

import { protect, allowedTo } from '../controller/authController';

const router = express.Router();

router
    .route('/')
    .get(getDoctors)
    .post(protect, allowedTo('admin'), createDoctorValidator, createDoctor);

router
    .route('/:id')
    .get(getDoctorValidator, getDoctor)
    .patch(protect, allowedTo('admin'), updateDoctorValidator, updateDoctor)
    .delete(protect, allowedTo('admin'), deleteDoctorValidator, deleteDoctor);

export default router;
