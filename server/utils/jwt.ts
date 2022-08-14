import {UserModel} from '../models/userSchema';
import {sign} from 'jsonwebtoken';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {NEXT_APP_PHRASE_KEY} from '../config/environment';

/**
 * Generate OpenSSL keys @see https://rietta.com/blog/openssl-generating-rsa-key-from-command/
 */

const PRIVATE_KEY: string = readFileSync(
  resolve(`./server/keys/private.pem`),
  'utf8'
);
const PUBLIC_KEY: string = readFileSync(
  resolve(`./server/keys/public.pem`),
  'utf8'
);

const generateJWT = (user: UserModel) => {
  const accessTokenExpire = 15 * 60 * 1000;

  const refreshTokenExpire = 24 * 60 * 60 * 1000 * 7;

  const accessToken = sign(
    {
      data: {
        userId: user._id.toString(),
      },
    },
    {key: PRIVATE_KEY, passphrase: NEXT_APP_PHRASE_KEY},
    {
      algorithm: 'RS256',
      expiresIn: '20m',
      issuer: 'localhost',
    }
  );

  const refreshToken = sign(
    {
      data: {
        userId: user._id.toString(),
      },
    },
    {key: PRIVATE_KEY, passphrase: NEXT_APP_PHRASE_KEY},
    {
      algorithm: 'RS256',
      expiresIn: '7d',
      issuer: 'localhost',
    }
  );

  return {
    accessToken,
    refreshToken,
    accessTokenExpire,
    refreshTokenExpire,
  };
};

export default generateJWT;
