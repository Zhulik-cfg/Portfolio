const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Files (Frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Explicit Routes for HTML pages (clean URLs)
app.get('/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'price.html'));
});

// API Routes
app.post('/api/contact', (req, res) => {
    const { name, phone } = req.body;

    // Log the received data
    console.log('New Contact Request:', { name, phone, timestamp: new Date() });

    // In a real app, you would save this to a database or send an email here.
    // For now, we'll append it to a local log file.
    const logEntry = `${new Date().toISOString()} - Name: ${name}, Phone: ${phone}\n`;

    fs.appendFile('contact_requests.log', logEntry, (err) => {
        if (err) {
            console.error('Error saving to log file:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.json({ success: true, message: 'Request received successfully!' });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
