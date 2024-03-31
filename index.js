const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cred'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

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
    const { username, password, fullname, email } = req.body;
    const query = 'insert into test values (?,?,?,?)';
    db.query(query, [username, password, fullname, email], (err, result) => {
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

app.post('/contactus', (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body;
    const query = 'insert into contact_form_info values (?,?,?,?,?)';
    db.query(query, [firstname, lastname, email, phone, message], (err, result) => {
        if (err) {
            res.status(500).send('Error while fetching user');
            return;
        }
        if (result.length === 0) {
            res.status(401).send('enter something');
        } else {
            // res.status(200).send('Login successful');
            res.redirect('./thankyou.html');
        }
    });
});

app.post('/feedback', (req, res) => {
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, comment } = req.body;
    const query = 'insert into feedback_form values (?,?,?,?,?,?,?,?,?,?,?)';
    db.query(query, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, comment], (err, result) => {
        if (err) {
            res.status(500).send('Error while fetching user');
            return;
        }
        if (result.length === 0) {
            res.status(401).send('enter something');
        } else {
            // res.status(200).send('Login successful');
            res.redirect('./thankyou.html');
        }
    });
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
