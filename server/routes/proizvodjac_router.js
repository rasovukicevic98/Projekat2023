const express = require('express');

const proizvodjacController = require('./../controllers/proizvodjac_controller');
const proizvodjacRouter = express.Router();

proizvodjacRouter.route('/')
                      .get(proizvodjacController.getAllPro);

                      
module.exports=proizvodjacRouter;