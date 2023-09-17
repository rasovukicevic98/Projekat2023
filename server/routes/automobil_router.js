const express = require('express');

const automobilController = require('./../controllers/automobil_controller');
const automobilRouter = express.Router();


automobilRouter.route('/')
                      .get(automobilController.getAllAuto);

automobilRouter.route('/pro/:imep/:imem/:odC/:doC')
                      .get(automobilController.getAutoByFilter);

 automobilRouter.route('/:id')
                      .get(automobilController.getAutoByID);
 automobilRouter.route('/getmax/gett')
                      .get(automobilController.getMaxID);

module.exports=automobilRouter;