import mongoose, { Document, Types } from "mongoose";

export interface IAppointment extends Document {
    fullName: string;
    phoneNumber: string;
    doctor: Types.ObjectId;
    date: Date;
    timeSlot: string;
    notes?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
}

const appointmentSchema = new mongoose.Schema<IAppointment>({
    fullName: {
        type: String,
        required: [true, 'Full name required'],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number required'],
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Doctor selection required'],
    },
    date: {
        type: Date,
        required: [true, 'Appointment date required'],
    },
    timeSlot: {
        type: String,
        required: [true, 'Time slot required'],
    },
    notes: String,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    }
}, { timestamps: true });

const appointmentModel = mongoose.model<IAppointment>('Appointment', appointmentSchema);
export default appointmentModel;
