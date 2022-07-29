import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import TokenError from '../errors/tokenError';
import { User } from '../interfaces/interface';
import UserService from '../services/user.service';

const userService = new UserService();

export default async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (!token) throw new TokenError('Token not found');
  const decoded = jwt.verify(token, secret);
  const { username } = decoded;
  const user: User = await userService.findOne(username);
  if (!user) throw new TokenError('Invalid token');
  req.user = user;
  next();
};
