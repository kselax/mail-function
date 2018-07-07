const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  tls: { rejectUnauthorized: false },
  // host: 'localhost', // default is localhost
  // port: 25,
  // secure: false,
  // // auth: {
  // //   neo: 'neo@neo.ru',
  // //   pass: 'ninja234'
  // // }
});

function mail(from, to, subject, html, fn){

  let mailOptions = {
    from: from,//'american-chat.ru <american-chat@kselax.ru>'
    to: to,// neo@neo.ru
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(fn){
      fn(error, info);
    }
  });
}

module.exports = mail;
