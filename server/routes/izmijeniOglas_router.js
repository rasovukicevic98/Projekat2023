const express = require('express');

const izmijeniOglasController = require('./../controllers/izmijeniOglas_controller');
const izmijeniOglasRouter = express.Router();


izmijeniOglasRouter.route('/')
                      .put(izmijeniOglasController.updateOglas);



module.exports=izmijeniOglasRouter;