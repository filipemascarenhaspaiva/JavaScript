const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

const jogos = [
    {
        id: 1,
        nome: "Dark Souls",
        imagemURL: "https: //upload.wikimedia.org/wikipedia/en/thumb/2/26/Cover_art_for_the_first_Dark_Souls_comic.jpg/200px-Cover_art_for_the_first_Dark_Souls_comic.jpg",
    },
    {
        id: 2,
        nome: "Silent Hill 2",
        imagemURL: "https://images-na.ssl-images-amazon.com/images/I/71uW5xVO5%2BL._AC_SL1200_.jpg",
    },
    {
        id: 3,
        nome: "Shadow of the colosus",
        imagemURL: "https://upload.wikimedia.org/wikipedia/pt/6/66/ShadowOfTheColossusGH.jpg",
    },
    {
        id: 4,
        nome: "Devil May Cry 3",
        imagemURL: "https://switch-brasil.com/wp-content/uploads/2019/11/B053B258-FA2F-4C90-8E41-E0CD111AA1A1.jpeg",
    },
    {
        id: 5,
        nome: "God of War(2018)",
        imagemURL: "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
    },
    {
        id: 6,
        nome: "Principe da Persia - Warrior Within",
        imagemURL: "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw59f81f00/images/large/575ffda7a3be1633568b4e08.jpg?sw=341&sh=450&sm=fit",
    },
    {
        id: 7,
        nome: "Hitman - Blood Money",
        imagemURL: "data:image/jpeg;base64,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",
    },
    {
        id: 8,
        nome: "The Last of Us - Parte 2",
        imagemURL: "https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png",
    },
    {
        id: 9,
        nome: "Resident Evil 4",
        imagemURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREl4-gfWVhEE9WWrpDypXKy083p_SONrfNFPlk8XzXGxsFLiKXJBU7jVAVibZ0IScuvsw&usqp=CAU",
    },
    {
        id: 10,
        nome: "Metal Gear Solid 3 - Snake Eater",
        imagemURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV3H5NO_iwXIAOyY5BHY4w7RdxmLO7iA5WqVfTpLMuO2t8ZQf3b2uojDXrrfQwkrf8pI&usqp=CAU",
    }
];

const getJogosValidos = () => jogos.filter(Boolean);

const getJogoById = id => getJogosValidos().find(jogo => jogo.id === id); 

const getJogoIndexById = id => getJogosValidos().findIndex(jogo => jogo.id === id)


app.get("/", (req, res) => {
  res.status(200).send({ hello: "Hello World Express" }); 
});


app.get("/jogos", (req, res) => {
  res.json({ jogos }); 
});

app.get("/jogos/:idJogo", (req, res) => {
  const id = +req.params.idJogo;
  const jogo = getJogoById(id)

  !jogo
    ? res.status(404).send({ error: "jogo n??o existe" })
    : res.json({ jogo });
});

app.post("/jogos", (req, res) => {
  const jogo = req.body;

  if (!jogo || !jogo.nome || !jogo.imagemURL) {
    res.status(400).send({ error: "jogo inv??lido!" });
    return;
  }

  const ultimoJogo = jogos[jogos.length - 1];

  console.log(jogos.length)

  if (jogos.length) { 
    jogo.id = ultimoJogo.id + 1;
    jogos.push(jogo); 
  } else {
    jogo.id = 1;
    jogos.push(jogo);
  }

  res.status(201).send({ jogo });
});

app.put("/jogos/:id", (req, res) => {
  const id = +req.params.id;

  const jogoIndex = getJogoIndexById(id)

  if (jogoIndex < 0) {
    res.status(404).send({error: "jogo n??o encontrado."});
    return;
  }

  const novojogo = req.body;

  if (!novojogo || !novojogo.nome || !novojogo.imagemURL) {
    res.status(400).send({ error: "jogo inv??lido!" });
    return;
  }

  const jogo = getJogoById(id)

  novojogo.id = jogo.id
  jogos[jogoIndex] = novojogo 

  res.send({ message: "jogo alterado com sucesso!"});
});

app.delete("/jogos/:id", (req, res) => {
  const id = +req.params.id;

  const jogoIndex = getJogoIndexById(id)
  if (jogoIndex < 0) {
    res.status(404).send({error: "jogo n??o encontrado."});
    return;
  }

  jogos.splice(jogoIndex, 1);

  res.send({ message: "jogo apagado com sucesso!"});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});