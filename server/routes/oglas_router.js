const express = require('express');

const oglasController = require('./../controllers/oglas_controller');
const oglasRouter = express.Router();


oglasRouter.route('/')
                      .get(oglasController.getAllOglas);

oglasRouter.route('/o/:category')
                      .get(oglasController.getCategoryOglas);

module.exports=oglasRouter;