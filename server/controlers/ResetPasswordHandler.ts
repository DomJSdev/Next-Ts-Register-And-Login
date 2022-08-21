import {Request, Response} from 'express';
import userModel from '../models/userSchema';
import generateSaltAndHashPassword from '../utils/generateSaltAndHashedPassword';
import {decodeJWT} from '../utils/jwt';

const ResetPasswordHandler = async (req: Request, res: Response) => {
  if (!req.body)
    res
      .status(400)
      .send(
        new Error('Validation error, newPassword, token should not be empty')
      );

  const {newPassword, token} = req.body;

  const result = decodeJWT(token);

  if (result instanceof Error) {
    res.status(400).send(result);
    return;
  }

  const {hashedPassword, passwordSalt} =
    generateSaltAndHashPassword(newPassword);

  await userModel.findOneAndUpdate(
    {
      _id: result.data.userId,
    },
    {
      password: hashedPassword,
      passwordSalt,
    }
  );

  res.send({message: 'Password has been updated successfully'});
};

export default ResetPasswordHandler;
