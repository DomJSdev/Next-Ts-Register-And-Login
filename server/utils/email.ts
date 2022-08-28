import nodemailer from 'nodemailer';
import {
  SENDINBLUE_MASTER_KEY,
  SENDINBLUE_SMTP_SERVER,
  SENDINBLUE_MASTER_PORT,
  EMAIL_ADRESS,
} from '../config/environment';

const smtpTransport = nodemailer.createTransport({
  host: SENDINBLUE_SMTP_SERVER,
  port: Number(SENDINBLUE_MASTER_PORT),
  auth: {
    user: EMAIL_ADRESS,
    pass: SENDINBLUE_MASTER_KEY,
  },
});

const sendEmailToCustomer = async (
  token: string,
  customerEmailAdress: string,
  subjectMessage: string,
  domain: string
) => {
  let sendResult = await smtpTransport.sendMail({
    from: EMAIL_ADRESS,
    to: customerEmailAdress,
    subject: subjectMessage,
    html: `
    <div>
    <h3>Reset password</h3>
    <p>please click on the link to reset your password</p>
    <a href="${domain}${token}">RESET</a> 
    <a href=${domain}${token}>Reset</a> 
    </div>`,
  });
  console.log(sendResult);
};

export default sendEmailToCustomer;
