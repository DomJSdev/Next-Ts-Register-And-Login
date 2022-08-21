import {Request, Response} from 'express';
import userModel from '../models/userSchema';
import isCorrectPassword from '../utils/isCorrectPassword';
import {generateJWT} from '../utils/jwt';

const LoginHandler = async (req: Request, res: Response) => {
  if (!req.body)
    res.status(400).send(new Error('Dud you forget the body FUCK OFF!!'));

  const {email, password} = req.body;

  if (!email || !password) {
    res.status(400).send({error: 'Email and password are required!'});
    return;
  }

  try {
    const user = await userModel.findOne({email, active: true});

    if (!user) {
      res.status(400).send({error: 'Email not found or invalid or inactive'});
      return;
    }

    if (isCorrectPassword(password, user.password)) {
      const tokens = generateJWT(user);

      res.cookie('accessToken', tokens.accessToken, {
        maxAge: tokens.accessTokenExpire,
        httpOnly: true,
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: tokens.refreshTokenExpire,
        httpOnly: true,
      });

      res.status(200).send({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } else {
      res.status(401).send({error: 'UNAUTHORIZED'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default LoginHandler;
