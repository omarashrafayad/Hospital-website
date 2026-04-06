import Appointment from '../model/appointmentModel';
import * as factory from './handleFactory';

export const getAppointments = factory.getAll(Appointment);
export const getAppointment = factory.getOne(Appointment, 'doctor');
export const createAppointment = factory.createOne(Appointment);
export const updateAppointment = factory.updateOne(Appointment);
export const deleteAppointment = factory.deleteOne(Appointment);
