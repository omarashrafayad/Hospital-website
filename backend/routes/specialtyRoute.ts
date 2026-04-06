import express from 'express';
import {
    getSpecialtyValidator,
    createSpecialtyValidator,
    updateSpecialtyValidator,
    deleteSpecialtyValidator,
} from '../utils/validator/specialtyValidator';

import {
    getSpecialties,
    getSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
} from '../controller/specialtyController';

import { protect, allowedTo } from '../controller/authController';

const router = express.Router();

router
    .route('/')
    .get(getSpecialties)
    .post(protect, allowedTo('admin'), createSpecialtyValidator, createSpecialty);

router
    .route('/:id')
    .get(getSpecialtyValidator, getSpecialty)
    .patch(protect, allowedTo('admin'), updateSpecialtyValidator, updateSpecialty)
    .delete(protect, allowedTo('admin'), deleteSpecialtyValidator, deleteSpecialty);

export default router;
