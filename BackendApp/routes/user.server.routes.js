var express = require('express');
var UsersController = require('../controllers/users.server.controller');
var router = express.Router();

  router.get('/user', UsersController.list)
  router.post('/user', UsersController.create);

  router.get('/user/:nid')
    .get(UsersController.get);

  router.param('nid', UsersController.getById);

module.exports = router;
