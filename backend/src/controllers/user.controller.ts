import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import UserService from '../services/user.service';
import RequiredError from '../errors/requiredError';
import UnauthorizedError from '../errors/tokenError';
import { User } from '../interfaces/interface';

export const secret = 'prjectTrybeSmith';

const createToken = (data: User) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username) {
      throw new RequiredError('"username" is required');
    } if (!password) {
      throw new RequiredError('"password" is required');
    }
    const user = await this.service.findOne(username);
    if (!user || password !== user.password) {
      throw new UnauthorizedError('Username or password invalid');
    }
    const { password: pass, ...data } = user;
    res.status(200).json({ token: createToken(data) });
  };

  public create = async (req: Request, res: Response) => {
    const user = await this.service.create(req.body);
    res.status(201).json({ token: createToken(user) });
  };
}

export default UserController;
