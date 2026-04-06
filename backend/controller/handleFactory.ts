import { Request, Response, NextFunction } from 'express';
import { Model, Document } from 'mongoose';
import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError';
import ApiFeatures from '../utils/apiFeatures';

export const getAll = <T extends Document>(model: Model<T>, modelName: string | undefined = '') =>
  asyncHandler(async (req: Request, res: Response) => {
    let filter = {};
    if ((req as any).filterObj) {
      filter = (req as any).filterObj;
    }

    const apiFeatures = new ApiFeatures(model.find(filter), req.query)
      .filter()
      .search(modelName);

    const countQuery = apiFeatures.mongooseQuery.clone();
    const documentCount = await countQuery.countDocuments();

    apiFeatures
      .limitFields()
      .sort()
      .paginate(documentCount);

    const { mongooseQuery, paginationResult } = apiFeatures;
    const docs = await mongooseQuery;

    res.status(200).json({
      results: docs.length,
      data: docs,
      paginationResult
    });
  });

export const getOne = <T extends Document>(model: Model<T>, populateOpt?: string | any) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let query = model.findById(req.params.id);
    if (populateOpt) {
      query = query.populate(populateOpt);
    }
    const doc = await query;

    if (!doc) {
      return next(new ApiError(`No document for this id`, 404));
    }

    res.status(200).json({ data: doc });
  });

export const createOne = <T extends Document>(model: Model<T>) =>
  asyncHandler(async (req: Request, res: Response) => {
    const doc = await model.create(req.body);
    res.status(201).json({ data: doc });
  });

export const updateOne = <T extends Document>(model: Model<T>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!doc) {
      return next(new ApiError(`No document for this id`, 404));
    }

    res.status(200).json({ data: doc });
  });

export const deleteOne = <T extends Document>(model: Model<T>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new ApiError(`No document for this id`, 404));
    }

    res.status(204).json({ message: 'item deleted successfully' });
  });
