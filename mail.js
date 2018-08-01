const nodemailer = require('nodemailer');

let sendMail = function(from, mail, text){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'XXXXX',
          pass: 'XXXXX'
        }
      });
      
    let mailOptions = {
        from: from,
        to: 'pomelodev@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'text'
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
};

module.exports = sendMail;

