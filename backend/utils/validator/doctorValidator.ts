import { z } from 'zod';
import zodValidator from '../../middlewares/validatorMiddleware';

const mongoId = z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid ID format"
});

export const createDoctorSchema = z.object({
    body: z.object({
        name: z.string().min(3),
        specialty: mongoId,
        experience: z.string(),
        consultations: z.string(),
        education: z.string(),
        bio: z.string(),
        imageUrl: z.string(),
        availability: z.string(),
        focusAreas: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string()
        })).optional(),
    }),
});

export const getDoctorValidator = zodValidator(z.object({ params: z.object({ id: mongoId }) }));
export const createDoctorValidator = zodValidator(createDoctorSchema);
export const updateDoctorValidator = zodValidator(z.object({
    params: z.object({ id: mongoId }),
    body: createDoctorSchema.shape.body.partial()
}));
export const deleteDoctorValidator = getDoctorValidator;
