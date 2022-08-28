import {Request, Response} from 'express';
import Unauthorized from '../errors/Unauthorized';
import userModel from '../models/userSchema';

const UserHandler = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    res.status(401).send(new Unauthorized('Unauthorized access'));
    return;
  }

  try {
    // The minus means exclude the fields from the model. Search more about select API in mongoose.
    const users = await userModel.find().select(['-password', '-passwordSalt']);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default UserHandler;
