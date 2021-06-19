const express = require('express');
const parseController = require('../controllers/parseController.js');
const ordersController = require('../controllers/ordersController.js');
const parseRouter = express.Router();

parseRouter.post('/parse', parseController.parse);
parseRouter.post('/getorders', ordersController.getorders);
// parseRouter.post('/parse', parseController.parse);
// parseRouter.post('/details', parseController.details);
// parseRouter.get('/', homeController.index);

module.exports = parseRouter;
