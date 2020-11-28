var express = require('express');
var router = express.Router();
const userController =require('../controllers/user.controller')



  router.get('/users',userController.list);
  
  router.get('/users/:id',userController.listUser);
  
  router.post('/add', userController.add);
  
  router.put('/update/:id', userController.update);
  
  router.delete('/delete/:id', userController.delete);
  
  // Check connect
  

  module.exports = router;
