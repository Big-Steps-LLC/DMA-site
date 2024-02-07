// Import required modules
require('dotenv').config();
const https = require('https');
const fs = require('fs');
const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(bodyParser.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const phrase = process.env.TEST;

// Load SSL/TLS certificate and private key
const privateKeyPath = './certs/private-key.pem';
const certificatePath = './certs/certificate.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  passphrase: phrase 
};

// Define routes
app.post('/send-email', async (req, res) => {
    const formData = req.body;
    const htmlBody = `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Subject: ${formData.subject}</p>
      <p>Message: ${formData.message}</p>
    `;
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

// Define port for HTTPS server
const httpsPort = process.env.HTTPS_PORT || 443;

// Start HTTPS server
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS server is running on port ${httpsPort}`);
});
