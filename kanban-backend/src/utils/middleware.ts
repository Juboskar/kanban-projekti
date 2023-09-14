import logger from './logger';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);

  return res.status(500).json({ error: 'Internal Server Error' });
  next(error);
};
