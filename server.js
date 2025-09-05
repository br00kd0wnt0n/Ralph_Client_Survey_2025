const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the main survey page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        service: 'Ralph Client Survey',
        timestamp: new Date().toISOString()
    });
});

// Optional: API endpoint to serve survey data if needed
app.get('/api/survey', (req, res) => {
    res.json({
        title: 'Ralph Client Survey',
        description: 'We value your honest feedback',
        status: 'active'
    });
});

// Handle 404s
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: 'Please try again later.'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Ralph Client Survey is running on port ${PORT}`);
    console.log(`📊 Survey available at: http://localhost:${PORT}`);
});

module.exports = app;