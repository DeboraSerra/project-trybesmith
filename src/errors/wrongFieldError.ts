export default class WrongFieldError extends Error {
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'wrongFieldError';
    this.code = 422;
  }
}
