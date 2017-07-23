---
title: Criando servidor http com Express.js - Parte 1
layout: post
date: '2016-05-26'
description: Configuração básica para criação de um server HTTP usando o Express.
tags:
- http
- servidor express
- express
comments: true
share: true
---

Fala pessoal beleza? Hoje vou abordar a instalação do Express.js junto a configuração de um server básico utilizando ele, caso você queira uma introdução de como criar um servidor básico com o Node.js clique aqui e vá para outro post. Vou escrever este post em duas partes senão ele vai ficar muito extenso e provavelmente você não vá ter paciência para lê-lo.

O Express é um framework para rotas e views muito poderoso, e um dos mais utilizados no Node. Para instalar o Express.js é bem fácil, você só vai precisar digitar o comando abaixo:

```bash
npm install -g express
```

Neste comando estamos instalando o Express.js globalmente em nossa maquina, agora vamos criar uma pasta para o nosso express, iniciar o npm e instalar ele como dependência:

```bash
mkdir servidor
cd servidor
npm init
npm install express --save
```

Agora vamos criar um arquivo.js para ser o arquivo de configuração do nosso server. Após criado o arquivo vamos criar um pequeno “Hello World” com o Express. A primeira coisa que vamos fazer é chamar o Express e criar um app no arquivo js, veja:

```javascript
var express = require('express');
var app = express();
```

Depois disso vamos criar uma rota básica para o diretório raiz:

```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

Nossa função chama o “app.get()” que representa o GET do HTTP, junto ao “/” que representa minha pasta raiz, seguido da função de callback.

Os objetos “req” e “res” são os mesmos objetos que o node te dá, assim você pode chamar “res.pipe()”, “req.on(‘data’, callback)” ou qualquer outra coisa que você quiser fazer sem envolver o Express.

Vamos criar um listener para nosso servidor, setando a porta e fazendo ele rodar:

```javascript
app.listen(3000, function () {
  console.log('Servidor rodando em http://localhost:3000');
});
```

Para fazer nosso servidor rodar basta digitar “node arquivo.js” que ele vai startar com a mensagem “Servidor rodando em http://localhost:3000”, isso significa que seu server está online, você pode visitar a URL pelo navegador e ver o resultado!

No outro post vamos abordar algumas features mais avançadas, esta foi uma introdução bem básica, os exemplos usados estão na documentação do Express.js que pode ser acessada em:

[http://expressjs.com/en/starter/hello-world.html](http://expressjs.com/en/starter/hello-world.html)

Espero que tenham curtido! Te vejo no próximo post, abraços.