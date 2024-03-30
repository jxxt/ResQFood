const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser'); // Import body-parser module

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cred'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root URL ("/") to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM test WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Error while fetching user');
            return;
        }
        if (result.length === 0) {
            res.status(401).send('Invalid username or password');
        } else {
            // res.status(200).send('Login successful');
            res.redirect('./welcome.html');
        }
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const query = 'insert into test values (?,?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Error while fetching user');
            return;
        }
        if (result.length === 0) {
            res.status(401).send('enter something');
        } else {
            // res.status(200).send('Login successful');
            res.redirect('./welcome.html');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
