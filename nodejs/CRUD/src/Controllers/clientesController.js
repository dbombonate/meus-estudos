class ClientesController{

  new(req, res){
    res.send(req.body);
  }

  list(req, res){
    res.send({
      message: "Lista de Clientes"
    });
  }
};

const clientesController = new ClientesController();

module.exports = clientesController;