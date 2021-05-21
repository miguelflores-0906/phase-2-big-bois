const express = require('express');
const registerController = require('../controllers/registerController.js');

const app = express();

app.post('/register', registerController.postRegister);
