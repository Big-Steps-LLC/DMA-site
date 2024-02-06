require('dotenv').config();

const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const key = process.env.SENDGRID_API_KEY;

app.use(express.json());

app.use(bodyParser.json());
sgMail.setApiKey(key);


  

app.post('/send-email', async (req, res) => {
    const formData = req.body;


    // Create an HTML template dynamically based on formData
    const htmlBody = `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Subject: ${formData.subject}</p>
      <p>Message: ${formData.message}</p>
    `;

    // Email data for sending
    const data = {
        to: 'bigstepllc1@gmail.com',
        from: 'bigstepllc1@gmail.com',
        subject: 'NEW CLIENT!!!!!',
        text: 'This is a plain text version of the email body.',
        html: htmlBody,
    };


    try {
        await sgMail.send(data);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
        res.status(500).json({ error: 'Error sending email' });
    }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
