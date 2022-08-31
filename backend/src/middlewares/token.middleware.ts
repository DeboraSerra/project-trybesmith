import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { secret } from '../controllers/user.controller';
import TokenError from '../errors/tokenError';
import { UserIndex, ReqUser } from '../interfaces/interface';
import UserService from '../services/user.service';

const userService = new UserService();

export default async (req: ReqUser, _res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (!auth) throw new TokenError('Token not found');
  const token = (auth.includes('Bearer')) ? auth.split(' ')[1] : auth;
  const decoded = jwt.verify(token, secret, { complete: true });
  const { username } = Object.entries(decoded.payload)[0][1];
  const user: UserIndex = await userService.findOne(username);
  if (!user) throw new TokenError('Invalid token');
  req.user = user;
  next();
};
