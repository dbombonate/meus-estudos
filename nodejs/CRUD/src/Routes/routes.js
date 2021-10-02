const { Router } = require('express');
const clientesController = require('../Controllers/clientesController');
const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ message: "API de Clientes e Pedidos"})
});

routes.post('/cliente', clientesController.new);
routes.get('/clientes', clientesController.list);

module.exports = routes;