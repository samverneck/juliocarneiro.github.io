---
layout: post
title: Seu primeiro servidor http com Node.js
date: '2016-05-24'
description: Passo-a-passo de como configurar um servidor básico com Node.js.
tags:
- http
- servidor
- nodejs
comments: true
share: true
---

Fala galera, beleza? Hoje vou escrever um artigo de como criar um servidor http básico com NodeJS. O Node é bastante eficiente na questão de criação de servidores web rápidos e com grande número de solicitações ao mesmo tempo, isso quer dizer que se você quiser aprender a criar aplicações web escaláveis você pode começar por aqui!

Primeiro vamos criar um arquivo “servidor.js” em branco para podermos trabalhar em cima dele.

O NodeJS nos fornece vários módulos principais, para nosso server iremos usar o módulo “http”. É um módulo simples, fácil de ser manipulado e muito poderoso.

## Carregando o módulo http

Como disse acima, o NodeJS tem módulos em seu núcleo para criar http/https servers, então temos que importar o módulo http para criarmos nosso servidor, e já setar a porta em que ele vai rodar, veja:

```javascript
var http =  require('http');
const PORT=8080;
```

Definindo a função do manipulador

Precisamos criar uma função que irá tratar as solicitações e responde-las conforme a navegação, será nossa função de entrada de dados, que pode ser manipulada conforme sua necessidade:

```javascript
function servidor(request, response){
    response.end('Funcionando!! Rodando em: ' + request.url);
}
```

## Novo objeto

Agora vamos criar um objeto http novo e depois pedir para ele escutar a porta que setamos lá em cima. O método “createServer” é usado para criar uma nova instância do servidor e leva a nossa função de manipulador como o argumento. Então chamamos um listener no objeto do servidor para inicia-lo:

```javascript
var server = http.createServer(servidor);

server.listen(PORT, function(){
    console.log("Servidor rodando em: http://localhost:%s", PORT);
});
```

## Adicionando o Dispatcher

Já que já temos a base em execução, é hora de implementar as funcionalidades. O servidor deve responder de forma diferente em cada caminho de URL, isso significa que precisaremos de um dispatcher.

Dispatcher é uma espécie de roteador que ajuda a chamar o código do manipulador desejado para cada caminho em particular. Vamos adicionar um dispatcher para o nosso servidor, primeiro vamos instalar um módulo dispatcher, neste caso o “httpdispatcher”. Há vários módulos disponíveis, porém vamos usar um básico para demonstrar como funciona, e para isso vamos usar o NPM:

```bash
npm install httpdispatcher
```

Caso você não tenha conhecimento, NPM é um gerenciador de pacotes que fornece um repositório central de módulos open-source para NodeJS e Javascript. Acima usamos o “npm install” para instalar o módulo em nosso projeto.

Agora vamos chamar o dispatcher no nosso servidor:

```javascript
var dispatcher = require('httpdispatcher');
Vamos usar o dispatcher em nossa função “servidor”:

function servidor(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
```

Vamos definir algumas rotas, as rotas definem o que deve acontecer quando uma certa URL for chamada através do browser:

```javascript
dispatcher.setStatic('resources');
  
dispatcher.onGet("/pagina1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Página 1');
});    

dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Post');
});
```

Você pode usar seu navegador para fazer um pedido GET apenas digitando a URL na barra de endereços. Para um pedido POST você pode usar alguma ferramenta como o GetPostMan.

Para executar o servidor basta digitar no console do Node “node servidor.js” e ver o resultado. Vamos executar e tentar acessar os seguintes caminhos:

GET /pagina1 => ‘Página 1’
POST /post1 => ‘Post’

Feito! Agora você tem um pequeno servidor HTTP simples e em execução. Veja como ficou nosso arquivo “servidor.js”:

[https://tonicdev.com/juliocarneiro/servidornode](https://tonicdev.com/juliocarneiro/servidornode)

Neste post falamos sobre como criar um servidor básico com o módulo http, juntamente com uma breve introdução ao NPM e a utilização de um módulo de Dispatcher para criar rotas para as requisições HTTP, muito simples né?

Este servidor pode ser usado em sua maquina para testes de aplicações, um ambiente de testes digamos. Para ambiente de produção recomendo que você use algo como o Express, que em algum momento eu vou abordar aqui no blog também.

Espero que tenha ajudado os iniciantes em NodeJS e contribuído com seu aprendizado! Até o próximo post, abraços!