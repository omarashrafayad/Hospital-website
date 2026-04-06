import { z } from 'zod';
import zodValidator from '../../middlewares/validatorMiddleware';
import { createEntityValidators } from './createEntityValidators';

const specialtyBaseValidators = createEntityValidators({ entityName: 'Specialty' });

export const createSpecialtySchema = z.object({
    body: z.object({
        title: z.string().min(3).max(64),
        description: z.string().min(10),
        icon: z.string(),
    }),
});

export const updateSpecialtySchema = z.object({
    params: specialtyBaseValidators.getValidator, // Reuse standard id validator logic
    body: z.object({
        title: z.string().min(3).max(64).optional(),
        description: z.string().min(10).optional(),
        icon: z.string().optional(),
    }),
});

// Overriding complex validators because Standard factory only handles 'name'
const mongoId = z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid ID format"
});

export const getSpecialtyValidator = specialtyBaseValidators.getValidator;
export const createSpecialtyValidator = zodValidator(createSpecialtySchema);
export const updateSpecialtyValidator = zodValidator(z.object({
    params: z.object({ id: mongoId }),
    body: createSpecialtySchema.shape.body.partial()
}));
export const deleteSpecialtyValidator = specialtyBaseValidators.deleteValidator;
