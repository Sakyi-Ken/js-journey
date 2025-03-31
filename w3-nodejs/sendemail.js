import {createTransport} from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'sakyiken7@gmail.com',
    pass: 'S.Kenny_@7'
  }
});

var mailOptions = {
  from: 'sakyiken7@gmail.com',
  to: 'sakyiemmanuel341@gmail.com, emmanuelsakyi341@gmail.com',
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: '<h1>Welcome</h1><p>Progressing with Nodejs</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 