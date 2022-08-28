import {loadEnvConfig} from '@next/env';
loadEnvConfig('./', process.env.NODE_ENV !== 'production');

/*
if I run commando npm run build with IS_PROD = 'test' then it works 
but if 
IS_PROD = process.env.NODE_ENV === 'production';
error: webpack.js:255:23 Uncaught ReferenceError: R is not defined
*/
const IS_PROD = 'test'; //process.env.NODE_ENV === 'production';
const SERVER_PORT = 5500;
const HOST_NAME = 'localhost';
const DOMAIN = IS_PROD
  ? 'https://your.real_server_domain.com/'
  : `http://localhost:${SERVER_PORT}/`;
const SERVER_ALLOWED_ORIGIN = `http://localhost:5000`;

// Used for JWT
const NEXT_APP_PHRASE_KEY = process.env.NEXT_APP_PHRASE_KEY;

const MONGODB_URL = process.env.NEXT_APP_MONGO_URL || '';

// that is for the NODEMAILER
const SENDINBLUE_API_KEY = process.env.NEXT_APP_SENDINBLUE_API_KEY;
const SENDINBLUE_MASTER_KEY = process.env.NEXT_APP_SENDINBLUE_MASTER_KEY;
const SENDINBLUE_SMTP_SERVER = process.env.NEXT_APP_SENDINBLUE_SMTP_SERVER;
const SENDINBLUE_MASTER_PORT = process.env.NEXT_APP_SENDINBLUE_MASTER_PORT;
const EMAIL_ADRESS = process.env.NEXT_APP_EMAIL_ADRESS;

export {
  IS_PROD,
  SERVER_PORT,
  SERVER_ALLOWED_ORIGIN,
  HOST_NAME,
  DOMAIN,
  NEXT_APP_PHRASE_KEY,
  MONGODB_URL,
  SENDINBLUE_API_KEY,
  SENDINBLUE_MASTER_KEY,
  SENDINBLUE_SMTP_SERVER,
  SENDINBLUE_MASTER_PORT,
  EMAIL_ADRESS,
};
