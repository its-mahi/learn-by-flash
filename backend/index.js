const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// configure dotenv file (credential specific file)
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());


// database connection

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'qwertyui',
//   database: 'flashcards'
// });

const db = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// connecting database
db.connect((error) => {
    if (error) {
        console.log("error occured while connecting to database : ", error);
    }
    else {
        console.log('MySQL Connected Successfully...');
    }
});


// fetching flashcard data
app.get('/api/flashcards', (req, res) => {
    db.query('select * from flashcards', (error, results) => {
        if (error) {
            console.log("error occured while fetching data : ", error);
        }
        res.json(results);
    });
});


// inserting new flashcard details
app.post('/api/flashcards', (req, res) => {
    const { question, answer } = req.body;

    db.query('insert into flashcards (question, answer) VALUES (?, ?)', [question, answer], (error) => {
        if (error) {
            console.log("error occured while inserting data : ", error);
        }
        else {
            console.log("data inserted successfully")
        }
        res.sendStatus(201);
    });
});


// updating flashcard details (specified by id)
app.put('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    db.query('update flashcards set question = ?, answer = ? where id = ?', [question, answer, id], (error) => {
        if (error) {
            console.log("error occured while updating data : ", error);
            res.sendStatus(500);
        }
        else {
            console.log("data updated successfully")
            res.sendStatus(200);
        }
    });
});


// delete selected flashcard (specified by id)
app.delete('/api/flashcards/:id', (req, res) => {
    const { id } = req.params;
    db.query('delete from flashcards where id = ?', [id], (error) => {
        if (error) {
            console.log("error occured while deleting data : ", error);
            res.sendStatus(500);
        }
        else {
            console.log("data deleted successfully")
            res.sendStatus(200);
        }
    });
});
  

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
