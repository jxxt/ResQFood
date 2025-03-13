const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    // Placeholder for login logic
    res.redirect('./welcome.html');
});

app.post('/signup', (req, res) => {
    // Placeholder for signup logic
    res.redirect('./welcome.html');
});

app.post('/contactus', (req, res) => {
    // Placeholder for contact form logic
    res.redirect('./thankyou.html');
});

app.post('/feedback', (req, res) => {
    // Placeholder for feedback form logic
    res.redirect('./thankyou.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
