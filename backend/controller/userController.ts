import User from '../model/userModel';
import * as factory from './handleFactory';
import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError';

export const getLoggedUserData = asyncHandler(async (req, res, next) => {
    req.params.id = req.user?._id?.toString() as string;
    next();
});

export const updateLoggedUserData = asyncHandler(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.user?._id,
        {
            name: req.body.name,
            email: req.body.email,
        },
        { new: true }
    );

    res.status(200).json({ data: updatedUser });
});

export const deleteLoggedUserData = asyncHandler(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user?._id, { active: false });
    res.status(204).json({ status: 'Success' });
});

export const getUsers = factory.getAll(User);
export const getUser = factory.getOne(User);
export const createUser = factory.createOne(User);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);
