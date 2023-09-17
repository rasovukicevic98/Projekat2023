const express = require('express');

const modelController = require('./../controllers/model_controller');
const modelRouter = express.Router();


modelRouter.route('/')
                      .get(modelController.getAllModels);

modelRouter.route('/:imep')
                      .get(modelController.getModelByPro);

module.exports=modelRouter;