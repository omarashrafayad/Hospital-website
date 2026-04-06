import mongoose, { Document, Types } from "mongoose";

export interface IDoctor extends Document {
    name: string;
    specialty: Types.ObjectId;
    slug: string;
    rating: number;
    experience: string;
    consultations: string;
    education: string;
    bio: string;
    imageUrl: string;
    focusAreas: {
        title: string;
        description: string;
        icon: string;
    }[];
    availability: string;
}

const doctorSchema = new mongoose.Schema<IDoctor>({
    name: {
        type: String,
        required: [true, 'Doctor name required'],
        trim: true,
    },
    specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty',
        required: [true, 'Doctor specialty required'],
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    experience: {
        type: String,
        required: [true, 'Doctor experience required'],
    },
    consultations: {
        type: String,
        required: [true, 'Doctor consultations count required'],
    },
    education: {
        type: String,
        required: [true, 'Doctor education required'],
    },
    bio: {
        type: String,
        required: [true, 'Doctor bio required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Doctor image URL required'],
    },
    focusAreas: [{
        title: String,
        description: String,
        icon: String
    }],
    availability: {
        type: String,
        required: [true, 'Doctor availability required'],
    }
}, { timestamps: true });

const doctorModel = mongoose.model<IDoctor>('Doctor', doctorSchema);
export default doctorModel;
