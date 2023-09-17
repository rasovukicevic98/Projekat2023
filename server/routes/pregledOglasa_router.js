const express = require('express');

const pregledOglasaController = require('./../controllers/pregledOglasa_controller');
const pregledOglasaRouter = express.Router();


pregledOglasaRouter.route('/')
                      .get(pregledOglasaController.getAuto);

pregledOglasaRouter.route('/:id')
                      .get(pregledOglasaController.getNumber);



module.exports=pregledOglasaRouter;