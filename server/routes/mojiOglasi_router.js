const express = require('express');

const mojiOglasiController = require('./../controllers/mojiOglasi_controller');
const mojiOglasiRouter = express.Router();


mojiOglasiRouter.route('/:ida')
                      .get(mojiOglasiController.getOglasi);
mojiOglasiRouter.route('/:id')
                      .delete(mojiOglasiController.deleteAuto);
 mojiOglasiRouter.route('/ogg/:id')
                      .delete(mojiOglasiController.deleteOglas);


module.exports=mojiOglasiRouter;