import nodemailer from "nodemailer";
import htmlToText from "html-to-text";
import  { configDynaEmail } from "../config/config";

export const  sendEmail = async (options) =>{
let dynamicEmail =  await configDynaEmail();
  new Promise((resolve, reject) => {
    
    const transpoter = nodemailer.createTransport({

      service: dynamicEmail.SERVICE,
      auth: {
        user: dynamicEmail.USER,
        pass: dynamicEmail.USERPASSWORD,
      },
    });
    const text = htmlToText.fromString(options.html, {
      wordwrap: 130,
    });

    

    const mailOptions = {
      from: dynamicEmail.FROM, 
      to: options.email,
      subject: options.subject,
      text,
      html: options.html,
    };
    transpoter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      return resolve(info);
    });
  });
}
