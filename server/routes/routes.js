const express = require('express');

const controller = require('../controllers/controller.js');

const registerController = require('../controllers/registerController.js');

const loginController = require('../controllers/loginController.js');

const app = express();

app.post('/register', registerController.postRegister);

app.post('/login', loginController.postLogin);






module.exports = app;

