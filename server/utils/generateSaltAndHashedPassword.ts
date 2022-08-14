import {genSaltSync, hashSync} from 'bcryptjs';

const generateSaltAndHashPassword = (plainPassword: string) => {
  const passwordSalt = genSaltSync(12);
  const hashedPassword = hashSync(plainPassword, passwordSalt);
  return {passwordSalt, hashedPassword};
};

export default generateSaltAndHashPassword;
