// config/nodemailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use any email service
  auth: {
    user: 'hassan.hbmama@gmail.com',
    pass: 'HASSANBOUDRAA8@'
  }
});

module.exports = transporter;
