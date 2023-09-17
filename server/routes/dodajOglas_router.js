const express = require('express');

const dodajOglasController = require('./../controllers/dodajOglas_controller');
const dodajOglasRouter = express.Router();


dodajOglasRouter.route('/')
                      .post(dodajOglasController.insertInstance);
dodajOglasRouter.route('/dodaj/oglas')
                      .post(dodajOglasController.insertOglas);

module.exports=dodajOglasRouter;