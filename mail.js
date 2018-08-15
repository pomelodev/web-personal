const nodemailer = require('nodemailer');
require('dotenv').config();

let sendMail = function (from, mail, text) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  let mailOptions = {
    from: from,
    to: 'pomelodev@gmail.com',
    subject: 'Mail de ' + from,
    text: 'Nombre: ' + from + "\nEmail: " + mail + "\nConsulta: " + text
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendMail;

