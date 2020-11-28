const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;
var router = require('./routes/users');
var cors = require('cors')


const app = express();
app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());
app.use('/api', router);

// MySql


// Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// all customers


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
