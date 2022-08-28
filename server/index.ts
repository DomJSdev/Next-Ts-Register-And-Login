import next from 'next';
import {
  SERVER_ALLOWED_ORIGIN,
  IS_PROD,
  SERVER_PORT,
  HOST_NAME,
} from './config/environment';
import express from 'express';
// import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import dbConnect from './utils/mongodbConnect';
import RegisterHandler from './controlers/RegisterHandler';
import LoginHandler from './controlers/LoginHandler';
import ForgotPasswordHandler from './controlers/ForgotPasswordHandler';
import ResetPasswordHandler from './controlers/ResetPasswordHandler';


const nextApp = next({
  dev: !IS_PROD,
  hostname: HOST_NAME,
  port: SERVER_PORT,
});
const handler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  await dbConnect();

  const server = express();

  //   server.use(
  //     cors({
  //       origin: (origin, callback) => {
  //         if (!origin || SERVER_ALLOWED_ORIGIN === origin) {
  //           callback(null, true);
  //           return;
  //         }
  //         const error = new Error('NOT ALLOWED BY CORS');
  //         callback(error);
  //       },
  //       credentials: true,
  //     })
  //   );

  server.use(cookieParser());
  server.use(express.json());
  server.use(express.urlencoded({extended: true}));

  server.post('/api/register', RegisterHandler);
  server.post('/api/login', LoginHandler);
  server.post('/api/forgot-password', ForgotPasswordHandler);
  server.post('/api/reset-password', ResetPasswordHandler);

  server.all('*', (req, res) => {
    return handler(req, res);
  });
  const httpServer = http.createServer(server);

  httpServer.listen(SERVER_PORT, () => {
    console.log(`http://localhost:${SERVER_PORT}`);
  });
});
