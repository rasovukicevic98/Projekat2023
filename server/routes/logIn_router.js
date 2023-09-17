const express = require('express');
const loginController = require('../controllers/logIn_controller');
const loginRouter = express.Router();

loginRouter.route('/')
                      .post(loginController.login);
loginRouter.route('/s').post(loginController.singup);


module.exports = loginRouter;