const personagensService = require("../services/personagens.service");

const homePersonagemController = (req, res) => {
  res.send("home personagens");
};

const findPersonagensController = (req, res) => {
  const allPersonagens = personagensService.findPersonagensService();
  res.send(allPersonagens);
};

const findPersonagemByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem =
    personagensService.findPersonagemByIdService(idParam);
  res.send(chosenPersonagem);
};

const findPersonagemByIdadeController = (req, res) => {
  const idadeParam = req.params.idade;
  const chosenPersonagens =
    personagensService.findPersonagemByIdadeService(idadeParam);
  res.send(chosenPersonagens);
};

const addPersonagemController = (req, res) => {
  let retorno;

  if (req.body.id) {
    retorno = personagensService.addPersonagemService(req.body);
  } else {
    res.send({ erro: "id é obrigatório" });
  }
  if (retorno == "ok") {
    res.send({ message: "personagem cadastrado com sucesso" });
  } else {
    res.send("erro: personagem nao foi cadastrado com sucesso");
  }
};

const updatePersonagemController = (req, res) => {
  const idParam = +req.params.id;
  const personagemEdit = req.body;
  const updatedPersonagem = personagensService.updatePersonagemService(
    idParam,
    personagemEdit
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = req.params.id;
  personagensService.deletePersonagemService(idParam);
  res.send({ message: "Personagem deletado com sucesso!!" });
};

module.exports = {
  homePersonagemController,
  findPersonagensController,
  findPersonagemByIdController,
  findPersonagemByIdadeController,
  addPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
