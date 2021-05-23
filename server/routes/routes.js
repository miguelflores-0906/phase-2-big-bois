
const express = require('express');
const cors = require('cors');
const controller = require('../controllers/controller.js');
const bodyParser = require('body-parser');

const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const postController = require('../controllers/postController.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.post('/register', registerController.postRegister);

app.post('/login', loginController.postLogin);

app.post("/checkUser", registerController.postCheckUser);

app.post("/newPost", postController.newPost);






module.exports = app;

