const personagens = [
  {
    id: 1,
    nome: "Reinhard von Lohengramm",
    idade: 25,
    foto: "link da foto",
    resumo: "Império Galáctico",
  },
  {
    id: 2,
    nome: "Yang Wen-Li",
    idade: 33,
    foto: "link da foto",
    resumo: "Aliança dos Planetas Livres",
  },
  {
    id: 3,
    nome: "Siegfried Kircheis",
    idade: 22,
    foto: "link da foto",
    resumo: "Império Galáctico",
  },
  {
    id: 4,
    nome: "Julian Mintz",
    idade: 18,
    foto: "link da foto",
    resumo: "Aliança dos Planetas Livres",
  },
];

const findPersonagensService = () => {
  return personagens;
};

const findPersonagemByIdService = (id) => {
  return personagens.find((personagem) => personagem.id == id);
};

const findPersonagemByIdadeService = (valor) => {
  return personagens.filter((personagem) => personagem.idade <= idade);
};
const addPersonagemService = (personagem) => {
  personagens.push(personagens);
  return "ok";
};

const updatePersonagemService = (id, personagemEdited) => {
  personagemEdited["id"] = id;
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id
  );
  personagens[personagemIndex] = personagemEdited;
  return personagemEdited;
};

const deletePersonagemService = (id) => {
  const personagemIndex = personagens.findIndex(
    (personagem) => personagem.id == id
  );
  return personagens.splice(personagemIndex, 1);
};

module.exports = {
  findPersonagensService,
  findPersonagemByIdService,
  findPersonagemByIdadeService,
  addPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
