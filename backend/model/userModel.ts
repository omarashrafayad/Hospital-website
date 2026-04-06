import mongoose, { Document } from "mongoose";
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'patient' | 'doctor' | 'admin';
    profileImg?: string;
    passwordChangedAt?: Date;
    passwordResetCode?: string;
    passwordResetExpires?: Date | number;
    passwordResetVerified?: boolean;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        trim: true,
        required: [true, 'name required'],
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [6, 'Too short password'],
    },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        default: 'patient',
    },
    profileImg: String,
    passwordChangedAt: Date,
    passwordResetCode: String,
    passwordResetExpires: Date,
    passwordResetVerified: Boolean,
}, { timestamps: true });

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 12);
});

const userModel = mongoose.model<IUser>('User', userSchema);
export default userModel;
