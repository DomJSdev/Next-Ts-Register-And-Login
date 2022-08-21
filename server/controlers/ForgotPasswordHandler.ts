import {Request, Response} from 'express';
import {DOMAIN} from '../config/environment';
import userModel from '../models/userSchema';
import {generateForgotPasswordJWT} from '../utils/jwt';

const ForgotPasswordHandler = async (req: Request, res: Response) => {
  if (!req.body) res.status(400).send(new Error('Email field required'));

  const {email} = req.body;

  const user = await userModel.findOne({email});

  if (!user) {
    res.status(404).send({error: 'The input email not registered'});
    return;
  }

  const jwt = generateForgotPasswordJWT(user);
  console.log(
    'Forgot password url (That can be found in email): ',
    `${DOMAIN}reset-password?token=${jwt}`
  );

  /**
   * We should send an email with a link for reset password page including the param of jwt.
   * Because we don't have mail server, we only log it in the console.
   */

  res.send({
    message:
      'We will send you an email with the registered email. Please follow the instruction their.',
  });
};

export default ForgotPasswordHandler;
