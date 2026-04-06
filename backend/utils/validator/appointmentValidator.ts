import { z } from 'zod';
import zodValidator from '../../middlewares/validatorMiddleware';

const mongoId = z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid ID format"
});

export const createAppointmentSchema = z.object({
    body: z.object({
        fullName: z.string().min(3),
        phoneNumber: z.string(),
        doctor: mongoId,
        date: z.string().transform((str) => new Date(str)),
        timeSlot: z.string(),
        notes: z.string().optional(),
    }),
});

export const updateAppointmentSchema = z.object({
    params: z.object({ id: mongoId }),
    body: z.object({
        fullName: z.string().optional(),
        phoneNumber: z.string().optional(),
        doctor: mongoId.optional(),
        date: z.string().transform((str) => new Date(str)).optional(),
        timeSlot: z.string().optional(),
        notes: z.string().optional(),
        status: z.enum(['pending', 'confirmed', 'cancelled']).optional(),
    }),
});

export const getAppointmentValidator = zodValidator(z.object({ params: z.object({ id: mongoId }) }));
export const createAppointmentValidator = zodValidator(createAppointmentSchema);
export const updateAppointmentValidator = zodValidator(updateAppointmentSchema);
export const deleteAppointmentValidator = getAppointmentValidator;
