import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User, UserIndex } from '../interfaces/interface';
import { validateUser } from './validations';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public findOne = async (username: string): Promise<UserIndex> => {
    const user = await this.model.findOne(username);
    return user;
  };

  public create = async (user: User): Promise<User> => {
    validateUser(user);
    const newUser = await this.model.create(user);
    return newUser;
  };
}

export default UserService;
