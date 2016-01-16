var express = require('express');
var UsersController = require('../controllers/users.server.controller');
var router = express.Router();

  router.get('/user', UsersController.list)
  router.post('/user', UsersController.create);
  router.post('/login', UsersController.userLogin);

  router.get('/user/:nid',UsersController.getByUserId);

module.exports = router;
