import {Request, Response, NextFunction} from 'express';
import {decodeJWT} from '../utils/jwt';

const AuthMiddleware =
  () => (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies?.accessToken;

    const result = decodeJWT(accessToken);

    if (!(result instanceof Error)) {
      req.user = result.data;
    }

    next();
  };

export default AuthMiddleware;
