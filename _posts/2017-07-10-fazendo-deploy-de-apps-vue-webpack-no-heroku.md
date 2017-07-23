---
title: Fazendo deploy de apps Vue + Webpack no Heroku
layout: post
date: '2017-07-10'
description: O jeito mais fácil que encontrei de rodar meus apps vue no heroku.
tags:
- vuejs
- javascript
- heroku
comments: true
share: true
---

Fala pessoalzinho, bele? Espero que sim!

Faz um tempão que não passo por aqui, como sempre minha vida não é muito calma então dificulta bastante escrever, mas enfim, é uma coisa que eu gosto muito de fazer e cá estou outra vez ;D

Hoje vou trazer pra vocês um tutorial de como fazer o deploy de seus apps feitos com vue-cli pro Heroku. Estava querendo subir uns estudos meus pra disponibilizar lá e de começo não sabia como fazer, após umas pesquisas e tentativas tive sucesso e decidi fazer um passo-a-passo, pois até hoje não vi nenhum post sobre isso em português, certo então vamos lá!

De exemplo vou utilizar um app que fiz para consumir a API da NASA e retornar imagens com uma busca, caso queiram utilizar ele para teste aqui está o link do github, só clonar:

[https://github.com/juliocarneiro/nasa-search-vue.git](https://github.com/juliocarneiro/nasa-search-vue.git)

## Fazendo o Build

Vamos primeiro fazer o build do nosso app:

```bash
$ npm run build
```

Ao rodar o build vemos que o Webpack cria varios arquivos js na pasta “dist” com um único arquivo index.html, que pode ser rodado usando um servidor web.

## Criando arquivos de compilação

Esses passos são necessários para que a Heroku saiba como servir seus ativos estáticos sempre que dermos um push para o repo remoto. Adicione o postinstall e ganchos de início à sua seção de scripts no package.json (pasta raiz do app).

```javascript
"postinstall": "npm run build",
"start": "node server.js"
```

Após feito isso, vamos criar um arquivo “server.js” na pasta raiz do app e escrever um script para fazer o servidor express rodar na pasta “dist”, com isso quando a aplicação iniciar no Heroku, vai rodar também nosso servidor (caso não tenha instalado o express como dependência pode fazer isso com o comando “npm install express — save” na pasta raiz do projeto):

```javascript
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
```

## Configure o Heroku para instalar as dependências do dev

Esta etapa é essencial para que os pacotes necessários sejam instalados e executados na compilação do app no Heroku, uma vez que todos os pacotes necessários foram colocados em devDependencies quando o aplicativo foi gerado.

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

A alternativa para este passo seria mover todas as “devDependencies” para “dependencies”.

## Subindo os arquivos no Heroku

Basicamente o que fizemos até agora foi criar um servidor com o express e direcionar a pasta “dist” como raiz do app, fazendo com que esse server rode no heroku logo ao fazermos o deploy.

Atualização 11/07/07: Lembrando que precisamos tirar a pasta “dist” do arquivo .gitignore para funcionar, caso contrário não vai adiantar fazermos tudo isso.

Agora é a parte que vamos fazer o deploy do app para o heroku, vamos começar entrando na pasta raiz do projeto e logando no heroku, depois vamos criar um projeto onde vamos fazer o deploy, veja:

```bash
$ heroku login
Enter your Heroku credentials:
Email: seuemail@gmail.com
Password: *******
$ heroku create nasa-search-vue
Creating nasa-search-vue... done
https://nasa-search-vue.herokuapp.com/ | https://git.heroku.com/nasa-search-vue.git
```

Agora vamos conectar nosso projeto local ao projeto remoto:

```bash
$ heroku git:remote -a nasa-search-vue
```

Feito isso vamos adicionar os arquivos ao repo, commitar e subir pra master:

```bash
$ git add .
$ git commit -m "Projeto API NASA VueJS"
$ git push heroku master
```

Pronto! Só esperar rodar e ver o resultado, o meu foi esse aqui:
[http://nasa-search-vue.herokuapp.com](http://nasa-search-vue.herokuapp.com)