import { Product, User } from '../interfaces/interface';
import RequiredError from '../errors/requiredError';
import WrongFieldError from '../errors/wrongFieldError';

const validateAmount = (amount: string): void => {
  if (!amount) {
    throw new RequiredError('"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new WrongFieldError('"amount" must be a string');
  }
  if (amount.length < 3) {
    throw new WrongFieldError('"amount" length must be at least 3 characters long');
  }
};

export const validateProd = (prod: Product): void => {
  const { name, amount } = prod;
  if (!name) {
    throw new RequiredError('"name" is required');
  }
  if (typeof name !== 'string') {
    throw new WrongFieldError('"name" must be a string');
  }
  if (name.length < 3) {
    throw new WrongFieldError('"name" length must be at least 3 characters long');
  }
  validateAmount(amount);
};

const validateClasse = (classe: string): void => {
  if (!classe) {
    throw new RequiredError('"classe" is required');
  }
  if (typeof classe !== 'string') {
    throw new WrongFieldError('"classe" must be a string');
  }
  if (classe.length < 3) {
    throw new WrongFieldError('"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: number): void => {
  if (!level) {
    throw new RequiredError('"level" is required');
  }
  if (typeof level !== 'number') {
    throw new WrongFieldError('"level" must be a number');
  }
  if (level <= 0) {
    throw new WrongFieldError('"level" must be greater than or equal to 1');
  }
};

const validatePass = (password: string | undefined): void => {
  if (!password) {
    throw new RequiredError('"password" is required');
  }
  if (typeof password !== 'string') {
    throw new WrongFieldError('"password" must be a string');
  }
  if (password.length < 8) {
    throw new WrongFieldError('"password" length must be at least 8 characters long');
  }
};

export const validateUser = (user: User): void => {
  const { username, classe, level, password } = user;
  if (!username) {
    throw new RequiredError('"username" is required');
  }
  if (typeof username !== 'string') {
    throw new WrongFieldError('"username" must be a string');
  }
  if (username.length < 3) {
    throw new WrongFieldError('"username" length must be at least 3 characters long');
  }
  validateClasse(classe);
  validateLevel(level);
  validatePass(password);
};
