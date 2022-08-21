import {loadEnvConfig} from '@next/env';
loadEnvConfig('./', process.env.NODE_ENV !== 'production');

const IS_PROD = process.env.NODE_ENV === 'production';
const SERVER_PORT = 5500;
const HOST_NAME = 'localhost';
const DOMAIN = IS_PROD
  ? 'https://your.real_server_domain.com/'
  : `http://localhost:${SERVER_PORT}/`;
const SERVER_ALLOWED_ORIGIN = `http://localhost:5000`;

// Used for JWT
const NEXT_APP_PHRASE_KEY = process.env.NEXT_APP_PHRASE_KEY;

const MONGODB_URL = process.env.NEXT_APP_MONGO_URL || '';

export {
  IS_PROD,
  SERVER_PORT,
  SERVER_ALLOWED_ORIGIN,
  HOST_NAME,
  DOMAIN,
  NEXT_APP_PHRASE_KEY,
  MONGODB_URL,
};
