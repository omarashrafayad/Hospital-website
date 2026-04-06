import Specialty from '../model/specialtyModel';
import * as factory from './handleFactory';

export const getSpecialties = factory.getAll(Specialty);
export const getSpecialty = factory.getOne(Specialty);
export const createSpecialty = factory.createOne(Specialty);
export const updateSpecialty = factory.updateOne(Specialty);
export const deleteSpecialty = factory.deleteOne(Specialty);
