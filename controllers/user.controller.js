var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11111',
    database: 'nodecrud'
  });
const controller = {};

controller.list = (req, res) => {
    const sql = 'SELECT * FROM users';
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
};

controller.listUser= (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send('Not result');
      }
    });
  }

  controller.add=(req, res) => {
    const sql = 'INSERT INTO users SET ?';
  
    const customerObj = {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
  
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.json({
        'status': 'User saved'
    });   
   });
  }

  controller.update=(req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    const sql = `UPDATE users SET firstname = '${firstname}', lastname='${lastname}' WHERE id =${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.json('User updated!');
    });
  }

  controller.delete=(req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.json({
        'status': 'User deleted'
    });   
    });
  }
  connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  });
module.exports = controller;