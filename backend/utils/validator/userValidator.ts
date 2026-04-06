import { z } from 'zod';
import zodValidator from '../../middlewares/validatorMiddleware';
import { createEntityValidators } from './createEntityValidators';

const userBaseValidators = createEntityValidators({ entityName: 'User' });

const mongoId = z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid ID format"
});

export const signupSchema = z.object({
    body: z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['patient', 'doctor', 'admin']).optional(),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6),
    }),
});

export const updateUserSchema = z.object({
    params: z.object({ id: mongoId }),
    body: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        role: z.enum(['patient', 'doctor', 'admin']).optional(),
    }),
});

export const signupValidator = zodValidator(signupSchema);
export const loginValidator = zodValidator(loginSchema);
export const updateUserValidator = zodValidator(updateUserSchema);
export const getUserValidator = userBaseValidators.getValidator;
export const deleteUserValidator = userBaseValidators.deleteValidator;
export const createUserValidator = zodValidator(signupSchema);
