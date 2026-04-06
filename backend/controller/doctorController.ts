import Doctor from '../model/doctorModel';
import * as factory from './handleFactory';

export const getDoctors = factory.getAll(Doctor, 'doctors');
export const getDoctor = factory.getOne(Doctor, 'specialty');
export const createDoctor = factory.createOne(Doctor);
export const updateDoctor = factory.updateOne(Doctor);
export const deleteDoctor = factory.deleteOne(Doctor);
