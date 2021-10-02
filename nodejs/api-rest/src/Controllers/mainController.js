class MainController {
  
  main(req, res){
    return res.send({
      message: "Hello World!"
    });
  }

  receive(req, res){
    const {comp, larg} = req.body;

    if(comp.isNaN || larg.isNaN){
      return res.send({
        message: `Tipo do dado comp: ${typeof(comp)}`
      })
    }

    const area = comp * larg;
    const perimetro = (comp + larg) * 2;

    return res.send({
      areaCalculada: area,
      perimetroCalculado: perimetro
    });
  }
};

const mainController = new MainController();

module.exports = mainController;