// Import required modules
require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(bodyParser.json());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define routes
app.post('/send-email', async (req, res) => {
    console.log("api has been hit");
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

// Define port for HTTP server
const httpPort = process.env.HTTP_PORT || 8080;

// Start HTTP server
const httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
    console.log(`HTTP server is running on port ${httpPort}`);
});

