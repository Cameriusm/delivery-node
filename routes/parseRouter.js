const express = require('express');
const parseController = require('../controllers/parseController.js');
const parseRouter = express.Router();

parseRouter.post('/parse', parseController.parse);
// parseRouter.get('/', homeController.index);

module.exports = parseRouter;
