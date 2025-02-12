const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; 

// Home route (GET request)
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the First Server Page I have created');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Contact us at sarkarmayukh8582@gmail.com');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
