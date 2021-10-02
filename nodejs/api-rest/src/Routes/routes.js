const { Router } = require('express');
const mainController = require('../Controllers/mainController');
const routes = new Router();

routes.get('/', mainController.main);
routes.post('/', mainController.receive);

module.exports = routes;