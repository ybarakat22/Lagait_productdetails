const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_API_KEY');
const msg = {
    to: 'youssrbarakat22@gmail.com',
    from: 'ybarakat@identity-solutions.com',
    subject: 'Hello from SendGrid',
    text: 'This is a test email sent using SendGrid.',
  };
  
  sgMail.send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
  