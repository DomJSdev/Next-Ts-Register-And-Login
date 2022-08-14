import {Request, Response} from 'express';
import userModel from '../models/userSchema';
import generateSaltAndHashPassword from '../utils/generateSaltAndHashedPassword';

const RegisterHandler = async (req: Request, res: Response) => {
  if (!req.body)
    res.status(400).send(new Error('Dud you forget the body FUCK OFF!!'));

  const {firstName, lastName, email, password} = req.body;

  const {hashedPassword, passwordSalt} = generateSaltAndHashPassword(password);

  try {
    const result = await userModel.create({
      firstName,
      lastName,
      password: hashedPassword,
      passwordSalt,
      active: false,
      email,
    });

    await result.save();
    res.send('Your user has been created');
  } catch (error) {
    res.status(500).send(error);
  }
};

export default RegisterHandler;
