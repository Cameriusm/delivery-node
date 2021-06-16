const express = require('express');
const parseController = require('../controllers/parseController.js');
const parseRouter = express.Router();

parseRouter.post('/parse', parseController.parse);
// parseRouter.post('/parse', parseController.parse);
// parseRouter.post('/details', parseController.details);
// parseRouter.get('/', homeController.index);

module.exports = parseRouter;
