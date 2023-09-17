const express = require('express');

const filtrirajPretraguController = require('./../controllers/filtrirajPretragu_controller');
const filtrirajPretraguRouter = express.Router();


filtrirajPretraguRouter.route('/')
                      .get(filtrirajPretraguController.getAutoByFilter);


module.exports=filtrirajPretraguRouter;