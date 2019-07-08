require('dotenv').config()
const result = require('dotenv').config()
const nodemailer = require('nodemailer');


export async function handler(event, context, callback){
  const { user, pass} = process.env
    const min = 10000;
    const max = 99999;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass
      }
    });

    const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: 'no-reply',
      to: email, 
      subject: 'Verification Code',
      text: `${num}`,
  };

try{
  let value = await transport.sendMail(mailOptions);
  return {
    statusCode: 200,
    body: 'Success'
  }
}catch(err){
  return {
    statusCode: 400,
    body: 'Failure'
  };
}

}