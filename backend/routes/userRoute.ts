import express from 'express';
import {
    getUserValidator,
    createUserValidator,
    updateUserValidator,
    deleteUserValidator,
} from '../utils/validator/userValidator';

import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getLoggedUserData,
    updateLoggedUserData,
    deleteLoggedUserData,
} from '../controller/userController';

import { protect, allowedTo } from '../controller/authController';

const router = express.Router();

router.get('/getMe', protect, getLoggedUserData, getUser);
router.patch('/updateMe', protect, updateLoggedUserData);
router.delete('/deleteMe', protect, deleteLoggedUserData);

// Admin Only
router.use(protect, allowedTo('admin'));

router
    .route('/')
    .get(getUsers)
    .post(createUserValidator, createUser);

router
    .route('/:id')
    .get(getUserValidator, getUser)
    .patch(updateUserValidator, updateUser)
    .delete(deleteUserValidator, deleteUser);

export default router;
