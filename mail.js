const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.Server(app);
const port = 3000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routing 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/send_email", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'senabrisa97@gmail.com',
            pass: 'qeip jwes ivdp jnyb'
        }
    });

    const userMailOptions = {
        from: 'senabrisa97@gmail.com', // Sender address
        to: email, 
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(userMailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/?message=Email failed to send. Please try again.');
        } else {
            console.log("Email sent: " + info.response);
            res.redirect('/?message=Email sent successfully.');
        }
        
    });

    // Email to the owner
    const ownerMailOptions = {
        from: 'senabrisa97@gmail.com',
        to: 'senabrisa97@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(ownerMailOptions, function (error, info) {
        if (error) {
            console.log('Error sending to owner:', error);
        } else {
            console.log("Owner email sent: " + info.response);
        }
    });
});

// Initialize Web server
server.listen(port, function () {
    console.log("Starting Server on port: " + port);
});
