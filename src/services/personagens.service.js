const personagens = [
  {
    id: 1,
    nome: "Reinhard von Lohengramm",
    idade: 25,
    foto: "https://yt3.ggpht.com/ytc/AKedOLQuIF0W7mJBV0myfG719tOiRyBnZuIl9pX2NtVb=s900-c-k-c0x00ffffff-no-rj",
    resumo: "Império Galáctico",
  },
  {
    id: 2,
    nome: "Yang Wen-Li",
    idade: 33,
    foto: "https://i.pinimg.com/originals/94/21/0f/94210f890735a571079ce9d52a4f2999.jpg",
    resumo: "Aliança dos Planetas Livres",
  },
  {
    id: 3,
    nome: "Siegfried Kircheis",
    idade: 22,
    foto: "https://static.wikia.nocookie.net/yang-wenli/images/d/de/Kircheis.png/revision/latest?cb=20101014071830",
    resumo: "Império Galáctico",
  },
  {
    id: 4,
    nome: "Julian Mintz",
    idade: 18,
    foto: "https://static.wikia.nocookie.net/yang-wenli/images/5/5c/Julian_3.png/revision/latest?cb=20101017224430",
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
