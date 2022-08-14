import {compareSync} from 'bcryptjs';

const isCorrectPassword = (plainPassword: string, hashedPassword: string) =>
  compareSync(plainPassword, hashedPassword);

export default isCorrectPassword;
