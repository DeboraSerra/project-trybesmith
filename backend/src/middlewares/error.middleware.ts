import { Request, Response, NextFunction } from 'express';
import RequiredError from '../errors/requiredError';

export default async (err: RequiredError, _req: Request, res: Response, _next: NextFunction) => {
  const { code, message } = err;
  if (code) return res.status(code).json({ message });
  if (err.name === 'JsonWebTokenError') return res.status(401).json({ message: 'Invalid token' });
  res.status(500).json({ message });
};
