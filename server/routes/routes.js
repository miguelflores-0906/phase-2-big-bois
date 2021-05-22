const express = require('express');

const controller = require('../controllers/controller.js');

const registerController = require('../controllers/registerController.js');

const app = express();

app.post('/register', registerController.postRegister);






module.exports = app;

