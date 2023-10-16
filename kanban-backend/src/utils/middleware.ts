import { NextFunction, Request, Response } from 'express';
import { DefaultSchemaKeys } from 'express-validator/src/middlewares/schema';
import { Schema, checkSchema, validationResult } from 'express-validator';
import logger from './logger';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);

  if (error.name === 'ValidationError') {
    return res.status(403).json({ error: error.message });
  }

  if (error.name === 'NotFoundError') {
    return res.status(404).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
  next(error);
};

export const validate = (validationSchema: Schema<DefaultSchemaKeys>) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    await checkSchema(validationSchema, ['body']).run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next({ name: 'ValidationError', message: errors.array()[0].msg });
    }
    next();
  };
};
