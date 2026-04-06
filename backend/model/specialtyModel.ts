import mongoose, { Document } from "mongoose";

export interface ISpecialty extends Document {
    title: string;
    slug: string;
    description: string;
    icon: string;
}

const specialtySchema = new mongoose.Schema<ISpecialty>({
    title: {
        type: String,
        required: [true, 'Specialty title required'],
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    description: {
        type: String,
        required: [true, 'Specialty description required'],
    },
    icon: {
        type: String,
        required: [true, 'Specialty icon required'],
    }
}, { timestamps: true });

const specialtyModel = mongoose.model<ISpecialty>('Specialty', specialtySchema);
export default specialtyModel;
