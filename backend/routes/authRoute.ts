import express from 'express';
import { signupValidator, loginValidator } from '../utils/validator/userValidator';
import { signUp, login, forgotPassword, verifyPassResetCode, resetPassword } from '../controller/authController';

const router = express.Router();

router.post('/signup', signupValidator, signUp);
router.post('/login', loginValidator, login);
router.post('/forgotPassword', forgotPassword);
router.post('/verifyResetCode', verifyPassResetCode);
router.put('/resetPassword', resetPassword);

export default router;
