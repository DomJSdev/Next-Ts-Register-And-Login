const IS_PROD = process.env.NODE_ENV === 'production';
const SERVER_PORT = 5500;
const HOST_NAME = 'localhost';
const SERVER_ALLOWED_ORIGIN = `http://localhost:5000`;

export default {IS_PROD, SERVER_PORT, SERVER_ALLOWED_ORIGIN, HOST_NAME};
